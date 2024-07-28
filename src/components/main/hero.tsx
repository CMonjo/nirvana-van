import React from 'react';
import Image from 'next/image';
import Button from '../atoms/button';

export default function Hero() {
  return (
    <div className='relative min-h-screen w-full'>
      <Image
        src={`/hero.png`}
        fill
        className='absolute inset-0 object-cover'
        alt='Picture of the author'
      />
      {/* <div className="hero-mask absolute w-full h-full z-10"></div> */}
      <div className='absolute top-28 flex w-full flex-col items-center justify-center'>
        <h1 className='my-6 max-w-5xl text-center font-acorn text-4xl text-white md:text-5xl lg:text-7xl'>
          Pour ceux qui osent <br />
          partir à l'aventure
        </h1>
      </div>

      <div className='absolute bottom-28 flex w-full flex-col items-center justify-center'>
        <h3 className='my-6 max-w-2xl text-center font-kobe11 text-2xl text-white'>
          Chez Nirvana Van, nous frabriquons des mini-cararavanes pour vous
          évader de la ville sans sacrifice sur le confort.
        </h3>
        <Button href='#choice'>Acheter</Button>
      </div>
    </div>
  );
}
