"use client";
import React, { useEffect, useState } from "react";
import BlogImage1 from "../../public/images/blog-image-1.jpg";
import BlogImage2 from "../../public/images/blog-image-2.jpg";
import BlogImage3 from "../../public/images/blog-image-3.jpg";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
const BlogPage = () => {
  const [active , setActive ] = useState(false)

  let blog_data = [
    {
      title: "The Secret to Perfect Sour dough Bread.",
      description:
        "Ever wondered why sourdough is all the rage? Dive into the fascinating world of sourdough and learn how we achieve that perfectly crisp crust and airy interior.",
      image: BlogImage1.src,
    },
    {
      title: "Baking for the Holidays: Festive Treat Ideas.",
      description:
        "The holidays are around the corner, and it’s time to deck the table with treats! Discover our favorite holiday recipes and pro tips for making your celebrations extra sweet.",
      image: BlogImage2.src,
    },
    {
      title: "5 Baking Mistakes You Didn’t Know You Were Making.",
      description:
        "From overmixing to improper measuring, these common errors could be sabotaging your baked goods. Learn how to avoid them and elevate your baking game.",
      image: BlogImage3.src,
    },
  ];
let card = document.getElementsByClassName('blog-card')
console.log(card);

  return (
    <div className="w-full h-auto py-15 flex justify-center items-center">
      <div className="lg:w-[85%] w-full flex justify-center items-center h-auto gap-10 flex-col">
        <h2 className="text-primary 2xl:text-7xl text-center max-md:max-w-lg gap-2 xl:text-6xl lg:text-5xl md:text-4xl max-md:text-5xl">
          <span className="text-secondary">Freshly</span> Backed Thoughts
        </h2>
        <div className="w-full h-auto lato flex flex-wrap gap-4 justify-evenly max-md:w-full max-md:justify-center max-md:h-[500px] max-md:relative items-center">
          {blog_data.map(({ title, image, description }, index) => (
            <Card
              key={index}
              onClick={()=> setActive(true)}
              className={`blog-card ${active ? "z-50" : "z-10"} border-none max-md:absolute z-10 ${
                (index == 0 &&
                  "max-md:left-[5%] max-sm:w-[85%] max-sm:h-auto max-sm:min-h-[380px] max-sm:left-0") ||
                (index == 1 &&
                  "max-md:left-[15%] max-sm:left-[5%] max-sm:w-[85%] max-sm:h-auto max-sm:min-h-[380px]") ||
                (index == 2 &&
                  "max-md:left-[30%] max-sm:w-[85%] max-sm:h-auto max-sm:min-h-[380px] max-sm:left-[10%]")
              }  max-md:shadow-2xl max-md:top-20 bg-[#FFF8E8] py-0 shadow-none w-[340px] h-[380px]`}
            >
              <CardContent className="flex px-0 w-full  h-auto rounded-md flex-col">
                <Image
                  src={image}
                  width={200}
                  height={180}
                  alt={title}
                  className="h-[180px] w-full rounded-tl-md rounded-tr-md object-cover"
                />
                <p className="text-primary px-4 py-2 text-base">{title}</p>
                <p className="text-primary px-4 text-base">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
