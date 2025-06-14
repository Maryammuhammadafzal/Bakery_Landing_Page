"use client";
import { useEffect, useState } from "react";
import HeroImage from "../public/images/Hero-image.png";
import Image from "next/image";
const ScrollImage = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scale = Math.max(0.5, 1 - offset / 1000);

  return (
    <>
      <div
        style={{
          transform: `${
            offset + 40 < 730 &&
            `translateY(${offset - 70}px) translateX(-${
              offset + 120
            }px) scale(${scale})`
          }`,
          transition: "transform 0.05s linear",
        }}
        className="w-[450px] h-[500px] 2xl:block hidden"
      >
        <Image
          width={430}
          height={400}
          src={HeroImage}
          className="w-full object-cover"
          alt="image-1"
        />
      </div>

      <div
        style={{
          transform: `${
            offset + 40 < 650 &&
            `translateY(${offset - 50}px) translateX(-${
              offset + 30
            }px) scale(${scale})`
          }`,
          transition: "transform 0.05s linear",
        }}
        className="w-[450px] h-[500px] xl:block 2xl:hidden hidden"
      >
        <Image
          width={430}
          height={400}
          src={HeroImage}
          className="w-full object-cover"
          alt="image-1"
        />
      </div>

      <div
        style={{
          transform: `${
            offset + 40 < 620 &&
            `translateY(${offset - 10}px) translateX(-${
              offset - 40
            }px) scale(${scale})`
          }`,
          transition: "transform 0.05s linear",
        }}
        className="w-[450px] h-[500px] lg:block xl:hidden hidden"
      >
        <Image
          width={430}
          height={400}
          src={HeroImage}
          className="w-full object-cover"
          alt="icon"
        />
      </div>

      <div
        style={{
          transform: `${
            offset + 40 < 600 &&
            `translateY(${offset + 40}px) translateX(-${
              offset - 100
            }px) scale(${scale})`
          }`,
          transition: "transform 0.05s linear",
        }}
        className="w-[450px] h-[500px]  md:block lg:hidden  hidden"
      >
        <Image
          width={430}
          height={400}
          src={HeroImage}
          className="w-full object-cover"
          alt="icon"
        />
      </div>
    </>
  );
};
export default ScrollImage;
