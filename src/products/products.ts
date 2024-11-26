import { ralColors } from './ralColors';
import { IProduct, IProductConfig, Option } from './types';

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
      },
      {
        name: 'shade_color',
        type: 'radio',
      },
      {
        name: 'axle',
        type: 'radio',
        options: [
          {
            key: 'classic_axle_500kg',
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
        name: 'storage',
        type: 'radio',
        options: [
          {
            key: 'front_and_rear_closets',
            price: 0,
          },
          { key: 'vtfe', price: 69 },
          { key: 'no_closets', price: -900 },
        ],
      },
      {
        name: 'doors',
        type: 'radio',
        options: [
          {
            key: 'two_side_doors',
            price: 0,
          },
          {
            key: 'one_side_door',
            price: -300,
          },
          { key: 'no_rear_door', price: -700 },
        ],
      },
      {
        name: 'awnings',
        type: 'checkbox',
        options: [
          { key: 'rear_awning', price: null },
          { key: 'side_awning', price: null },
          { key: 'cover', price: 390 },
        ],
      },
      {
        name: 'accessories',
        type: 'checkbox',
        options: [
          { key: 'roof_bars', price: 490 },
          { key: 'tongue_box', price: null },
          { key: 'bike_rack', price: 220 },
          { key: 'roof_tent', price: 2000, comingSoon: true },
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
  return {
    productKey: product.key,
    selectedOptions: [],
    totalPrice: product.basePrice,
  };
}

export function updateProductConfiguration(
  config: IProductConfig,
  product: IProduct,
  optionCategory: string,
  optionValue: string
): IProductConfig {
  const selectedOptions = [...config.selectedOptions];
  let updatedPrice = product.basePrice;

  if (!product.categories)
    throw new Error(`Product "${product.key}" has no categories.`);

  const category = product.categories.find(
    (cat) => cat.name === optionCategory
  );
  const dynamicOptions = category?.options || getDynamicOptions(optionCategory);

  if (!category) {
    throw new Error(
      `Category "${optionCategory}" not found in product "${product.key}".`
    );
  }

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

  selectedOptions.forEach((selected) => {
    const option = dynamicOptions.find((opt) => opt.key === selected.key);
    if (option && option.price !== null) {
      updatedPrice += option.price;
    }
  });

  return {
    ...config,
    selectedOptions,
    totalPrice: updatedPrice,
  };
}

export function getDynamicOptions(category: string): Option[] {
  if (category === 'main_color') {
    return ralColors.map((color) => ({
      key: color.color,
      name: color.color,
      price: 0,
    }));
  }

  if (category === 'shade_color') {
    return ralColors.flatMap((color) =>
      color.shades.map((shade) => ({
        key: shade.code,
        name: shade.code,
        price: 0,
      }))
    );
  }

  return [];
}
