'use client';

import Header from '@/components/navigation/header';
import Footer from '@/components/navigation/footer';
import ContactForm from './components/ContactForm';
import Section from '@/components/atoms/section';
import Container from '@/components/atoms/container';
import SectionTitle from '@/components/sections/title';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Typography from '@/components/atoms/typography';
export default function Teardrop() {
  const tPage = useTranslations('pages.contact');

  return (
    <div className='bg-bg-2'>
      <Header fixedMenu />
      <Section className='bg-white'>
        <Container className='flex-col'>
          <div className='flex w-full max-w-3xl flex-col items-center justify-center gap-4 rounded-3xl bg-grey px-4 py-8 md:p-16'>
            <SectionTitle title={tPage('title')} />
            <ContactForm />
          </div>
          <div className='flex w-full max-w-3xl flex-col items-center gap-4 rounded-3xl bg-grey px-4 py-8 md:p-16'>
            <SectionTitle title={"Venez découvrir l'atelier"} />
            <Image src='/map.png' alt='map' width={803 / 2} height={793 / 2} />
            <div className='flex w-full flex-col justify-between gap-4 md:flex-row'>
              <div className='flex flex-col gap-0'>
                <Typography variant='body3'>Adresse</Typography>
                <Typography variant='body1'>51 rue de Barcelone</Typography>
                <Typography variant='body1'>75010 Paris</Typography>
              </div>
              <div className='flex flex-col gap-0'>
                <Typography variant='body3'>Téléphone</Typography>
                <Typography variant='body1'>01 43 54 23 89</Typography>
              </div>
              <div className='flex flex-col gap-0'>
                <Typography variant='body3'>Email</Typography>
                <Typography variant='body1'>contact@atelier.com</Typography>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <Footer />
    </div>
  );
}
