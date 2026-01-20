import { getAllBlogs } from '@/lib/blogs';
import { BlogCard } from '@/components/BlogCard';
import { Footer } from '@/components/Footer';
import { Search } from 'lucide-react';

/**
 * 博客列表页面
 * 显示所有博客文章
 */
export default async function BlogPage() {
  const blogs = await getAllBlogs();

  return (
    <div className="min-h-screen flex flex-col">
      {/* 页面头部 */}
      <section className="w-full px-8 py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-5xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Articles, tutorials, and insights about software testing
          </p>

          {/* 搜索框 */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full rounded-lg border bg-background pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </section>

      {/* 博客文章列表 */}
      <section className="w-full px-8 py-12">
        <div className="mx-auto max-w-7xl">
          {blogs.length === 0 ? (
            <div className="rounded-lg border border-dashed p-12 text-center">
              <p className="text-lg text-muted-foreground">
                No blog posts found. Check back soon for new content!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
