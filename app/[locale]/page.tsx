import { Hero } from '@/components/Hero';
import { ToolCard } from '@/components/ToolCard';
import { BlogCard } from '@/components/BlogCard';
import { Footer } from '@/components/Footer';
import { getAllTools } from '@/lib/tools';
import { getLatestBlogs } from '@/lib/blogs';
import { Locale } from '@/lib/i18n';
import { getTranslations } from '@/lib/translations';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface HomeProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);

  const allTools = await getAllTools(locale as Locale);
  const latestTools = allTools.slice(0, 9);

  const latestBlogs = await getLatestBlogs(3, locale as Locale);

  return (
    <div className="min-h-screen flex flex-col">
      <Hero />

      <section className="w-full px-8 py-12 bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">{t.home.latestAdditions}</h2>
            <Link
              href={`/${locale}/tools`}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              {t.home.browseAllTools}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} locale={locale as Locale} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-8 py-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-8">{t.home.latestBlogPosts}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestBlogs.map((post) => (
              <BlogCard key={post.slug} post={post} locale={locale as Locale} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
