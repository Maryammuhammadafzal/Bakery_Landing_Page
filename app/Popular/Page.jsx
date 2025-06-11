import React from "react";
// import PopularImage1 from "../../public/images/popular-image-1.png";
import PopularImage2 from "../../public/images/popular-image-2.png";
import PopularImage3 from "../../public/images/popular-image-3.png";
import PopularImage4 from "../../public/images/popular-image-4.png";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
const PopularPage = () => {
  let popular_data = [
    {
      name: "Chocolate Strawberry CupCake",
      price: "$7.99",
      // image: PopularImage1,
    },
    {
      name: "Chocolate Strawberry CupCake",
      price: "$7.99",
      image: PopularImage2.src,
    },
    {
      name: "Chocolate Strawberry CupCake",
      price: "$7.99",
      image: PopularImage3.src,
    },
    {
      name: "Chocolate Strawberry CupCake",
      price: "$7.99",
      image: PopularImage4.src,
    },
  ];
  return (
    <div className="w-full h-auto py-15 flex justify-center items-center">
      <div className="lg:w-[85%] w-full flex justify-center items-center h-auto gap-5 flex-col">
        <h2 className="text-primary 2xl:text-7xl text-center max-md:max-w-lg gap-2 xl:text-6xl lg:text-5xl md:text-4xl max-md:text-5xl">
          Our <span className="text-secondary">Popular</span> Items
        </h2>
        <div className="w-full h-auto grid lato lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 justify-center items-center">
          {popular_data.map(({ name, image, price }, index) => (
            <Card key={index} className="border-none max-sm:w-auto shadow-none w-[350px] h-[300px]">
              <CardContent className="flex justify-center items-center gap-3 flex-col">
              {
                index != 0 ?
                <Image
                  src={image}
                  width={200}
                  height={150}
                  alt={name}
                  className="h-[250px]"
                /> :
                (<div className="h-[250px]"></div>)
              }  
                <p className="text-primary px-10 text-center text-lg">
                  {name}
                </p>
                <p className="text-secondary text-base">{price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularPage;
