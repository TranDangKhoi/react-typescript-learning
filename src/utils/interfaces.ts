export interface Product {
  name: string;
  brand: string;
  color: string;
}

export interface ProductNewFeature extends Product {
  speed: string;
}

export interface ICard {
  title: string;
  description: string;
  image: string;
  link: string;
}

// Intersection: &
export type FinalProduct = Product & ProductNewFeature;
