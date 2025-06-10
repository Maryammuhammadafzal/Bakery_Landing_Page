import Image from "next/image";
import HeroPage from "./Hero/Page";
import PopularPage from "./Popular/Page";
import AboutPage from "./About/Page";
import CategoriesPage from "./Categories/Page";

export default function Home() {
  return (
    <div>
      <HeroPage/>
      <PopularPage/>
      <AboutPage/>
      <CategoriesPage/>
    </div>
  );
}
