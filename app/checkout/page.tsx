import { redirect } from "next/navigation";
import { fetchProduct } from "@/lib/api";

type Props = {
  searchParams: Promise<{ product_id?: string }>;
};

export default async function CheckoutPage({ searchParams }: Props) {
  const { product_id } = await searchParams;
  const id = Number(product_id);

  if (!id || id <= 0) {
    redirect("/checkout?product_id=1");
  }

  const product = await fetchProduct(id);

  return (
    <main className="min-h-screen bg-bg-primary px-4 py-10 md:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-text-primary">
            Cartly
          </h1>
          <p className="mt-1 text-sm text-text-muted">Checkout</p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
          <div className="md:col-span-3">
            <pre className="text-text-secondary text-xs">
              {JSON.stringify(product, null, 2)}
            </pre>
          </div>
          <div className="md:col-span-2">
            <p className="text-text-muted text-sm">Order summary coming soon</p>
          </div>
        </div>
      </div>
    </main>
  );
}
