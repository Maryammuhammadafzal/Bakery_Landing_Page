import React from "react";
import CupcakeIcon from "../../public/cupcake-icon.png"
import HeroImage from "../../public/images/Hero-image.png"
import Image from "next/image";
const HeroPage = () => {
  return (
    <div className="flex h-auto py-10 justify-center items-center">
      <div className="flex gap-5 justify-center items-center h-auto lg:w-[90%] w-[95%]">
        <div className="left flex flex-col h-auto w-1/2 gap-4 justify-center">
        <h1 className=" text-primary text-7xl gap-2 items-center">
             <span className="text-primary"><span className="text-secondary">Baking Happiness,</span>One Crumb at a Time<Image width={50} height={50} className="inline mx-2" src={CupcakeIcon} alt="icon" /></span>
        </h1>
        <p className="text-primary lato max-w-xl">
          <span className="text-secondary text-2xl">W</span>elcome to Crème Crust, your destination for handcrafted treats made with love and premium ingredients. Our passion for baking shines through every loaf, tart, and cookie we create. Discover the magic of fresh, from-scratch delights at our cozy bakery.
        </p>
        </div>
        <div className="right flex  h-auto w-1/2 items-center justify-center">
        <Image width={430} height={400} src={HeroImage} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
