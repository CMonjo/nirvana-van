import Header from '@/components/navigation/header';
import Footer from '@/components/navigation/footer';
import ContactForm from './components/ContactForm';
import Section from '@/components/atoms/section';
import Container from '@/components/atoms/container';
import SectionTitle from '@/components/sections/title';

export default function Teardrop() {
  return (
    <div className='bg-bg-2'>
      <Header fixedMenu />
      <Section className='bg-white'>
        <Container className='flex-col'>
          <div className='flex w-full max-w-3xl flex-col items-center justify-center gap-4 rounded-3xl bg-grey px-4 py-8 md:p-16'>
            <SectionTitle title={`Contactez-nous`} />
            <ContactForm />
          </div>
        </Container>
      </Section>
      <Footer />
    </div>
  );
}
