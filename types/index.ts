import { z } from "zod";

export const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  category: z.string(),
  price: z.number(),
  discountPercentage: z.number(),
  rating: z.number(),
  stock: z.number(),
  tags: z.array(z.string()),
  brand: z.string().optional().default("Unknown Brand"),
  sku: z.string(),
  thumbnail: z.string().url(),
  images: z.array(z.string().url()),
  availabilityStatus: z.string(),
  shippingInformation: z.string(),
  warrantyInformation: z.string(),
  returnPolicy: z.string(),
  minimumOrderQuantity: z.number(),
});

export type Product = z.infer<typeof productSchema>;

export const promoCodeSchema = z.object({
  code: z.string(),
  discountPercent: z.number().min(0).max(100),
});

export type PromoCode = z.infer<typeof promoCodeSchema>;

export interface OrderState {
  subtotal: number;
  productDiscount: number;
  promoDiscount: number;
  total: number;
  appliedPromo: PromoCode | null;
}
