import Header from '@/components/navigation/header';
import Footer from '@/components/navigation/footer';
import ContactForm from './components/ContactForm';
import Section from '@/components/atoms/section';
import Container from '@/components/atoms/container';
import SectionTitle from '@/components/sections/title';

export default function Teardrop() {
  return (
    <div className='h-[100vh] bg-white'>
      <Header fixedMenu />
      <Section className='bg-white'>
        <Container className='flex-col'>
          <div className='flex w-full max-w-3xl flex-col items-center justify-center gap-4 rounded-3xl bg-grey p-16'>
            <SectionTitle title={`Contactez-nous`} />
            <div className='flex h-full w-full flex-col'>
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
      <Footer />
    </div>
  );
}
