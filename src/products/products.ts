import { IModel, IProduct, IProductConfig, SelectedOption } from './types';

export const products: IProduct[] = [
  {
    key: 'teardrop',
    image: '/models/teardrop.png',
    color: 'orange',
    basePrice: 10900,
    faqLength: 6,
    models: [
      {
        key: 'teardrop',
        image: '/models/teardrop.png',
        basePrice: 10900,
        configurator: [
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
                picture: 'stabilizer_legs.JPG',
              },
              { key: 'rounded_fenders', price: 140 },
              { key: 'spare_wheel', price: 190, picture: 'spare_wheel.JPG' },
            ],
          },
          {
            name: 'electricity',
            type: 'checkbox',
            options: [
              {
                key: 'electric_installation',
                price: 1500,
                picture: 'electric_installation.JPG',
              },
              {
                key: 'solar_panel',
                price: 270,
                soldOut: false,
                picture: 'solar_panel.JPG',
              },
              { key: 'big_battery', price: 200, picture: 'big_battery.JPG' },
            ],
          },
          {
            name: 'kitchen',
            type: 'checkbox',
            options: [
              { key: 'water_point', price: 350, picture: 'water_point.JPG' },
              {
                key: 'electric_cooler',
                price: 400,
                picture: 'electric_cooler.JPG',
              },
              { key: 'stove', price: 50, picture: 'stove.JPG' },
              { key: 'shower', price: 200, picture: 'shower.JPG' },
            ],
          },
          //   {
          //     name: 'exterior',
          //     type: 'checkbox',
          //     options: [
          //       { key: 'rear_awning', price: 1000 },
          //       { key: 'side_awning', price: 600 },
          //       { key: 'cover', price: 390 },
          //     ],
          //   },
          {
            name: 'equipments',
            type: 'checkbox',
            options: [
              { key: 'roof_bars', price: 490, picture: 'roof_bars.JPG' },
              { key: 'arrow_chest', price: 100, picture: 'arrow_chest.jpeg' }, //TODO Sur demande
              { key: 'bike_rack', price: 220, picture: 'bike_rack.JPG' },
              { key: 'roof_tent', price: 2000, comingSoon: true }, //TODO Sur demande
            ],
          },
          //   {
          //     name: 'built-in',
          //     type: 'radio',
          //     options: [
          //       {
          //         key: 'front_and_rear_closets',
          //         price: 0,
          //         included: true,
          //         picture: 'front_and_rear_closets.JPG',
          //       },
          //       { key: 'no_closets', price: -900 },
          //     ],
          //   },
          //   {
          //     name: 'opening',
          //     type: 'checkbox',
          //     options: [
          //       {
          //         key: 'two_side_doors',
          //         price: 0,
          //         included: true,
          //         disabled: true,
          //       },
          //       {
          //         key: 'one_side_door',
          //         price: -300,
          //       },
          //       { key: 'no_rear_door', price: -700 },
          //     ],
          //   },
        ],
      },
    ],
  },
  {
    key: 'bike-camper',
    image: '/models/bike-camper2.png',
    color: 'green',
    basePrice: 3300,
    faqLength: 7,
    models: [
      {
        key: 'light',
        image: '/bike-camper/light.jpeg',
        basePrice: 3200,
        specifications: [
          'shellMaterials',
          'chassisMaterials',
          'insulation',
          'externalDimensions',
          'mattress',
          'unladenWeight',
        ],
        configurator: [
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
        ],
      },
      {
        key: 'premium',
        image: '/bike-camper/premium.JPG',
        basePrice: 3900,
        specifications: [
          'shellMaterials',
          'chassisMaterials',
          'insulation',
          'externalDimensions',
          'mattress',
          'unladenWeight',
        ],
        configurator: [
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
        ],
      },
    ],
  },
];

export function getModelConfiguration(model: IModel): IProductConfig {
  let selectedOptions: SelectedOption[] = [];
  if (model.configurator) {
    selectedOptions = model.configurator
      .filter((category) => category.options)
      .flatMap((category) => {
        const option = category.options?.find((opt) => opt.included);
        return option ? { category: category.name, key: option.key } : [];
      });
  }

  return {
    productKey: model.key,
    selectedOptions: selectedOptions,
    totalPrice: model.basePrice,
  };
}

const getConfigurationPrice = (
  selectedOptions: SelectedOption[],
  model: IModel
): number => {
  let price = model.basePrice;
  selectedOptions.forEach((selected) => {
    const category = model.configurator?.find(
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

export function updateModelConfiguration(
  config: IProductConfig,
  model: IModel,
  configuratorCategory: string,
  optionValue: string
): IProductConfig {
  let selectedOptions = [...config.selectedOptions];

  if (!model.configurator)
    throw new Error(`Model "${model.key}" has no configurator.`);

  const category = model.configurator.find(
    (cat) => cat.name === configuratorCategory
  );

  if (category) {
    if (category.type === 'radio') {
      const index = selectedOptions.findIndex(
        (opt) => opt.category === configuratorCategory
      );
      if (index !== -1) {
        selectedOptions.splice(index, 1);
      }
      selectedOptions.push({
        category: configuratorCategory,
        key: optionValue,
      });
    } else if (category.type === 'checkbox') {
      const index = selectedOptions.findIndex(
        (opt) =>
          opt.category === configuratorCategory && opt.key === optionValue
      );
      if (index !== -1) {
        selectedOptions.splice(index, 1);
      } else {
        selectedOptions.push({
          category: configuratorCategory,
          key: optionValue,
        });
      }
    }
  }

  if (configuratorCategory === 'main_color') {
    selectedOptions = selectedOptions.filter(
      (opt) => opt.category !== 'shade_color'
    );
  }

  return {
    ...config,
    selectedOptions,
    totalPrice: getConfigurationPrice(selectedOptions, model),
  };
}
