'use client';
import React from 'react';
import Image from 'next/image';
import SectionTitle from '../../../../components/sections/title';
import Section from '../../../../components/atoms/section';
import Container from '../../../../components/atoms/container';
import Typography from '../../../../components/atoms/typography';
import { useTranslations } from 'next-intl';

export default function History() {
  const tPage = useTranslations('pages.teardrop.story');
  const tAction = useTranslations('actions');

  return (
    <Section className='bg-white' topoBackground>
      <Container>
        <div className='flex flex-col items-center gap-8 md:flex-row'>
          <div className='flex w-full justify-center md:w-2/3 md:justify-end'>
            <Image
              src='/bike/history.png'
              alt='History'
              width={1155}
              height={600}
              className='w-full'
            />
          </div>
          <div className='flex w-full flex-col items-center md:w-1/3 md:items-start'>
            <SectionTitle
              //   title={tPage('title')}
              title={"De l'envie de changer la façon de voyager à vélo"}
              className='mb-4 md:text-left'
            />
            <Typography className='text-center md:mb-8 md:text-left'>
              {/* {tPage('description')} */}
              {
                "Parler de commence on a voulu faire une KV à aujourd'hui un produit fini"
              }
            </Typography>
          </div>
        </div>
      </Container>
    </Section>
  );
}
