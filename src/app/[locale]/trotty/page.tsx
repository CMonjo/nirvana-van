import Header from '@/components/navigation/header';
import Footer from '@/components/navigation/footer';
import Video from '@/components/sections/video';
import FAQ from '@/components/sections/faq';
import Typography from '@/components/atoms/typography';

export default function Teardrop() {
  return (
    <div className='bg-bg-2'>
      <Header />
      <main className='flex w-full flex-col items-center'>
        <Video
          source='/teardrop/video.mp4'
          thumbnail='/bento-2.jpeg'
          title='La Trotty en action !'
          descriptionLeft='La Trotty'
          descriptionRight='En action!'
          showSocials
        />
        <Typography>HERO (comme TD)</Typography>
        <Typography>Section "Text" pour expliquer le projet</Typography>
        <Typography>Video</Typography>
        <Typography>"Specifications" (comme TD)</Typography>
        <Typography>Formulaire de contact pour en savoir plus</Typography>
        <Typography>F.A.Q</Typography>

        <FAQ productKey={'trotty'} color='green' />
      </main>
      <Footer />
    </div>
  );
}
