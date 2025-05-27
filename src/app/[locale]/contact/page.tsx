import Header from '@/components/navigation/header';
import Footer from '@/components/navigation/footer';
import ContactForm from './components/ContactForm';
import Section from '@/components/atoms/section';
import Container from '@/components/atoms/container';
import SectionTitle from '@/components/sections/title';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Typography from '@/components/atoms/typography';
import Head from 'next/head';

export default function Contact() {
  const tPage = useTranslations('pages.contact');

  return (
    <div className='bg-bg-2'>
      <Head>
        <title>Nirvana Van - Contact</title>
        <meta name='description' content='Nirvana Van - Contact' />
      </Head>
      <Header fixedMenu />
      <Section className='bg-white'>
        <Container className='flex-col'>
          <div className='flex w-full max-w-3xl flex-col items-center justify-center gap-4 rounded-3xl bg-grey px-4 py-8 md:p-16'>
            <SectionTitle title={tPage('contactUs')} />
            <ContactForm />
          </div>
          <div className='flex w-full max-w-3xl flex-col items-center gap-4 rounded-3xl bg-grey px-4 py-8 md:p-16'>
            <SectionTitle title={tPage('visitWorkshop')} />
            <Image src='/map.png' alt='map' width={803 / 2} height={793 / 2} />
            <div className='flex w-full flex-col justify-between gap-4 md:flex-row'>
              <div className='flex flex-col gap-0'>
                <Typography variant='body3'>{tPage('address')}</Typography>
                <Typography variant='body1'>Z.I des Paluds</Typography>
                <Typography variant='body1'>13400 Aubagne</Typography>
              </div>
              <div className='flex flex-col gap-0'>
                <Typography variant='body3'>{tPage('phone')}</Typography>
                <Typography variant='body1'>06 64 04 96 95 </Typography>
              </div>
              <div className='flex flex-col gap-0'>
                <Typography variant='body3'>Email</Typography>
                <Typography variant='body1'>contact@nirvana-van.com</Typography>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <Footer />
    </div>
  );
}
