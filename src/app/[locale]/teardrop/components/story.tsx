'use client';
import React from 'react';
import Image from 'next/image';
import SectionTitle from '../../../../components/sections/title';
import Section from '../../../../components/atoms/section';
import Container from '../../../../components/atoms/container';
import Typography from '../../../../components/atoms/typography';
import Button from '@/components/atoms/button';
import { Link } from '@/i18n/routing';

export default function Story() {
  return (
    <Section className='bg-white' topoBackground>
      <Container className='flex-col'>
        <SectionTitle
          title={`Tout le nécessaire, à tracter derrière sa voiture`}
        />
        <div className='max-w-3xl flex-col text-center'>
          <Image
            src='/teardrop/story.png'
            alt='story'
            width={1155}
            height={680}
          />
          <Typography className='mb-4 mt-8'>
            Qu’est ce qu’une TD, lister tous les avantages de la TD comparé aux
            vans, ...
          </Typography>
          <Typography className='mb-8'>
            Qu’est ce qu’une TD, lister tous les avantages de la TD comparé aux
            vans, ... Qu’est ce qu’une TD, lister tous les avantages de la TD
            comparé aux vans, ...
          </Typography>
        </div>
        <div className='flex gap-4'>
          <Link
            href={{
              pathname: '/configurator',
              query: { product: 'teardrop' },
            }}
          >
            <Button color='orange'>Configurer ma teardrop</Button>
          </Link>
          <Link
            href={{
              pathname: '/contact',
              query: { product: 'teardrop' },
            }}
          >
            <Button variant='outlined' color='orange'>
              Je veux la louer
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
