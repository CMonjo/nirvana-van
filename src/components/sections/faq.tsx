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
import { ProductType } from '@/constants/products';

const teardropFAQ = [
  {
    question: 'whatIsTeardrop',
    answer: 'whatIsTeardropAnswer',
  },
  {
    question: 'whatIsTeardrop2',
    answer: 'whatIsTeardropAnswer2',
  },
  {
    question: 'whatIsTeardrop3',
    answer: 'whatIsTeardropAnswer3',
  },
];

const trottyFAQ = [
  {
    question: 'whatIsTrotty',
    answer: 'whatIsTrottyAnswer',
  },
  {
    question: 'whatIsTrotty2',
    answer: 'whatIsTrottyAnswer2',
  },
  {
    question: 'whatIsTrotty3',
    answer: 'whatIsTrottyAnswer3',
  },
];

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
        <Typography variant='h3'>{question}</Typography>
        <span className='h-1 flex-1 bg-black' />
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

const FAQ = ({
  productKey,
  color,
}: {
  productKey: ProductType;
  color: 'green' | 'orange';
}) => {
  const t = useTranslations(`faq.${productKey}`);
  const list = productKey === 'teardrop' ? teardropFAQ : trottyFAQ;

  return (
    <Section className='bg-white'>
      <Container className='flex-col'>
        <SectionTitle title={`F.A.Q`} />
        <div className='flex w-full flex-col gap-4'>
          {list?.map((item: any, index: number) => (
            <div className='mb-2' key={index}>
              <FAQItem
                color={color}
                question={t(item.question)}
                answer={t(item.answer)}
              />
            </div>
          ))}
        </div>
        <Link href='/contact'>
          <Button color={color}>Nous contacter</Button>
        </Link>
      </Container>
    </Section>
  );
};

export default FAQ;
