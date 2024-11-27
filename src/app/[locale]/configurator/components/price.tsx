import React from 'react';

export default function Price({ price }: { price: number }) {
  const formattedPrice = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: price % 1 !== 0 ? 2 : 0,
    maximumFractionDigits: price % 1 !== 0 ? 2 : 0,
  }).format(price);

  return <>{formattedPrice}</>;
}
