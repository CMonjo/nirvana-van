'use client';
import React from 'react';
import Image from 'next/image';
import SectionTitle from '../../../components/sections/title';
import Section from '../../../components/atoms/section';
import Container from '../../../components/atoms/container';
import Typography from '../../../components/atoms/typography';

export default function Story() {
  return (
    <Section className='bg-white' topoBackground>
      <Container className='flex-col'>
        <SectionTitle title={`Pour la petite histoire`} />
        <div className='max-w-2xl flex-col gap-4 text-center'>
          <Typography>
            C’est dans mon atelier à Montpellier que je conçois et fabrique,
            depuis deux ans, des mini-caravanes uniques.
          </Typography>
          <Typography>
            Pensées pour offrir un cocon à la fois confortable, pratique et
            esthétique, elles incarnent le compromis idéal entre simplicité et
            confort d’utilisation, tout en étant faciles à emmener derrière une
            voiture ou un vélo.
          </Typography>
          <Typography className='mb-4'>
            Si vous souhaitez discuter d’un projet ou découvrir de près le
            processus de fabrication, je serai ravi de vous accueillir !
          </Typography>
          <Image src='/story.png' alt='story' width={1155} height={680} />
        </div>
      </Container>
    </Section>
  );
}
