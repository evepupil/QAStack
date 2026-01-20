import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

/**
 * 博客文章未找到页面
 */
export default function BlogNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="text-lg text-muted-foreground mb-8">
          The blog post you're looking for doesn't exist or has been removed.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
      </div>
    </div>
  );
}
