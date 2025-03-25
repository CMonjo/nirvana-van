'use client';
import React from 'react';
import Image from 'next/image';
import Container from './atoms/container';
import Typography from './atoms/typography';
import HeroContainer from './sections/heroContainer';
import Button from './atoms/button';
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
  //   const bulletPoints = description.split('\n');

  return (
    <HeroContainer
      className={`flex flex-col ${imageRight ? 'md:flex-row-reverse' : 'md:flex-row'} !md:min-h-[80vh] !min-h-[80vh]  bg-white`}
      headerSticky
    >
      {/* Desktop version */}
      <Container className={`hidden flex-[1] flex-col !items-start md:flex`}>
        <Typography variant='h1'>{section}</Typography>
        <Typography variant='h3' className='mb-4 font-medium'>
          {title}
        </Typography>
        <Button size='large' color='orange'>
          Configurer
        </Button>
        {/* <ul className='list-disc pl-4'>
          {bulletPoints.map((point, index) => (
            <li key={index}>
              <Typography variant='body1' className='text-left'>
                {point}
              </Typography>
            </li>
          ))}
        </ul> */}
      </Container>
      <Container className='relative hidden flex-[2]  !px-0 md:flex'>
        <div className='relative flex h-full w-full flex-1 rounded-2xl !px-0'>
          <Image
            fill
            src={imageSource}
            alt={title}
            className={`rounded-2xl ${imageRight ? 'rounded-l-none' : 'rounded-r-none'} object-cover`}
          />
        </div>
      </Container>

      {/* Mobile version */}
      <Container className={`flex  flex-col md:hidden`} noGap>
        <Typography variant='h1'>{section}</Typography>
        <Typography
          variant='h3'
          className='mb-2 text-center font-medium md:mb-4'
        >
          {title}
        </Typography>
        {/* {bulletPoints.map((point, index) => (
          <Typography variant='body1' key={index} className='text-center'>
            {point}
          </Typography>
        ))} */}
      </Container>
      <div className='relative h-[450px] w-full md:hidden'>
        <Image fill src={imageSource} alt={title} className='object-cover' />
      </div>
    </HeroContainer>
  );
}
