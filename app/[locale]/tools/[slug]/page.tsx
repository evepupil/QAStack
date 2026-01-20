import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { getAllTools, getToolBySlug } from '@/lib/tools';
import { locales, Locale } from '@/lib/i18n';
import { getTranslations } from '@/lib/translations';

interface ToolPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const params = [];
  for (const locale of locales) {
    const tools = await getAllTools(locale);
    params.push(...tools.map((tool) => ({
      locale,
      slug: tool.slug,
    })));
  }
  return params;
}

export async function generateMetadata({ params }: ToolPageProps) {
  const { locale, slug } = await params;
  const tool = await getToolBySlug(slug, locale as Locale);

  if (!tool) {
    return {
      title: 'Tool Not Found',
    };
  }

  return {
    title: `${tool.title} - QAStack`,
    description: tool.description,
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { locale, slug } = await params;
  const tool = await getToolBySlug(slug, locale as Locale);
  const t = getTranslations(locale as Locale);

  if (!tool) {
    notFound();
  }

  const pricingColors = {
    free: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    paid: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    freemium: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  };

  const contentHtml = tool.content;

  return (
    <main className="min-h-screen">
      <header className="border-b bg-card px-8 py-6">
        <div className="mx-auto max-w-4xl">
          <Link
            href={`/${locale}/tools`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.tools.backToTools}
          </Link>

          <div className="flex items-start gap-6">
            {tool.logo && (
              <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg border bg-white">
                <Image
                  src={tool.logo}
                  alt={`${tool.title} logo`}
                  fill
                  className="object-contain p-3"
                />
              </div>
            )}

            <div className="flex-1">
              <h1 className="mb-2 text-4xl font-bold">{tool.title}</h1>
              <p className="mb-4 text-lg text-muted-foreground">{tool.description}</p>

              <div className="flex flex-wrap items-center gap-3">
                <span className={`rounded-full px-3 py-1 text-sm font-medium ${pricingColors[tool.pricing]}`}>
                  {t.tools[tool.pricing]}
                </span>

                <a
                  href={tool.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  {t.tools.visitWebsite}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {tool.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {tool.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block rounded-md bg-secondary px-3 py-1 text-sm text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      <article className="px-8 py-12">
        <div
          className="prose prose-slate dark:prose-invert mx-auto max-w-4xl"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </main>
  );
}
