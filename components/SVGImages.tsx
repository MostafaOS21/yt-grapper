import Image from "next/image";

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

export default SVGImages;
