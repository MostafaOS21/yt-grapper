import ytdl from "ytdl-core";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { formatVideoDuration } from "@/lib/utils";

export async function POST(req: NextApiRequest) {
  const videoUrl = new URL(req.url as string).searchParams.get("url") as string;

  const info = await ytdl.getInfo(videoUrl).then((info) => {
    const formats = ytdl.filterFormats(info.formats, "video");

    // get the highest quality thumbnail
    const thumbnail = info.videoDetails.thumbnails.reduce((prev, current) =>
      prev.width > current.width ? prev : current
    ).url;

    const videoQualities = formats
      .map((format) => ({
        quality: format.qualityLabel,
        // url: format.url,
        mimeType: format.mimeType,
        // container: format.container,
        // codec: format.codecs,
      }))
      .sort((a, b) => {
        const aQuality = parseInt(a.quality.split("p")[0]);
        const bQuality = parseInt(b.quality.split("p")[0]);

        return bQuality - aQuality;
      })
      .filter((format) => format.mimeType?.includes("mp4"));

    const audioFormat = ytdl
      .filterFormats(info.formats, "audio")
      .map((format) => ({
        quality: format.audioQuality,
        mimeType: format.mimeType?.split(";")[0],
        container: format.container,
      }))
      .filter(
        (format, index, self) =>
          index ===
          self.findIndex(
            (t) =>
              t.quality === format.quality && t.mimeType === format.mimeType
          )
      );

    const duration = formatVideoDuration(
      parseInt(info.videoDetails.lengthSeconds)
    );

    return {
      thumbnail,
      title: info.videoDetails.title,
      duration,
      videoQualities,
      audioFormat,
    };
  });

  console.log(info);

  return NextResponse.json(info);
}
