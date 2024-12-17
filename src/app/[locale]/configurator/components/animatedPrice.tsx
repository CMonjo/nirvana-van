import React from 'react';
import { motion } from 'framer-motion';

export default function IncrementalPrice({ price }: { price: number }) {
  const formattedPrice = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: price % 1 !== 0 ? 2 : 0,
    maximumFractionDigits: price % 1 !== 0 ? 2 : 0,
  }).format(price);

  return (
    <motion.span
      key={price}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      }}
      style={{ display: 'inline-block' }}
    >
      {formattedPrice}
    </motion.span>
  );
}
