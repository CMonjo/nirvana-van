'use client';
import React from 'react';
import Transition from '../atoms/transition';

export default function SectionTitle({
  title,
  className = '',
}: {
  title: string;
  className?: string;
}) {
  return (
    <Transition>
      <h1
        className={`mb-4 text-center font-kobe11 text-4xl font-medium ${className}`}
      >
        {title}
      </h1>
    </Transition>
  );
}
