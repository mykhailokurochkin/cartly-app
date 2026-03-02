"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to an observability service in production
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center p-6 text-center">
      <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-error/10 text-error shadow-lg shadow-error/10">
        <svg
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>

      <h1 className="mb-3 text-2xl font-bold text-text-primary">
        Oops! Product Not Found
      </h1>
      <p className="mb-10 max-w-md text-text-muted">
        We couldn&apos;t load the product details. It might have been removed or
        the product ID is invalid.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <button
          onClick={() => reset()}
          className="rounded-xl border border-border-subtle bg-bg-secondary px-8 py-4 text-sm font-bold text-text-primary transition-all hover:bg-bg-tertiary"
        >
          Try Again
        </button>
        <button
          onClick={() => (window.location.href = "/checkout?product_id=1")}
          className="rounded-xl bg-accent px-8 py-4 text-sm font-bold text-white shadow-accent-glow transition-all hover:bg-accent-hover"
        >
          View Default Product
        </button>
      </div>
    </div>
  );
}
