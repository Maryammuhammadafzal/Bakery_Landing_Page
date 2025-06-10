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
import Link from "next/link";

const CategoriesPage = () => {
  return (
    <div>
       <div className="w-full h-auto flex lato justify-center items-center">
      <div className="lg:w-[85%] md:w-[95%] w-[98%] py-8 md:py-12 flex flex-col justify-center gap-3 items-center relative">
        <h2 className="text-secondary 2xl:text-7xl text-center max-md:max-w-lg gap-2 xl:text-6xl lg:text-5xl md:text-4xl max-md:text-5xl">
          Categories
        </h2>
        <div className="w-auto h-auto px-2">
          <NavigationMenu className="justify-center items-center hidden md:flex">
            <NavigationMenuList className="flex gap-2 lg:gap-4">
              {/* Item 1 */}
              <NavigationMenuItem>
                <Link className="link" href="/cupcake" passHref>
                  <NavigationMenuLink className={`flex gap-1 flex-row items-center justify-center link ${navigationMenuTriggerStyle()}`}>
                     CupCakes
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              {/* Item 2 */}
              <NavigationMenuItem>
                <Link className="link" href="/breads" passHref>
                  <NavigationMenuLink className={`flex gap-1 flex-row items-center justify-center link ${navigationMenuTriggerStyle()}`}>
                   Breads
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              {/* Item 3 */}
             <NavigationMenuItem>
                <Link className="link" href="/pastries" passHref>
                  <NavigationMenuLink className={`flex gap-1 flex-row items-center justify-center link ${navigationMenuTriggerStyle()}`}>
                   Pastries
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              {/* Item 4 */}
              <NavigationMenuItem>
                <Link className="link" href="/cakes" passHref>
                  <NavigationMenuLink className={`flex gap-1 flex-row items-center justify-center link ${navigationMenuTriggerStyle()}`}>
                 Cakes
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              {/* Item 5 */}
              <NavigationMenuItem>
                <Link className="link" href="/cookies" passHref>
                  <NavigationMenuLink className={`flex gap-1 flex-row items-center justify-center link ${navigationMenuTriggerStyle()}`}>
                  Cookies
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              {/* Item 6 */}
              <NavigationMenuItem>
                <Link className="link" href="/seasonal-special" passHref>
                  <NavigationMenuLink className={`flex gap-1 flex-row items-center justify-center link ${navigationMenuTriggerStyle()}`}>
                  Seasonal Specials
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CategoriesPage
