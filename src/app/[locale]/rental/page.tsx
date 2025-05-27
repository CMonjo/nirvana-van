'use client';

import Header from '@/components/navigation/header';
import Footer from '@/components/navigation/footer';
import RentalForm from './components/RentalForm';
import Section from '@/components/atoms/section';
import Container from '@/components/atoms/container';
import SectionTitle from '@/components/sections/title';
import { useTranslations } from 'next-intl';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nirvana Van - Rental',
  description: 'Nirvana Van - Rental',
};

export default function Teardrop() {
  const tPage = useTranslations('pages.rental');

  return (
    <div className='bg-bg-2'>
      <Header fixedMenu />
      <Section className='bg-white'>
        <Container className='flex-col'>
          <div className='flex w-full max-w-3xl flex-col items-center justify-center gap-4 rounded-3xl bg-grey px-4 py-8 md:p-16'>
            <SectionTitle title={tPage('title')} />
            <RentalForm />
          </div>
        </Container>
      </Section>
      <Footer />
    </div>
  );
}
