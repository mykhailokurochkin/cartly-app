import { PromoCode } from "@/types";

const PROMO_CODES: Record<string, PromoCode> = {
  SAVE10: { code: "SAVE10", discountPercent: 10 },
  CARTLY20: { code: "CARTLY20", discountPercent: 20 },
  FREESHIP: { code: "FREESHIP", discountPercent: 5 },
};

export function validatePromo(input: string): PromoCode {
  const normalized = input.trim().toUpperCase();
  const promo = PROMO_CODES[normalized];

  if (!promo) {
    throw new Error("Invalid promo code");
  }

  return promo;
}
