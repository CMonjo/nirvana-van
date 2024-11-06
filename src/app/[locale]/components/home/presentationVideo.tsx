import React from 'react';
import SectionTitle from '../sections/sectionTitle';
import Section from '../atoms/section';
import Container from '../atoms/container';
import Typography from '../atoms/typography';

export default function PresentationVideo() {
  return (
    <Section className='bg-dark text-white'>
      <Container className='relative flex flex-col'>
        <SectionTitle title={'Nirvana Van en action'} className='lg:hidden' />
        <div className='h-[200px] w-full overflow-hidden sm:h-[460px]'>
          <video autoPlay loop muted className='h-[200px] w-full sm:h-[460px]'>
            <source src='/videos/home.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='absolute z-10 hidden w-full items-center justify-between px-4 py-16 lg:flex'>
          <Typography variant='h2' className={'text-6xl'}>
            Nirvana Van
          </Typography>
          <Typography variant='h2' className={'text-6xl'}>
            En action!
          </Typography>
        </div>
      </Container>
    </Section>
  );
}
