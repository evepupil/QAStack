import { getAllTools } from '@/lib/keystatic';
import { ToolCard } from '@/components/ToolCard';
import { Sidebar } from '@/components/Sidebar';
import { Search } from 'lucide-react';

export default async function ToolsPage() {
  const tools = await getAllTools();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1">
        <div className="container max-w-6xl px-8 py-12">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">
              The best Software Testing tools and resources on the internet.
            </h1>

            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search tools..."
                className="w-full rounded-lg border bg-background pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <kbd className="absolute right-3 top-1/2 -translate-y-1/2 rounded border bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                Ctrl + K
              </kbd>
            </div>

            <p className="text-muted-foreground">
              Over {tools.length}+ awesome tools and resources on the internet to supercharge your testing
            </p>
          </div>

          {/* Tools Grid */}
          {tools.length === 0 ? (
            <div className="rounded-lg border border-dashed p-12 text-center">
              <p className="text-lg text-muted-foreground">
                No tools found. Visit{' '}
                <a href="/keystatic" className="font-medium text-primary hover:underline">
                  /keystatic
                </a>{' '}
                to add your first tool.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {tools.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
