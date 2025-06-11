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
  console.log(window.scrollY * 2);

  console.log(offset);
  const scale = Math.max(0.5, 1 - offset / 1000);

  console.log(offset);

  return (
    <>
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
        className="w-[450px] h-[500px] max-xl:hidden block"
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
            offset + 40 < 620 &&
            `translateY(${offset - 10}px) translateX(-${
              offset - 40
            }px) scale(${scale})`
          }`,
          transition: "transform 0.05s linear",
        }}
        className="w-[450px] h-[500px] max-lg:hidden block"
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
            offset + 40 < 610 &&
            `translateY(${offset + 0}px) translateX(-${
              offset - 100
            }px) scale(${scale})`
          }`,
          transition: "transform 0.05s linear",
        }}
        className="w-[450px] h-[500px] max-md:hidden block"
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
