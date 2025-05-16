export type ProductType = 'teardrop' | 'bike-camper';

export interface ConfiguratorCategory {
  name: string;
  type: 'radio' | 'checkbox';
  options?: Option[];
  required?: boolean;
}

export interface Option {
  key: string;
  price: number | null;
  picture?: string;
  description?: string;
  comingSoon?: boolean;
  soldOut?: boolean;
  included?: boolean;
  disabled?: boolean;
}

export interface IProduct {
  key: ProductType;
  image: string;
  color: 'orange' | 'green';
  basePrice: number;
  configurator?: ConfiguratorCategory[];
  faqLength?: number;
  models?: IModel[];
}

export interface IModel {
  key: string;
  image: string;
  basePrice: number;
  specifications?: string[];
}

export interface SelectedOption {
  category: string;
  key: string;
}

export interface IProductConfig {
  productKey: ProductType;
  selectedOptions: SelectedOption[];
  totalPrice: number;
}

export interface IBasketConfig {
  name: string | null;
  options: { key: string; price: number | string }[];
}
