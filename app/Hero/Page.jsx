import React from "react";
import CupcakeIcon from "../../public/cupcake-icon.png"
import Image from "next/image";
const HeroPage = () => {
  return (
    <div className="flex h-auto md:h-screen justify-center items-center">
      <div className="flex gap-5 justify-center items-center h-auto lg:w-[90%] w-[95%]">
        <div className="left flex flex-col h-auto w-1/2 lg:pr-3 gap-4 justify-center">
        <h1 className="flex flex-wrap text-6xl gap-2 items-center">
                <span className="text-secondary">Baking Happiness,</span>
                <span className="text-primary">One Crumb at a Time</span>
                <span><Image width={50} height={50} src={CupcakeIcon} alt="icon" /></span>
        </h1>
        <p className="text-primary"></p>
        </div>
        <div className="right flex  h-auto w-1/2 items-center justify-center">
        
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
