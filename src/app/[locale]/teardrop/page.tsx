import Header from '@/components/navigation/header';
import Footer from '@/components/navigation/footer';
import Story from './components/story';
import Video from '@/components/sections/video';
import Hero from './components/hero';
import Specification from './components/specification';

export default function Teardrop() {
  return (
    <div className='bg-bg-2'>
      <Header />
      <main className='flex w-full flex-col items-center'>
        <Hero />
        <Story />
        <Video
          source='/teardrop/video.mp4'
          thumbnail='/bento-2.jpeg'
          title='La Teardrop en action !'
          descriptionLeft='La Teardrop'
          descriptionRight='En action!'
          showSocials
        />
        <Specification
          section='Cuisine'
          title='Designée pour partir plusieurs jours en toute autonomie'
          description='Nombre de places: 2+1 (enfant de 0 à 5 ans)
Dimensions extérieures: 3,85 m x 1,92 m
Dimensions intérieures: 2,45 m x 1,45 m
Hauteur (hors tout): 1,76 m
Hauteur intérieure: 1,16 m
Dimensions intérieures: 2,45 m x 1,45 m
Hauteur (hors tout): 1,76 m
Hauteur intérieure: 1,16 m
Dimensions intérieures: 2,45 m x 1,45 m
Hauteur (hors tout): 1,76 m
Hauteur intérieure: 1,16 m'
        />
        <Specification
          topoBackground={false}
          imageRight
          background='bg-orange/10'
          section='Extérieur'
          title='Designée pour partir plusieurs jours en toute autonomie'
          description='Nombre de places: 2+1 (enfant de 0 à 5 ans)
Dimensions extérieures: 3,85 m x 1,92 m
Dimensions intérieures: 2,45 m x 1,45 m
Hauteur (hors tout): 1,76 m
Hauteur intérieure: 1,16 m
Dimensions intérieures: 2,45 m x 1,45 m
Hauteur (hors tout): 1,76 m
Hauteur intéri
Dimensions intérieures: 2,45 m x 1,45 m
Dimensions extérieures: 3,85 m x 1,92 m
Dimensions intérieures: 2,45 m x 1,45 m
Hauteur (hors tout): 1,76 m
Hauteur intérieure: 1,16 m
Dimensions intérieures: 2,45 m x 1,45 m
Hauteur (hors tout): 1,76 m
Hauteur intéri
Dimensions intérieures: 2,45 m x 1,45 m
Dimensions extérieures: 3,85 m x 1,92 m
Dimensions intérieures: 2,45 m x 1,45 m
Hauteur (hors tout): 1,76 m
Hauteur intérieure: 1,16 m
Dimensions intérieures: 2,45 m x 1,45 m
Hauteur (hors tout): 1,76 m
Hauteur intéri
Dimensions intérieures: 2,45 m x 1,45 m
Hauteur (hors tout): 1,76 m
Hauteur intérieure: 1,16 m'
        />
        <Specification
          section='Intérieur'
          title='Designée pour partir plusieurs jours en toute autonomie'
          description='Nombre de places: 2+1 (enfant de 0 à 5 ans)
Dimensions extérieures: 3,85 m x 1,92 m
Dimensions intérieures: 2,45 m x 1,45 m
Hauteur (hors tout): 1,76 m
Hauteur intérieure: 1,16 m
Dimensions intérieures: 2,45 m x 1,45 m
Hauteur (hors tout): 1,76 m
Hauteur intérieure: 1,16 m
Dimensions intérieures: 2,45 m x 1,45 m
Hauteur (hors tout): 1,76 m
Hauteur intérieure: 1,16 m'
        />
      </main>
      <Footer />
    </div>
  );
}
