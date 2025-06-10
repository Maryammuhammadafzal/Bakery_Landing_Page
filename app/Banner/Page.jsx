import React from "react";
import BannerImage from "../../public/images/special-banner.jpg";
import CupcakeIcon from "../../public/cupcake-icon.png"
import Image from "next/image";
const SpecialBannerPage = () => {
  return (
    <div className="w-full py-20 h-auto justify-center lato items-center flex">
      <div
        className="w-full h-[450px] flex justify-center items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BannerImage.src})` }}
      >
        <div className="w-full h-auto flex ">
          <div className="flex flex-col pl-10 gap-5">
            <h2 className="text-primary pl-3 2xl:text-7xl text-center max-md:max-w-lg gap-2 xl:text-6xl lg:text-5xl md:text-4xl max-md:text-5xl">
              <span className="text-secondary">Special</span> Services
            </h2>
            <div className="list">
                <ul className="flex flex-col ">
                        <li className="flex gap-2 text-2xl font-medium items-center text-primary">
                                <Image width={40} height={40} className="inline mx-2" src={CupcakeIcon} alt="icon" /> Custom Cakes
                        </li>
                        <li className="flex gap-2 text-2xl font-medium items-center text-primary">
                                <Image width={40} height={40} className="inline mx-2" src={CupcakeIcon} alt="icon" /> Event Catering
                        </li>
                        <li className="flex gap-2 text-2xl font-medium items-center text-primary">
                                <Image width={40} height={40} className="inline mx-2" src={CupcakeIcon} alt="icon" /> Baking Classes
                        </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialBannerPage;
