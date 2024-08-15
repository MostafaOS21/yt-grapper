import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ListVideo, Video } from "lucide-react";

export default function Header() {
  return (
    <header className="h-[67px] flex items-center justify-between border-b">
      <Link
        href={"/"}
        className="flex items-center space-x-3 p-2 px-3 rounded-md hover:bg-primary/10 transition-colors"
      >
        <Image
          src="/assets/logo.png"
          width={512}
          height={512}
          className="size-[40px]"
          alt="logo"
        />

        <span className="font-bold text-primary">YT Grapper</span>
      </Link>

      <ul className="flex items-center space-x-2">
        <li>
          <Button asChild variant={"ghost"}>
            <Link href={"?type=video"}>
              <Video className="mr-3" size={21} /> Video
            </Link>
          </Button>
          <Button asChild variant={"ghost"}>
            <Link href={"?type=playlist"}>
              <ListVideo className="mr-3" size={21} /> Playlist
            </Link>
          </Button>
        </li>
      </ul>
    </header>
  );
}
