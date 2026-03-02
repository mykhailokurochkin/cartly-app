export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function computeOrderState(
  price: number,
  discountPercentage: number,
  promoDiscountPercent: number
) {
  const subtotal = price;
  const productDiscount = subtotal * (discountPercentage / 100);
  const promoDiscount = subtotal * (promoDiscountPercent / 100);
  const total = subtotal - productDiscount - promoDiscount;

  return {
    subtotal,
    productDiscount,
    promoDiscount,
    total,
  };
}
