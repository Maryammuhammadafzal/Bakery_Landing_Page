import React from "react";
import CupcakeIcon from "../../public/cupcake-icon.png"
import HeroImage from "../../public/images/Hero-image.png"
import Image from "next/image";
const HeroPage = () => {
  return (
    <div className="flex h-auto py-16 justify-center items-center">
      <div className="flex gap-5 md:flex-row flex-col justify-center items-center h-auto lg:w-[90%] w-[95%]">
        <div className="left flex flex-col h-auto md:w-1/2 w-full gap-4 md:items-start items-center justify-center">
        <h1 className=" text-primary 2xl:text-7xl md:text-start text-center max-md:max-w-lg gap-2 xl:text-6xl lg:text-5xl md:text-4xl max-md:text-5xl items-center">
             <span className="text-primary"><span className="text-secondary">Baking Happiness,</span>One Crumb at a Time<Image width={50} height={50} className="inline mx-2" src={CupcakeIcon} alt="icon" /></span>
        </h1>
        <p className="text-primary lato md:text-start text-center  text-lg max-w-xl">
          <span className="text-secondary text-2xl">W</span>elcome to Crème Crust, your destination for handcrafted treats made with love and premium ingredients. Our passion for baking shines through every loaf, tart, and cookie we create. Discover the magic of fresh, from-scratch delights at our cozy bakery.
        </p>
        </div>
        <div className="right flex  h-auto md:w-1/2 w-full items-center justify-center">
        <Image width={430} height={400} src={HeroImage} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
