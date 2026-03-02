import Image from "next/image";
import { Product } from "@/types";
import { formatCurrency } from "@/lib/formatters";
import { Badge } from "@/components/ui/Badge";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl bg-gradient-surface p-px shadow-card group">
      <div className="rounded-[15px] bg-bg-secondary p-6 h-full">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-12">
          <div className="sm:col-span-5 relative aspect-square overflow-hidden rounded-xl bg-bg-tertiary">
            <Image
              src={product.thumbnail}
              alt={product.title}
              fill
              className="object-cover transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, 40vw"
              priority
            />
          </div>

          <div className="sm:col-span-7 flex flex-col">
            <div className="mb-2 flex items-center gap-2">
              <Badge variant="accent" className="uppercase tracking-wider">
                {product.category}
              </Badge>
              {product.stock > 0 && (
                <Badge variant="success">In Stock</Badge>
              )}
            </div>

            <h2 className="mb-1 text-2xl font-bold text-text-primary leading-tight">
              {product.title}
            </h2>
            <p className="mb-4 text-sm font-medium text-text-muted">
              {product.brand}
            </p>

            <div className="mb-4 flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`h-4 w-4 ${i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-bg-tertiary fill-bg-tertiary"
                    }`}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-xs text-text-muted">
                {product.rating.toFixed(1)}
              </span>
            </div>

            <p className="mb-6 text-sm text-text-secondary leading-relaxed line-clamp-3">
              {product.description}
            </p>

            <div className="mt-auto pt-6 border-t border-border-subtle flex items-end justify-between">
              <div>
                <p className="text-xs text-text-muted mb-1 uppercase tracking-widest font-semibold">Price</p>
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-text-primary">
                    {formatCurrency(product.price)}
                  </span>
                  {product.discountPercentage > 0 && (
                    <span className="rounded bg-success/10 px-2 py-0.5 text-xs font-bold text-success">
                      -{product.discountPercentage}%
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
