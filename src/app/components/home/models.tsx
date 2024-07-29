'use client';
import React from 'react';
import Container from '../atoms/container';
import Image from 'next/image';
import Button from '../atoms/button';
import Link from 'next/link';
import Transition from '../atoms/transition';
import { motion } from 'framer-motion';
import Section from '../atoms/section';
import SectionTitle from '../sections/sectionTitle';
// import { motion } from 'framer-motion';

const Model = ({
  title,
  description,
  image,
  color,
  url,
}: {
  title: string;
  description: string;
  image: string;
  color: 'orange' | 'green';
  url: string;
}) => {
  return (
    <Link
      href={url}
      className='flex h-96 w-full flex-col items-center rounded-3xl bg-slate-200 px-4 py-8 text-center'
    >
      <Transition>
        <h2 className='font-acorn font-semibold'>{title}</h2>
      </Transition>
      <p className='font-lg my-3 mt-2 font-kobe11 text-2xl'>{description}</p>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className='relative h-full w-full overflow-hidden'
      >
        <Image src={image} alt={title} layout='fill' objectFit='contain' />
      </motion.div>
      <Button color={color} size='small'>
        En savoir plus
      </Button>
    </Link>
  );
};

export default function Models() {
  return (
    <Section className='bg-white'>
      <Container className='flex-col'>
        <SectionTitle title='Découvrez nos modèles' className='mb-8' />
        <div className='flex w-full flex-col gap-4 lg:flex-row'>
          <Model
            title='Teardrop'
            description="Pour les voyageurs qui aiment l'aventure"
            image='/model.png'
            color='orange'
            url='/teardrop'
          />
          <Model
            title='Trotty'
            description='Pour les fans de vélo'
            image='/model.png'
            color='green'
            url='/trotty'
          />
        </div>
      </Container>
    </Section>
  );
}
