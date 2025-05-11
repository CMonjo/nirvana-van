'use client';
import React from 'react';
import SectionTitle from './title';
import Section from '../atoms/section';
import Container from '../atoms/container';
import Typography from '../atoms/typography';

interface Advantage {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface AdvantagesProps {
  title: string;
  advantages: Advantage[];
  color?: string;
}

export default function Advantages({
  title,
  advantages,
  color = 'orange',
}: AdvantagesProps) {
  return (
    <Section className='bg-white'>
      <Container className='flex flex-col items-center'>
        <SectionTitle title={title} />
        <div
          className={`
          grid gap-6
          ${advantages.length === 4 ? 'md:grid-cols-4' : ''}
          ${advantages.length === 3 ? 'md:grid-cols-3' : ''}
          ${advantages.length === 5 ? 'md:grid-cols-3' : ''}
          grid-cols-1 sm:grid-cols-2
        `}
        >
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`
                flex flex-col items-center gap-2 rounded-xl bg-gray-50 p-6 text-center
                ${advantages.length === 5 && index > 2 ? 'md:col-span-1 md:translate-x-1/2' : ''}
              `}
            >
              <div className={`text-3xl text-${color}`}>{advantage.icon}</div>
              <Typography variant='h3' className='font-semibold'>
                {advantage.title}
              </Typography>
              <Typography variant='body2' className='text-gray-600'>
                {advantage.description}
              </Typography>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
