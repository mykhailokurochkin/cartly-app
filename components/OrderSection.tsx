"use client";

import React, { useState, useMemo } from "react";
import { Product, PromoCode } from "@/types";
import { validatePromo } from "@/lib/promo";
import { computeOrderState, formatCurrency } from "@/lib/formatters";

interface OrderSectionProps {
  product: Product;
}

export function OrderSection({ product }: OrderSectionProps) {
  const [promoInput, setPromoInput] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<PromoCode | null>(null);
  const [error, setError] = useState<string | null>(null);

  const orderState = useMemo(() => {
    return computeOrderState(
      product.price,
      product.discountPercentage,
      appliedPromo?.discountPercent ?? 0
    );
  }, [product.price, product.discountPercentage, appliedPromo]);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const promo = validatePromo(promoInput);
      setAppliedPromo(promo);
      setPromoInput("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid promo code");
    }
  };

  const removePromo = () => {
    setAppliedPromo(null);
  };

  return (
    <aside className="space-y-6">
      <div className="rounded-2xl bg-bg-secondary border border-border-subtle p-6 shadow-card">
        <h2 className="text-lg font-bold text-text-primary mb-4">Promo Code</h2>

        {!appliedPromo ? (
          <form onSubmit={handleApplyPromo} className="space-y-3">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter core (e.g. SAVE10)"
                value={promoInput}
                onChange={(e) => setPromoInput(e.target.value)}
                className="block w-full rounded-xl border-border-subtle bg-bg-tertiary px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none ring-1 ring-transparent transition-all focus:ring-accent"
              />
              <button
                type="submit"
                disabled={!promoInput.trim()}
                className="rounded-xl bg-accent px-6 py-3 text-sm font-bold text-white transition-all hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Apply
              </button>
            </div>
            {error && <p className="text-xs font-medium text-error ml-1">{error}</p>}
          </form>
        ) : (
          <div className="flex items-center justify-between rounded-xl bg-accent/10 border border-accent/20 px-4 py-3 text-accent">
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-wider">Applied</span>
              <span className="text-sm font-black">{appliedPromo.code} — {appliedPromo.discountPercent}% OFF</span>
            </div>
            <button
              onClick={removePromo}
              className="p-2 hover:bg-accent/10 rounded-full transition-colors"
              aria-label="Remove promo"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
      </div>

      <div className="rounded-2xl bg-bg-secondary border border-border-subtle p-6 shadow-card">
        <h2 className="text-lg font-bold text-text-primary mb-6">Order Summary</h2>

        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <span className="text-text-muted">Subtotal</span>
            <span className="text-text-secondary font-medium tracking-tight">
              {formatCurrency(orderState.subtotal)}
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-text-muted">Item Discount</span>
            <span className="text-success font-medium tracking-tight">
              -{formatCurrency(orderState.productDiscount)}
            </span>
          </div>

          {appliedPromo && (
            <div className="flex justify-between text-sm">
              <span className="text-text-muted">Promo Discount ({appliedPromo.discountPercent}%)</span>
              <span className="text-success font-medium tracking-tight">
                -{formatCurrency(orderState.promoDiscount)}
              </span>
            </div>
          )}

          <div className="pt-4 border-t border-border-subtle">
            <div className="flex justify-between items-baseline">
              <span className="text-base font-bold text-text-primary">Total</span>
              <div className="flex flex-col items-end">
                <span className="text-2xl font-black text-white tracking-tight">
                  {formatCurrency(orderState.total)}
                </span>
                <span className="text-[10px] text-text-muted uppercase tracking-widest font-bold mt-1">Tax included</span>
              </div>
            </div>
          </div>
        </div>

        <button className="w-full mt-8 bg-gradient-accent text-white py-4 rounded-xl font-black text-base shadow-accent-glow transition-transform active:scale-[0.98] hover:shadow-accent-glow/50">
          Proceed to Checkout
        </button>
      </div>
    </aside>
  );
}
