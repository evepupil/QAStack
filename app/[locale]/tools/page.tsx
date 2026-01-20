import { getAllTools } from '@/lib/tools';
import { ToolCard } from '@/components/ToolCard';
import { Sidebar } from '@/components/Sidebar';
import { Locale } from '@/lib/i18n';
import { Search } from 'lucide-react';

interface ToolsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ToolsPage({ params }: ToolsPageProps) {
  const { locale } = await params;
  const tools = await getAllTools(locale as Locale);

  return (
    <div className="flex justify-center min-h-screen">
      <div className="flex w-full max-w-[1600px]">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 px-8 py-12">
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
                No tools found. Add tools by editing data/tools.json
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} locale={locale as Locale} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
