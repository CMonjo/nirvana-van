export type ProductType = 'teardrop' | 'trotty';

export interface OptionCategory {
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
  name: string;
  image: string;
  color: 'orange' | 'green';
  basePrice: number;
  categories?: OptionCategory[];
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
