"use client";
import { DownloadInput, Input } from "@/components/ui/input";
import VideoDetailsDialog from "@/components/VideoDetailsDialog";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Home({ searchParams }: SearchParamProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState<VideoInfoResponse | null>(null);
  const type: string = searchParams.type
    ? Array.isArray(searchParams.type)
      ? "video"
      : searchParams.type
    : "video";

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

      <VideoDetailsDialog isOpen={isOpen} info={info} />
    </section>
  );
}

const SVGImages = () => (
  <>
    <Image
      src="/assets/blurry_balls.svg"
      width={320}
      height={320}
      alt="svg"
      className="absolute left-1/2 top-1/2 transform -translate-x-[65%] -translate-y-[65%] -z-10"
    />
    <Image
      src="/assets/blurry_balls_2.svg"
      width={320}
      height={320}
      alt="svg"
      className="absolute left-1/2 top-1/2 transform -translate-x-[40%] -translate-y-[22%] -z-10 opacity-70"
    />
  </>
);
