import { Product, productSchema } from "@/types";

export async function fetchProduct(id: number): Promise<Product> {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch product with id ${id}`);
  }

  const data = await res.json();
  const result = productSchema.safeParse(data);

  if (!result.success) {
    console.error("API Validation Error:", result.error.format());
    throw new Error("Received invalid data from product API");
  }

  return result.data;
}
