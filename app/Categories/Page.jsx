import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import CategoryImage1 from "../../public/images/category-image-1.png";
import CategoryImage2 from "../../public/images/category-image-2.png";
import CategoryImage3 from "../../public/images/category-image-3.png";
import CategoryImage4 from "../../public/images/category-image-4.png";
import Image from 'next/image';
import { Heart, SearchX, ShoppingCart } from 'lucide-react';

const CategoriesPage = () => {
        let categories_data = [
            {
              name: "Chocolate Strawberry CupCake",
              price: "$7.99",
              image: CategoryImage1.src,
            },
            {
              name: "Chocolate Strawberry CupCake",
              price: "$7.99",
              image: CategoryImage2.src,
            },
            {
              name: "Chocolate Strawberry CupCake",
              price: "$7.99",
              image: CategoryImage3.src,
            },
            {
              name: "Chocolate Strawberry CupCake",
              price: "$7.99",
              image: CategoryImage4.src,
            },
            {
              name: "Chocolate Strawberry CupCake",
              price: "$7.99",
              image: CategoryImage1.src,
            },
            {
              name: "Chocolate Strawberry CupCake",
              price: "$7.99",
              image: CategoryImage2.src,
            },
            {
              name: "Chocolate Strawberry CupCake",
              price: "$7.99",
              image: CategoryImage3.src,
            },
            {
              name: "Chocolate Strawberry CupCake",
              price: "$7.99",
              image: CategoryImage4.src,
            },
          ];
  return (
    <div className='w-full h-auto flex lato justify-center items-center"'>
       <div className="w-full h-auto flex flex-col lato justify-center items-center">
      <div className="lg:w-[85%] md:w-[95%] w-[98%] py-8 md:py-12 flex flex-col justify-center gap-3 items-center relative">
        <h2 className="text-secondary 2xl:text-7xl text-center max-md:max-w-lg gap-2 xl:text-6xl lg:text-5xl md:text-4xl max-md:text-5xl">
          Categories
        </h2>
        <div className="w-auto h-auto px-2">
          <NavigationMenu className="justify-center items-center hidden md:flex">
            <NavigationMenuList className="flex gap-2 lg:gap-4">
              {/* Item 1 */}
              <NavigationMenuItem>
                  <NavigationMenuLink  href="/cupcake" className={`link flex gap-1 flex-row items-center justify-center link  ${navigationMenuTriggerStyle()}`}>
                     CupCakes
                  </NavigationMenuLink>
              </NavigationMenuItem>
              {/* Item 2 */}
              <NavigationMenuItem>
                {/* <Link className="link" href="/breads" passHref> */}
                  <NavigationMenuLink className={`flex gap-1 flex-row items-center justify-center link  ${navigationMenuTriggerStyle()}`}>
                   Breads
                  </NavigationMenuLink>
                {/* </Link> */}
              </NavigationMenuItem>
              {/* Item 3 */}
             <NavigationMenuItem>
                {/* <Link className="link" href="/pastries" passHref> */}
                  <NavigationMenuLink className={`flex gap-1 flex-row items-center justify-center link  ${navigationMenuTriggerStyle()}`}>
                   Pastries
                  </NavigationMenuLink>
                {/* </Link> */}
              </NavigationMenuItem>
              {/* Item 4 */}
              <NavigationMenuItem>
                {/* <Link className="link" href="/cakes" passHref> */}
                  <NavigationMenuLink className={`flex gap-1 flex-row items-center justify-center link  ${navigationMenuTriggerStyle()}`}>
                 Cakes
                  </NavigationMenuLink>
                {/* </Link> */}
              </NavigationMenuItem>
              {/* Item 5 */}
              <NavigationMenuItem>
                {/* <Link className="link" href="/cookies" passHref> */}
                  <NavigationMenuLink className={`flex gap-1 flex-row items-center justify-center link  ${navigationMenuTriggerStyle()}`}>
                  Cookies
                  </NavigationMenuLink>
                {/* </Link> */}
              </NavigationMenuItem>
              {/* Item 6 */}
              <NavigationMenuItem>
                {/* <Link className="link" href="/seasonal-special" passHref> */}
                  <NavigationMenuLink className={`flex gap-1 flex-row items-center justify-center link  ${navigationMenuTriggerStyle()}`}>
                  Seasonal Specials
                  </NavigationMenuLink>
                {/* </Link> */}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <div className='lg:w-[85%] md:w-[95%] w-[98%] py-8 md:py-12 flex justify-center gap-3 items-center'>
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center items-center w-full h-auto gap-10'>
                {categories_data.map(({ name, image, price }, index) => (
            <Card key={index} className="border-none shadow-none max-sm:w-auto w-[350px] h-[350px]">
              <CardContent className="flex justify-center items-center gap-3 relative flex-col">
                <div className="overlay absolute hover:hidden top-0 hover:bg-black/10 left-0 w-full h-full">
                <div className='w-full h-full justify-center items-center flex '>
                  <div className='flex gap-2'>
                   <div className='bg-white p-2 text-center flex justify-center items-center'>
                     <ShoppingCart className='h-4 w-4' />
                   </div>
                   <div className='bg-white p-2 text-center flex justify-center items-center'>
                     <Heart className='h-4 w-4' />
                   </div>
                   <div className='bg-white p-2 text-center flex justify-center items-center'>
                     <SearchX className='h-4 w-4' />
                   </div>
                  </div>
                </div>
                </div>
                <Image
                  src={image}
                  width={200}
                  height={150}
                  alt={name}
                  className="h-[250px]"
                />
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
    </div>
  )
}

export default CategoriesPage;
