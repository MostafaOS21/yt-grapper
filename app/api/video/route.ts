import ytdl from "ytdl-core";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { formatVideoDuration } from "@/lib/utils";

export async function POST(req: NextApiRequest) {
  // example: /api/video?url=https://www.youtube.com/watch?v=UbYg6NK03aQ
  const videoUrl = new URL(
    req.url as string,
    "http://localhost:3000"
  ).searchParams.get("url") as string;

  const info = await ytdl.getInfo(videoUrl).then((info) => {
    const formats = ytdl.filterFormats(info.formats, "video");

    // get the highest quality thumbnail
    const thumbnail = info.videoDetails.thumbnails.reduce((prev, current) =>
      prev.width > current.width ? prev : current
    ).url;

    const videoQualities = formats
      .map((format) => ({
        quality: format.qualityLabel,
        url: format.url,
        mimeType: format.mimeType,
        container: format.container,
        codec: format.codecs,
      }))
      .sort((a, b) => {
        const aQuality = parseInt(a.quality.split("p")[0]);
        const bQuality = parseInt(b.quality.split("p")[0]);

        return bQuality - aQuality;
      });

    const audioFormats = ytdl.filterFormats(info.formats, "audio");

    const duration = formatVideoDuration(
      parseInt(info.videoDetails.lengthSeconds)
    );

    console.log(duration);

    return {
      thumbnail,
      title: info.videoDetails.title,
      duration,
      videoQualities,
      audioFormats,
    };
  });

  console.log(info);

  return NextResponse.json(info);
}
