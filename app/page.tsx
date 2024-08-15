import { Button } from "@/components/ui/button";
import { DownloadInput, Input } from "@/components/ui/input";

export default function Home() {
  return (
    <>
      {/* <Button>Hello World!</Button> */}
      <DownloadInput
        placeholder="URL"
        className="w-[300px] md:w-[550px] lg:w-[650px]"
      />
    </>
  );
}
