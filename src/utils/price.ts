export const getPrice = (price: number) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: price % 1 !== 0 ? 2 : 0,
    maximumFractionDigits: price % 1 !== 0 ? 2 : 0,
  }).format(price);
};
