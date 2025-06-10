"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Logo from "../public/logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Link from "next/link";
import { Toggle } from "./ui/toggle";
import { AlignCenter, FileTextIcon, FlameIcon, HomeIcon, InfoIcon, List, MessageCircle, UserIcon, X } from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  });
let menuRef = useRef(null);
useEffect(() => {
  const closeMenuhandler = (event) => {
    if (menuRef.current && menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  document.addEventListener("click", closeMenuhandler);

  return () => {
    document.removeEventListener("click", closeMenuhandler);
  };
}, []);
  return (
    <header className="w-full h-auto flex justify-center items-center">
      <div className="lg:w-[85%] md:w-[95%] w-[98%] py-8 md:py-12 flex justify-between items-center relative">
        <Link href="/">
          <Image
            src={Logo}
            title="Digital Horizon"
            alt="Digital Horizon"
          />
        </Link>
        <div className="w-auto h-auto px-2">
          <NavigationMenu className="justify-center items-center hidden md:flex">
            <NavigationMenuList className="flex gap-2 lg:gap-4">
              {/* Item 1 */}
              <NavigationMenuItem>
                <Link className="link" href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={`flex gap-1 flex-row items-center justify-center link ${navigationMenuTriggerStyle()}`}>
                    <span className="icon text-secondary"><HomeIcon color="#DE767B"/></span> Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              {/* Item 2 */}
              <NavigationMenuItem>
                <Link className="link" href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={`flex gap-1 flex-row items-center justify-center link ${navigationMenuTriggerStyle()}`}>
                    <span className="icon text-secondary"><UserIcon color="#DE767B"/></span> About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              {/* Item 3 */}
             <NavigationMenuItem>
                <Link className="link" href="/popular" legacyBehavior passHref>
                  <NavigationMenuLink className={`flex gap-1 flex-row items-center justify-center link ${navigationMenuTriggerStyle()}`}>
                   <span className="icon text-secondary"><FlameIcon color="#DE767B"/></span> Popular
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              {/* Item 4 */}
              <NavigationMenuItem>
                <Link className="link" href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className={`flex gap-1 flex-row items-center justify-center link ${navigationMenuTriggerStyle()}`}>
                 <span className="icon text-secondary"><FileTextIcon color="#DE767B"/></span>  Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              {/* Item 5 */}
              <NavigationMenuItem>
                <Link className="link" href="/categories" legacyBehavior passHref>
                  <NavigationMenuLink className={`flex gap-1 flex-row items-center justify-center link ${navigationMenuTriggerStyle()}`}>
                  <span className="icon text-secondary"><List color="#DE767B"/></span>  Categories
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              {/* Item 6 */}
              <NavigationMenuItem>
                <Link className="link" href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={`flex gap-1 flex-row items-center justify-center link ${navigationMenuTriggerStyle()}`}>
                   <span className="icon text-secondary"><MessageCircle color="#DE767B"/></span> Contact Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Toggle
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden flex text-2xl cursor-pointer"
          >
            <AlignCenter size={64} className="w-[100px] " />
          </Toggle>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen ? (
          <div
            data-aos="fade-left"
            ref={menuRef}
            className="mobile-menu absolute -right-2 top-0 p-3 w-[280px] h-screen bg-white shadow-lg"
          >
            <Toggle
              data-aos="fade-right"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="md:hidden flex text-2xl cursor-pointer"
            >
              <X size={64} className="w-[100px] " />
            </Toggle>

            <NavigationMenu className="w-full py-10 ">
              <NavigationMenuList className="w-full flex flex-col items-start gap-2 lg:gap-4">
                {/* Item 1 */}
                <NavigationMenuItem>
                  <Link className="link" href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`flex gap-1 flex-row items-center justify-center link ${navigationMenuTriggerStyle()}`}
                    >
                    <span className="icon text-secondary"><HomeIcon color="#DE767B"/></span>  Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                {/* Item 2 */}
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`flex gap-1 flex-row items-center justify-center link ${navigationMenuTriggerStyle()}`}
                    >
                    <span className="icon text-secondary"><UserIcon color="#DE767B"/></span>  About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                {/* Item 3 */}
             <NavigationMenuItem>
                <Link href="/popular" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <span className="icon text-secondary"><FlameIcon color="#DE767B"/></span> Popular
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
                {/* Item 4 */}
               <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <span className="icon text-secondary"><FileTextIcon color="#DE767B"/></span> Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
                {/* Item 5 */}
                <NavigationMenuItem>
                  <Link href="/categories" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`flex gap-1 flex-row items-center justify-center link ${navigationMenuTriggerStyle()}`}
                    >
                     <span className="icon text-secondary"><List color="#DE767B"/></span> Categories
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                {/* Item 6 */}
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`flex gap-1 flex-row items-center justify-center link ${navigationMenuTriggerStyle()}`}
                    >
                     <span className="icon text-secondary"><MessageCircle color="#DE767B"/></span> Contact Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
