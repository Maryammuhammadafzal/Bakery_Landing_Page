"use client";
import React, { useEffect, useState } from "react";
import BlogImage1 from "../../public/images/blog-image-1.jpg";
import BlogImage2 from "../../public/images/blog-image-2.jpg";
import BlogImage3 from "../../public/images/blog-image-3.jpg";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Aos from "aos";
import 'aos/dist/aos.css'
const BlogPage = () => {
  useEffect(()=> {
    Aos.init({
      duration: 1000,
      once: true
    })
  })
  const [active, setActive] = useState(null);

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
              onClick={() => setActive(index)}
              className={`blog-card border-non  bg-[#FFF8E8] py-0 shadow-none w-[340px] h-[380px]`}
            >
              <CardContent className="flex px-0 w-full overflow-hidden h-auto rounded-md flex-col">
                <div className="w-full h-[180px]">
                  <Image
                  data-aos="zoom-in"
                    src={image}
                    width={200}
                    height={180}
                    alt={title}
                    className="blog-image hover:scale-110 h-[180px] w-full rounded-tl-md rounded-tr-md object-cover"
                  />
                </div>
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
