export interface ProductImage {
  id: number;
  url: string;
  alt: string;
}

export interface ProductFeature {
  icon: string;
  title: string;
  description: string;
}

export interface TechnicalSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  shortDescription: string;
  images: ProductImage[];
  features: ProductFeature[];
  technicalSpecs: TechnicalSpec[];
  stockStatus: {
    inStock: boolean;
    quantity: number;
  };
}