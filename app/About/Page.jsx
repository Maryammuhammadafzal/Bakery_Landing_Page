import React from "react";
import AboutImage from "../../public/images/about-image.jpg";
import Image from "next/image";
const AboutPage = () => {
  return (
    <div className="flex h-auto py-20 justify-center items-center">
      <div className="flex gap-5 max-sm:px-2  md:flex-row flex-col justify-center items-center h-auto w-full">
        <div className="left md:pl-24  flex flex-col h-auto md:w-[55%] w-full gap-4 md:items-start items-center justify-center">
          <h1 className=" text-primary 2xl:text-[64px] md:text-start text-center max-md:max-w-lg gap-2 xl:text-5xl lg:text-4xl md:text-3xl max-md:text-4xl items-center">
            <span className="text-primary">
              <span className="text-secondary">Where Every Bite Tells a </span>
              Story of Love and Craftsmanship
            </span>
          </h1>
          <p className="text-primary lato md:text-start text-center text-base max-w-xl">
            <span className="text-secondary text-2xl">W</span>elcome to Crème
            Crust, your ultimate destination for mouthwatering, handcrafted
            treats. Nestled in the heart of our community, we’re more than just
            a bakery – we’re a haven for those who appreciate the art of baking
            and the warmth it brings.
          </p>
        </div>
        <div className="right flex md:pl-6 h-auto md:w-[45%] w-full items-center justify-center">
          <Image
            width={430}
            height={100}
            src={AboutImage}
            alt="icon"
            className="rounded-lg w-full object-cover lg:h-[430px] md:h-[380px] h-[400px] object-center md:object-bottom-left"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
