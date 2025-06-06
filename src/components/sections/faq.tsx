'use client';
import React, { useState } from 'react';
import Typography from '../atoms/typography';
import Section from '../atoms/section';
import Container from '../atoms/container';
import SectionTitle from './title';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Button from '../atoms/button';
import { Link } from '@/i18n/routing';
import { ProductType } from '@/products/types';
import { products } from '@/products/products';

const FAQItem = ({
  question,
  answer,
  color,
}: {
  question: string;
  answer: string;
  color: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className='flex w-full cursor-pointer items-center gap-4'
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <motion.div
            className={`flex items-center justify-center rounded-3xl bg-${color} h-8 w-8`}
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <RemoveIcon sx={{ color: '#FFF' }} />
            ) : (
              <AddIcon sx={{ color: '#FFF' }} />
            )}
          </motion.div>
        </div>
        <Typography variant='h3'>{question}</Typography>
        <span className='hidden h-1 flex-1 bg-black md:flex' />
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className='overflow-hidden'
        >
          <Typography variant='body1' className='my-4'>
            {answer}
          </Typography>
        </motion.div>
      )}
    </>
  );
};

const FAQ = ({ productKey }: { productKey: ProductType }) => {
  const tProduct = useTranslations(`faq`);
  const tActions = useTranslations(`actions`);

  const product = products.find((product) => product.key === productKey);

  if (!product) {
    return null;
  }

  return (
    <Section className='bg-white'>
      <Container className='flex-col'>
        <SectionTitle title={`F.A.Q`} />
        <div className='flex w-full flex-col gap-4'>
          {Array.from(
            { length: product?.faqLength ?? 0 },
            (_, index) => index
          ).map((index: number) => (
            <div className='mb-2' key={index}>
              <FAQItem
                color={product.color}
                question={tProduct(`${productKey}.question${index + 1}`)}
                answer={tProduct(`${productKey}.answer${index + 1}`)}
              />
            </div>
          ))}
        </div>
        <Typography className='mt-2'>{tProduct('otherQuestions')}</Typography>
        <Link href='/contact'>
          <Button color={product.color}>{tActions('contactUs')}</Button>
        </Link>
      </Container>
    </Section>
  );
};

export default FAQ;
