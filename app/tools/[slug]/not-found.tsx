export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-8">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold">404</h1>
        <h2 className="mb-4 text-2xl font-semibold">Tool Not Found</h2>
        <p className="mb-8 text-muted-foreground">
          The tool you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="inline-block rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
