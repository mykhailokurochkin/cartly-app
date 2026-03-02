import { redirect } from "next/navigation";
import { fetchProduct } from "@/lib/api";
import { ProductCard } from "@/components/ProductCard";
import { OrderSection } from "@/components/OrderSection";

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
    <main className="min-h-screen bg-bg-primary px-4 py-8 md:px-8 lg:py-12">
      <div className="mx-auto max-w-5xl">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-xl bg-gradient-accent flex items-center justify-center shadow-accent-glow">
              <span className="text-xl font-black text-white italic">C</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-text-primary">
              Cartly
            </h1>
          </div>
          <p className="text-sm text-text-muted font-medium ml-[52px]">
            Checkout & Order Details
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 items-start">
          <section className="md:col-span-3 space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-text-primary">Your Selection</h2>
              <span className="text-xs text-text-muted uppercase tracking-widest font-bold">1 Item</span>
            </div>
            <ProductCard product={product} />
          </section>

          <aside className="md:col-span-2 space-y-6">
            <h2 className="text-lg font-semibold text-text-primary px-1">Checkout Summary</h2>
            <OrderSection product={product} />
          </aside>
        </div>
      </div>
    </main>
  );
}
