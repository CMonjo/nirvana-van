import React from "react";
import Image from "next/image";
import ButtonLink from "../atoms/button-link";

export default function Hero() {
  return (
    <div className="min-h-screen w-full relative">
      <Image
        src={`/hero.png`}
        fill
        className="object-cover absolute inset-0"
        alt="Picture of the author"
      />
      {/* <div className="hero-mask absolute w-full h-full z-10"></div> */}
      <div className="absolute top-28 w-full flex flex-col items-center justify-center">
        <h1 className="font-acorn lg:text-7xl md:text-5xl text-4xl max-w-5xl text-center my-6 text-white">
          Pour ceux qui osent <br />
          partir à l'aventure
        </h1>
      </div>
      <div className="absolute bottom-28 w-full flex flex-col items-center justify-center">
        <h3 className="font-kobe11 text-2xl max-w-2xl text-center my-6 text-white">
          Chez Nirvana Van, nous frabriquons des mini-cararavanes pour vous
          évader de la ville sans sacrifice sur le confort.
        </h3>
        <ButtonLink href="#choice">Acheter</ButtonLink>
      </div>
    </div>
  );
}
