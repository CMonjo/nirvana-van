import Header from '@/components/navigation/header';
import Footer from '@/components/navigation/footer';
import ContactForm from './components/ContactForm';
import Section from '@/components/atoms/section';
import Container from '@mui/material/Container';

export default function Teardrop() {
  return (
    <div className='h-[100vh] bg-green'>
      <Header fixedMenu />
      <Section className=' bg-orange' topoBackground>
        <Container className='m-12  flex flex-col items-center justify-center rounded-2xl bg-grey p-8'>
          <ContactForm />
        </Container>
      </Section>
      <Footer />
    </div>
  );
}
