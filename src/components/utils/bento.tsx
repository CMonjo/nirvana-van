'use client';
import React from 'react';
import Image from 'next/image';
import { motion, MotionProps } from 'framer-motion';
import Typography from '../atoms/typography';

type BentoItemProps = React.HTMLAttributes<HTMLDivElement> & {
  className: string;
} & MotionProps;

const BentoItem = ({ className, ...rest }: BentoItemProps) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      whileHover={{
        rotate: '0.5deg',
      }}
      transition={{
        type: 'spring',
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={`rounded-lg ${className}`}
      {...rest}
    />
  );
};

const BentoImage = ({ url, text }: { url: string; text?: string }) => {
  return (
    <div className='relative h-full w-full items-center justify-center rounded-3xl '>
      {text ? (
        <div className='absolute inset-0 z-20 flex items-end p-6 text-white'>
          <Typography variant='h2-acorn'>{text}</Typography>
        </div>
      ) : null}
      <Image fill src={url} alt={url} className='rounded-lg object-cover' />
    </div>
  );
};

const BentoText = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <div className='relative h-full w-full rounded-3xl p-6 text-white'>
      <Typography variant='h2-acorn'>{title}</Typography>
      {description ? (
        <Typography variant='body2'>{description}</Typography>
      ) : null}
    </div>
  );
};

export { BentoItem, BentoImage, BentoText };
