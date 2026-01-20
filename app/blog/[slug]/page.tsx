import { notFound } from 'next/navigation';
import { getAllBlogs, getBlogBySlug } from '@/lib/blogs';
import { Footer } from '@/components/Footer';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * 生成静态路径
 */
export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

/**
 * 生成页面元数据
 */
export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

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

/**
 * 博客详情页面
 */
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* 返回链接 */}
      <div className="w-full px-8 py-6">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* 文章头部 */}
      <article className="w-full px-8 py-12">
        <div className="mx-auto max-w-4xl">
          {/* 封面图片 */}
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-8 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* 文章元信息 */}
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

          {/* 文章标题 */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* 文章摘要 */}
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            {blog.excerpt}
          </p>

          {/* 文章内容 */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              This is a placeholder for the full blog post content. In a real implementation,
              you would load the full content from a markdown file or database.
            </p>
            <p>
              The blog post would contain detailed information about {blog.title.toLowerCase()},
              including examples, best practices, and actionable insights for software testers.
            </p>
          </div>
        </div>
      </article>

      {/* Footer */}
      <Footer />
    </div>
  );
}
