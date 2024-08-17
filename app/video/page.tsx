"use client";
import SVGImages from "@/components/SVGImages";
import { DownloadInput } from "@/components/ui/input";
import VideoDetailsDialog from "@/components/VideoDetailsDialog";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Video() {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState<VideoInfoResponse | null>(null);
  const type: string = "video";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = (e.target as HTMLFormElement).url.value;

    setIsLoading(true);

    try {
      const res = await axios.post("/api/video?url=" + url);
      const data: VideoInfoResponse = res.data;

      if (!data) {
        throw new Error();
      }

      setInfo(data);
      setIsOpen(true);
    } catch (error) {
      toast.error("Failed to fetch video details");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="h-[80vh] flex items-center relative ">
      <form
        onSubmit={handleSubmit}
        className="w-full lg:w-[750px] mx-auto shadow-lg focus-within:shadow-xl transition-shadow"
      >
        <DownloadInput
          placeholder={`Enter ${type} URL`}
          className="w-full lg:w-[750px] text-base font-sans"
          name="url"
          isLoading={isLoading}
          required
        />
      </form>

      <SVGImages />

      <VideoDetailsDialog isOpen={isOpen} setIsOpen={setIsOpen} info={info} />
    </section>
  );
}
