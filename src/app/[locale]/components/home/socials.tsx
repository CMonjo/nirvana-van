'use client';
import React from 'react';
import SectionTitle from '../sections/sectionTitle';
import Section from '../atoms/section';
import Container from '../atoms/container';
import Typography from '../atoms/typography';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';
import { Stack } from '@mui/material';

export default function Socials() {
  return (
    <div className='bg-white pb-16'>
      <Section>
        <Container className='mb-0 flex-col pb-4'>
          <div className='flex w-full'>
            <Typography variant='caption' className='text-orange'>
              #nirvanavan
            </Typography>
          </div>
          <div className='flex w-full flex-row items-center justify-between'>
            <SectionTitle title={`Partagez vos aventures`} className='mb-0' />
            <Stack spacing={2} direction={'row'} className='items-center'>
              <Link href='https://www.youtube.com' target='_blank'>
                <YouTubeIcon style={{ fontSize: 46 }} />
              </Link>
              <Link href='https://www.youtube.com' target='_blank'>
                <FacebookIcon style={{ fontSize: 38 }} />
              </Link>
              <Link href='https://www.youtube.com' target='_blank'>
                <InstagramIcon style={{ fontSize: 38 }} />
              </Link>
            </Stack>
          </div>
        </Container>
      </Section>
      <Stack
        className='flex w-full overflow-hidden'
        pl={2}
        spacing={2}
        direction={'row'}
      >
        <Image
          className='rounded-3xl'
          width={235}
          height={355}
          alt={'social-image-1'}
          src={'/bento-1.jpeg'}
        />
        <Image
          className='rounded-3xl'
          width={235}
          height={355}
          alt={'social-image-1'}
          src={'/bento-1.jpeg'}
        />
        <Image
          className='rounded-3xl'
          width={235}
          height={355}
          alt={'social-image-1'}
          src={'/bento-1.jpeg'}
        />
        <Image
          className='rounded-3xl'
          width={235}
          height={355}
          alt={'social-image-1'}
          src={'/bento-1.jpeg'}
        />
        <Image
          className='rounded-3xl'
          width={235}
          height={355}
          alt={'social-image-1'}
          src={'/bento-1.jpeg'}
        />
        <Image
          className='rounded-3xl'
          width={235}
          height={355}
          alt={'social-image-1'}
          src={'/bento-1.jpeg'}
        />
        <Image
          className='rounded-3xl'
          width={235}
          height={355}
          alt={'social-image-1'}
          src={'/bento-1.jpeg'}
        />
        <Image
          className='rounded-3xl'
          width={235}
          height={355}
          alt={'social-image-1'}
          src={'/bento-1.jpeg'}
        />
        <Image
          className='rounded-3xl'
          width={235}
          height={355}
          alt={'social-image-1'}
          src={'/bento-1.jpeg'}
        />
      </Stack>
    </div>
  );
}
