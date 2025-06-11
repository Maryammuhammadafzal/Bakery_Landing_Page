import Image from "next/image";
import HeroPage from "./Hero/Page";
import PopularPage from "./Popular/Page";
import AboutPage from "./About/Page";
import CategoriesPage from "./Categories/Page";
import SpecialBannerPage from "./Banner/Page";
import BlogPage from "./Blog/Page";

export default function Home() {
  return (
    <div className="w-full h-auto overflow-hidden">
      <HeroPage/>
      <PopularPage/>
      <AboutPage/>
      <CategoriesPage/>
      <SpecialBannerPage/>
      <BlogPage/>
    </div>
  );
}
