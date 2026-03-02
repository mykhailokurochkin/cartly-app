export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  thumbnail: string;
  images: string[];
  availabilityStatus: string;
  shippingInformation: string;
  warrantyInformation: string;
  returnPolicy: string;
  minimumOrderQuantity: number;
}

export interface PromoCode {
  code: string;
  discountPercent: number;
}

export interface OrderState {
  subtotal: number;
  productDiscount: number;
  promoDiscount: number;
  total: number;
  appliedPromo: PromoCode | null;
}
