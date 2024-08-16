declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

declare type VideoInfoResponse = {
  thumbnail: string;
  title: string;
  duration: string;
  videoQualities: {
    quality: string;
    url: string;
    mimeType: string;
    container: string;
    codec: string;
  }[];
};
