'use client';
import React from 'react';
import SectionTitle from '../../../../components/sections/title';
import Section from '../../../../components/atoms/section';
import Image from 'next/image';
import Container from '../../../../components/atoms/container';
import Typography from '../../../../components/atoms/typography';
import Button from '@/components/atoms/button';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import CardList from '@/components/utils/CardList';
import { motion } from 'framer-motion';
import { BentoItem, BentoImage } from '@/components/utils/bento';

// export default function Story() {
//   const tPage = useTranslations('pages.bike-camper.story');
//   const tConfigurator = useTranslations('pages.configurator');

//   return (
//     <Section className='bg-white' topoBackground>
//       <Container className='flex flex-col items-center gap-4'>
//         <SectionTitle title={tPage('title')} />
//         <Typography className='text-center'>{tPage('description')}</Typography>

//         {/* Desktop */}
//         <motion.div
//           initial='initial'
//           animate='animate'
//           transition={{ staggerChildren: 0.05 }}
//           className='hidden h-[400px] w-full grid-cols-6 grid-rows-2 gap-2 lg:grid'
//         >
//           <BentoItem className='col-span-2 row-span-2'>
//             <BentoImage url='/bento-1.jpeg' />
//           </BentoItem>

//           <BentoItem className='col-span-2 col-start-3 row-span-2 row-start-1'>
//             <BentoImage url='/bento-1.jpeg' />
//           </BentoItem>
//           <BentoItem className='col-span-2 col-start-5 row-span-2'>
//             <BentoImage url='/bento-1.jpeg' />
//           </BentoItem>
//         </motion.div>

//         <Link
//           className='mb-2'
//           href={{
//             pathname: '/configurator',
//             query: { product: 'bike-camper' },
//           }}
//         >
//           <Button color='green' size='large'>
//             {tConfigurator('title')}
//           </Button>
//         </Link>

//         {/* Mobile */}
//         {/* <motion.div
//           initial='initial'
//           animate='animate'
//           transition={{ staggerChildren: 0.05 }}
//           className='grid w-full auto-rows-[250px] grid-cols-2 gap-4'
//         >
//           <BentoItem className=''>
//             <BentoImage url='/bento-1.jpeg' />
//           </BentoItem>
//           <BentoItem className=''>
//             <BentoImage url='/bento-1.jpeg' />
//           </BentoItem>
//           <BentoItem className='col-span-2'>
//             <BentoImage url='/bento-1.jpeg' />
//           </BentoItem>
//         </motion.div> */}
//       </Container>
//     </Section>
//   );
// }

export default function Story() {
  const tPage = useTranslations('pages.bike-camper.story');
  const tConfigurator = useTranslations('pages.configurator');

  return (
    <Section className='bg-white' topoBackground>
      <Container>
        <div className='flex flex-col items-center gap-8 md:flex-row'>
          <div className='flex w-full flex-col items-center md:w-3/5 md:items-start'>
            <SectionTitle
              title={tPage('title')}
              className='mb-4 md:text-left'
            />
            <Typography className='text-center md:mb-8 md:text-left'>
              {tPage('description')}
            </Typography>
            {/* Desktop buttons */}
            <div className='hidden flex-col items-center gap-4 md:flex md:flex-row md:items-start'>
              <Link
                className='mb-2'
                href={{
                  pathname: '/configurator',
                  query: { product: 'bike-camper' },
                }}
              >
                <Button color='green' size='large'>
                  {tConfigurator('title')}
                </Button>
              </Link>
            </div>
          </div>

          <div className='flex w-full justify-center md:w-2/5 md:justify-end'>
            <Image
              src='/bike-camper/story.png'
              alt='story'
              width={1155}
              height={600}
              className='w-full'
            />
          </div>
          {/* Mobile buttons */}
          <div className='flex flex-col items-center gap-4 md:hidden'>
            <Link
              className='mb-2'
              href={{
                pathname: '/configurator',
                query: { product: 'bike-camper' },
              }}
            >
              <Button color='green' size='large'>
                {tConfigurator('title')}
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
