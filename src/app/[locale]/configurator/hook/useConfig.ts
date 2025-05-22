'use client';

import {
  IBasketConfig,
  IModel,
  IProduct,
  IProductConfig,
} from '@/products/types';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { getPrice } from '@/utils/price';

export default function useConfig(
  productConfiguration: IProductConfig | null,
  product: IProduct | null,
  model: IModel | null
): IBasketConfig[] | null {
  //State
  const [config, setConfig] = useState<IBasketConfig[] | null>(null);

  //Translations
  const tProduct = useTranslations(product ? `products.${product?.key}` : '');
  const tOptions = useTranslations('pages.configurator.options');
  const tModel = useTranslations(
    `products.${product?.key}.models.${model?.key}`
  );
  const tPage = useTranslations('pages.configurator');
  const tColors = useTranslations('ralColors');

  const generateConfig = () => {
    if (!productConfiguration || !product || !model) return;
    const data: IBasketConfig[] = [
      {
        name: null,
        options: [
          {
            key:
              product?.key !== model?.key
                ? `${tProduct('name')} (${tModel('name')})`
                : tProduct('name'),
            price: getPrice(model.basePrice),
          },
        ],
      },
    ];
    const selectedOpts = productConfiguration.selectedOptions;
    for (const cat of model.configurator || []) {
      const isCategorySelected = selectedOpts.some(
        (o) => o.category === cat.name
      );
      const options = cat.options?.filter((option) =>
        selectedOpts.find(
          (o) => o.category === cat.name && o.key === option.key
        )
      );
      if (!isCategorySelected || cat.name === 'shade_color') continue;
      if (cat.name === 'main_color') {
        const selectedOption = selectedOpts.find(
          (o) => o.category === cat.name
        );
        const shadeColor = selectedOpts.find(
          (o) => o.category === 'shade_color'
        );
        if (!selectedOption) continue;
        data[0].options.push({
          key: `${tColors(selectedOption.key)} ${shadeColor ? ` - ${shadeColor.key}` : ''}`,
          price: tPage('include'),
        });
      } else {
        const newCat = {
          name: tOptions(`${cat.name}`),
          options: options?.length
            ? options.map((option) => ({
                key: tOptions(`${option.key}`),
                price: option.included
                  ? tPage('include')
                  : getPrice(option.price || 0),
              }))
            : [],
        };
        data.push(newCat);
      }
    }
    setConfig(data);
  };

  useEffect(() => {
    generateConfig();
  }, [productConfiguration, product, model]);

  return config;
}
