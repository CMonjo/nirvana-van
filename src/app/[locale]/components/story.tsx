'use client';
import React from 'react';
import Image from 'next/image';
import SectionTitle from '../../../components/sections/sectionTitle';
import Section from '../../../components/atoms/section';
import Container from '../../../components/atoms/container';
import Typography from '../../../components/atoms/typography';

export default function Story() {
  return (
    <Section className='bg-white' topoBackground>
      <Container className='flex-col'>
        <SectionTitle title={`Pour la petite histoire`} />
        <div className='max-w-3xl flex-col text-center'>
          <Typography className='mb-4'>
            Nous construisons nos caravanes dans le but de vous offrir une
            expérience de voyage unique, avec tous le confort necessaire, en
            choisissant des matériaux nobles que nous assemblons dans notre
            atelier à Montpellier.
          </Typography>
          <Typography className='mb-8'>
            {' '}
            Que ce soit en voiture ou en vélo, les caravanes sont prête à vous
            accompagner dans votre aventure qu’importe la saison.
          </Typography>
          <Image src='/story.png' alt='story' width={1155} height={680} />
        </div>
      </Container>
    </Section>
  );
}
