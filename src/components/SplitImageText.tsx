'use client';
import React from 'react';
import Image from 'next/image';
import Container from './atoms/container';
import Typography from './atoms/typography';
import HeroContainer from './sections/heroContainer';

export default function SplitImageText({
  section,
  title,
  description,
  imageRight = false,
  imageSource,
}: Readonly<{
  section: string;
  title: string;
  description: string;
  imageRight?: boolean;
  imageSource: string;
}>) {
  const bulletPoints = description.split('\n');

  return (
    <HeroContainer
      className={`flex ${imageRight ? 'md:flex-row-reverse' : 'md:flex-row'}`}
      headerSticky
    >
      <Container
        className={`flex flex-1 flex-col ${imageRight ? '!items-start' : '!items-end'}`}
      >
        <Typography variant='h1'>{section}</Typography>
        <Typography variant='h3' className='mb-4 font-medium'>
          {title}
        </Typography>
        <ul className='list-disc pl-4'>
          {bulletPoints.map((point, index) => (
            <li key={index}>
              <Typography variant='body1' className='text-right'>
                {point}
              </Typography>
            </li>
          ))}
        </ul>
        {/* </div> */}
      </Container>
      <Container className='relative flex flex-1'>
        <div className='relative flex h-full flex-1 rounded-3xl bg-red-500 p-2'>
          <Image
            fill
            src={imageSource}
            alt='bento'
            className='rounded-3xl object-cover'
          />
        </div>
      </Container>
      {/*

      <Section className='relative flex flex-1'>
        <Image
          src={imageSource}
          alt='bento'
          fill
          className='rounded-3xl object-cover'
        />
      </Section> */}
    </HeroContainer>
    // <Section className={`bg-white `}>
    //   <Container>
    //     <div
    //       className={`flex w-full flex-col items-stretch gap-4 md:gap-8 ${imageRight ? 'md:flex-row-reverse' : 'md:flex-row'}`}
    //     >
    //       <div className='relative flex min-h-[300px] w-full flex-[3] items-center justify-center rounded-3xl bg-orange md:min-h-[450px]'>
    //         <Typography
    //           variant='h1'
    //           className='z-10 text-5xl font-medium text-white'
    //         >
    //           {section}
    //         </Typography>
    //         <Image
    //           fill
    //           src={imageSource}
    //           alt='bento'
    //           className='rounded-3xl object-cover'
    //         />
    //         <div className='absolute inset-0 rounded-3xl bg-black/15' />
    //       </div>

    //       <div className='flex flex-[2] flex-col rounded-3xl bg-grey p-8'>
    //         <Typography variant='h3' className='mb-4 font-medium'>
    //           {title}
    //         </Typography>
    //         <ul className='list-disc pl-4'>
    //           {bulletPoints.map((point, index) => (
    //             <li key={index}>
    //               <Typography variant='body1'>{point}</Typography>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     </div>
    //   </Container>
    // </Section>
  );
}
