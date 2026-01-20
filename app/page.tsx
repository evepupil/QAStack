import { Hero } from '@/components/Hero';
import { ToolCard } from '@/components/ToolCard';
import { BlogCard } from '@/components/BlogCard';
import { Footer } from '@/components/Footer';
import { getAllTools } from '@/lib/tools';
import { getLatestBlogs } from '@/lib/blogs';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

/**
 * 首页组件
 * 显示 Hero 部分、最新工具和最新博客文章
 */
export default async function Home() {
  // 获取所有工具（显示前9个）
  const allTools = await getAllTools();
  const latestTools = allTools.slice(0, 9);

  // 获取最新的3篇博客文章
  const latestBlogs = await getLatestBlogs(3);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero 部分 */}
      <Hero />

      {/* 最新工具部分 */}
      <section className="w-full px-8 py-12 bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Latest Additions</h2>
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Browse All Tools
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* 工具网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* 最新博客文章部分 */}
      <section className="w-full px-8 py-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-8">Our latest blog posts</h2>

          {/* 博客网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestBlogs.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
