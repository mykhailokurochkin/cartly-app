import { Product } from "@/types";

export async function fetchProduct(id: number): Promise<Product> {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch product with id ${id}`);
  }

  return res.json();
}
