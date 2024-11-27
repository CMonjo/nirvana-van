import { ralColors } from './ralColors';
import { IProduct, IProductConfig, Option, SelectedOption } from './types';

export const products: IProduct[] = [
  {
    key: 'teardrop',
    name: 'Teardrop',
    image: '/model_td.png',
    color: 'orange',
    basePrice: 11000,
    categories: [
      {
        name: 'main_color',
        type: 'radio',
        required: true,
      },
      {
        name: 'shade_color',
        type: 'radio',
        required: true,
      },
      {
        name: 'axle',
        type: 'radio',
        options: [
          {
            key: 'classic_axle_500kg',
            included: true,
            price: 0,
          },
          {
            key: 'classic_axle_600_750kg',
            price: 180,
          },
          {
            key: 'braked_axle_750kg',
            price: 980,
          },
        ],
      },
      {
        name: 'chassis',
        type: 'checkbox',
        options: [
          {
            key: 'stabilizer_legs',
            price: 0,
            included: true,
            disabled: true,
          },
          { key: 'rounded_fenders', price: 140 },
          { key: 'spare_wheel', price: 190 },
        ],
      },
      {
        name: 'electricity',
        type: 'checkbox',
        options: [
          {
            key: 'electric_installation',
            price: 1500,
          },
          { key: 'solar_panel', price: 270, soldOut: true },
          { key: 'big_battery', price: 200 },
        ],
      },
      {
        name: 'kitchen',
        type: 'checkbox',
        options: [
          { key: 'water_point', price: 350 },
          { key: 'electric_cooler', price: 400 },
          { key: 'stove', price: 50 },
        ],
      },
      {
        name: 'exterior',
        type: 'checkbox',
        options: [
          { key: 'rear_awning', price: 1000 },
          { key: 'side_awning', price: 600 },
          { key: 'cover', price: 390 },
        ],
      },
      {
        name: 'equipments',
        type: 'checkbox',
        options: [
          { key: 'roof_bars', price: 490 },
          { key: 'arrow_chest', price: 100 },
          { key: 'bike_rack', price: 220 },
          { key: 'roof_tent', price: 2000, comingSoon: true },
        ],
      },
      {
        name: 'built-in',
        type: 'radio',
        options: [
          {
            key: 'front_and_rear_closets',
            price: 0,
            included: true,
          },
          { key: 'no_closets', price: -900 },
        ],
      },
      {
        name: 'opening',
        type: 'checkbox',
        options: [
          {
            key: 'two_side_doors',
            price: 0,
            included: true,
            disabled: true,
          },
          {
            key: 'one_side_door',
            price: -300,
          },
          { key: 'no_rear_door', price: -700 },
          { key: 'test', price: 0 },
        ],
      },
    ],
  },
  {
    key: 'trotty',
    name: 'Trotty',
    image: '/model_kv.png',
    color: 'green',
    basePrice: 5000,
  },
];

export function getProductConfiguration(product: IProduct): IProductConfig {
  let selectedOptions: SelectedOption[] = [];
  if (product.categories) {
    selectedOptions = product.categories
      .filter((category) => category.options)
      .flatMap((category) => {
        const option = category.options?.find((opt) => opt.included);
        return option ? { category: category.name, key: option.key } : [];
      });
  }

  return {
    productKey: product.key,
    selectedOptions: selectedOptions,
    totalPrice: product.basePrice,
  };
}

const getConfigurationPrice = (
  selectedOptions: SelectedOption[],
  product: IProduct
): number => {
  let price = product.basePrice;
  selectedOptions.forEach((selected) => {
    const category = product.categories?.find(
      (cat) => cat.name === selected.category
    );
    if (category) {
      const option = category.options?.find((opt) => opt.key === selected.key);
      if (option) {
        price += option?.price || 0;
      }
    }
  });

  return price;
};

export function updateProductConfiguration(
  config: IProductConfig,
  product: IProduct,
  optionCategory: string,
  optionValue: string
): IProductConfig {
  const selectedOptions = [...config.selectedOptions];

  if (!product.categories)
    throw new Error(`Product "${product.key}" has no categories.`);

  const category = product.categories.find(
    (cat) => cat.name === optionCategory
  );

  if (category) {
    if (category.type === 'radio') {
      const index = selectedOptions.findIndex(
        (opt) => opt.category === optionCategory
      );
      if (index !== -1) {
        selectedOptions.splice(index, 1);
      }
      selectedOptions.push({ category: optionCategory, key: optionValue });
    } else if (category.type === 'checkbox') {
      const index = selectedOptions.findIndex(
        (opt) => opt.category === optionCategory && opt.key === optionValue
      );
      if (index !== -1) {
        selectedOptions.splice(index, 1);
      } else {
        selectedOptions.push({ category: optionCategory, key: optionValue });
      }
    }
  }

  return {
    ...config,
    selectedOptions,
    totalPrice: getConfigurationPrice(selectedOptions, product),
  };
}
