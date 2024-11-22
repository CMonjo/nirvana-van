// Couleurs
// Main
// Déclinaisons

// Packs
// Électricité      // Installation elec, batterie, ampoule           +1500€
// Cuisine                + 750€
// Convertible                 + 230€

// Chassis
// Béquilles stabilisatrices            +0€
// Essieu classique 500 kg                +0€
// Essieu classique 600/750 kg         +180€
// Essieu freiné 750 kg                           +980€
// Gardes boue arrondis            +140€
// Roue de secours                +190€

// Équipements
// Panneau solaire            +270€
// Auvent arrière                +xxx€
// Auvent latéral                +xxx€
// Barres de toit                +490€
// Coffre de flèche            +xxx€
// Porte vélo                +220€
// Couverture                +390€

export type ProductType = 'teardrop' | 'trotty';
export interface IProduct {
  key: ProductType;
  name: string;
  image: string;
  packs?: Pack[];
  colors?: Color[];
  options?: Option[];
}

export interface Pack {
  name: string;
  price: number;
  options: Option[];
}

export interface Color {
  name: string;
  hex: string;
}

export interface Option {
  category: string;
  key: string;
  price: number | null;
}

export const products: IProduct[] = [
  {
    key: 'trotty',
    name: 'Trotty',
    image: '/model_kv.png',
  },
  {
    key: 'teardrop',
    image: '/model_td.png',
    name: 'Teardrop',
    packs: [
      {
        name: 'electricity',
        price: 1500,
        options: [],
      },
      {
        name: 'kitchen',
        price: 750,
        options: [],
      },
      {
        name: 'convertible',
        price: 230,
        options: [],
      },
    ],
    colors: [],
    options: [
      {
        category: 'chassis',
        key: 'stabilizer_legs',
        price: null,
      },
      {
        category: 'chassis',
        key: 'classic_axle_500kg',
        price: null,
      },
      {
        category: 'chassis',
        key: 'classic_axle_600_750kg',
        price: 180,
      },
      {
        category: 'chassis',
        key: 'braked_axle_750kg',
        price: 980,
      },
      {
        category: 'chassis',
        key: 'rounded_fenders',
        price: 140,
      },
      {
        category: 'chassis',
        key: 'spare_wheel',
        price: 190,
      },
      {
        category: 'equipment',
        key: 'solar_panel',
        price: 270,
      },
      {
        category: 'equipment',
        key: 'rear_awning',
        price: null,
      },
      {
        category: 'equipment',
        key: 'side_awning',
        price: null,
      },
      {
        category: 'equipment',
        key: 'roof_bars',
        price: 490,
      },
      {
        category: 'equipment',
        key: 'tongue_box',
        price: null,
      },
      {
        category: 'equipment',
        key: 'bike_rack',
        price: 220,
      },
      {
        category: 'equipment',
        key: 'cover',
        price: 390,
      },
    ],
  },
];
