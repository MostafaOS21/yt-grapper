import { DownloadInput, Input } from "@/components/ui/input";

export default function Home({ searchParams }: SearchParamProps) {
  const type: string = searchParams.type
    ? Array.isArray(searchParams.type)
      ? "video"
      : searchParams.type
    : "video";

  return (
    <section className="h-[80vh] grid place-content-center">
      <DownloadInput
        placeholder="URL"
        className="w-[300px] md:w-[550px] lg:w-[650px]"
        btnText={`Download ${type}`}
      />
    </section>
  );
}
