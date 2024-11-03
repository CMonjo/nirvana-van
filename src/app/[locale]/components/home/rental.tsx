'use client';
import React from 'react';
import SectionTitle from '../sections/sectionTitle';
import Section from '../atoms/section';
import Container from '../atoms/container';
import Typography from '../atoms/typography';
import Image from 'next/image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';
import { Stack } from '@mui/material';

export default function Rental() {
  return (
    <Section className='bg-orange text-white'>
      <Container>
        <div className='flex w-full flex-col items-center'>
          <SectionTitle title={`Envie de vivre l'expérience Nirvana ?`} />
          <SectionTitle
            title={`Louez nos caravanes au départ de Montpellier`}
            className='mb-4'
          />
        </div>
      </Container>
    </Section>
  );
}
