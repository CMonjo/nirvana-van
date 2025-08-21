import Container from '@/components/atoms/container';
import Image from 'next/image';
import Section from '@/components/atoms/section';
import LinkWrapper from '@/components/utils/LinkWrapper';
import Typography from '@/components/atoms/typography';
import { useTranslations } from 'next-intl';
import Tooltip from '@/components/atoms/tooltip';

const partners = [
  {
    name: 'M6',
    logo: '/partners/m6.png',
    link: 'https://www.m6.fr/',
    width: 74,
    height: 74,
  },
  {
    name: 'VanLife Magazine',
    logo: '/partners/vanlife_magazine.jpg',
    link: 'https://www.vanlifemag.fr/presentationessais/nirvana-van-la-teardrop-et-la-caravane-velo-dun-jeune-artisan-de-montpellier/75421',
    width: 120,
  },
  {
    name: 'France Bleu Hérault',
    logo: '/partners/france_bleu.png',
    link: 'https://www.francebleu.fr/emissions/l-eco-d-ici/video-deux-montpellierains-reinventent-le-cyclotourisme-avec-une-mini-caravane-pour-velo-6509141',
    width: 160,
  },
  {
    name: 'NeoZone',
    logo: '/partners/neozone_wide.jpg',
    link: 'https://www.neozone.org/lifestyle/nirvana-van-devoile-une-mini-caravane-teardrop-de-seulement-67-kg-tractable-a-velo/',
    width: 120,
    height: 50,
  },
  {
    name: 'VanLife Expo',
    logo: '/partners/vanlife_expo.png',
    link: 'https://vanlife-expo.com/',
    width: 120,
  },
  {
    name: 'Hinterher',
    logo: '/partners/hinterher.png',
    link: 'https://www.hinterher.com/kundengalerie/fahrradwohnwagen',
    width: 100,
  },
  {
    name: 'Camper Van Week End',
    logo: '/partners/camper_van_weekend.png',
    link: 'https://www.camper-van-week-end.fr/',
    width: 120,
  },
];

function Partners() {
  const tPage = useTranslations('pages.home.partners');

  return (
    <Section className='bg-white'>
      <Container className='flex flex-col items-center justify-center py-6 xl:py-6'>
        <Typography className='text-center text-dark-lighter' variant='caption'>
          {tPage('title')}
        </Typography>
        <div className='flex flex-wrap items-center justify-center gap-4 md:gap-8'>
          {partners.map((partner) => (
            <LinkWrapper key={partner.name} href={partner.link} target='_blank'>
              <Tooltip content={partner.name} position='top'>
                <div className='relative transition-all duration-300 hover:opacity-100'>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={partner.width}
                    height={partner.height || 60}
                    className='h-10 w-auto object-contain'
                  />
                </div>
              </Tooltip>
            </LinkWrapper>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Partners;
