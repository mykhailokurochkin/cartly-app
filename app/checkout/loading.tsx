export default function Loading() {
  return (
    <main className="min-h-screen bg-bg-primary px-4 py-10 md:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10">
          <div className="h-8 w-24 animate-pulse rounded-lg bg-bg-tertiary" />
          <div className="mt-2 h-4 w-16 animate-pulse rounded bg-bg-tertiary" />
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
          <div className="md:col-span-3 space-y-4">
            <div className="h-64 animate-pulse rounded-2xl bg-bg-secondary" />
            <div className="h-6 w-3/4 animate-pulse rounded bg-bg-tertiary" />
            <div className="h-4 w-1/2 animate-pulse rounded bg-bg-tertiary" />
          </div>
          <div className="md:col-span-2 space-y-4">
            <div className="h-40 animate-pulse rounded-2xl bg-bg-secondary" />
            <div className="h-32 animate-pulse rounded-2xl bg-bg-secondary" />
          </div>
        </div>
      </div>
    </main>
  );
}
