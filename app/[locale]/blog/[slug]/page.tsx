import { notFound } from 'next/navigation';
import { getAllBlogs, getBlogBySlug } from '@/lib/blogs';
import { Footer } from '@/components/Footer';
import { locales, Locale } from '@/lib/i18n';
import { getTranslations } from '@/lib/translations';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPostPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const params = [];
  for (const locale of locales) {
    const blogs = await getAllBlogs(locale);
    params.push(...blogs.map((blog) => ({
      locale,
      slug: blog.slug,
    })));
  }
  return params;
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { locale, slug } = await params;
  const blog = await getBlogBySlug(slug, locale as Locale);

  if (!blog) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: `${blog.title} - QAStack Blog`,
    description: blog.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params;
  const blog = await getBlogBySlug(slug, locale as Locale);
  const t = getTranslations(locale as Locale);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full px-8 py-6">
        <div className="mx-auto max-w-4xl">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.blog.backToBlog}
          </Link>
        </div>
      </div>

      <article className="w-full px-8 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-8 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{blog.date}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4" />
              <span className="text-primary font-medium">{blog.category}</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {blog.title}
          </h1>

          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            {blog.excerpt}
          </p>

          <div
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content || '' }}
          />
        </div>
      </article>

      <Footer />
    </div>
  );
}
