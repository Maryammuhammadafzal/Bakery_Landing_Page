import Image from "next/image";
import HeroPage from "./Hero/Page";
import PopularPage from "./Popular/Page";

export default function Home() {
  return (
    <div>
      <HeroPage/>
      <PopularPage/>
    </div>
  );
}
