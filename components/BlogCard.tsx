import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/lib/blogs';

interface BlogCardProps {
  post: BlogPost;
}

/**
 * 博客卡片组件
 * 显示单篇博客文章的信息，包括封面图、标题、摘要、日期和分类
 */
export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-xl border bg-card overflow-hidden transition-all hover:shadow-lg hover:border-primary/50"
    >
      {/* 封面图片 */}
      <div className="relative w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* 内容区域 */}
      <div className="p-5 flex flex-col flex-1">
        {/* 日期和分类 */}
        <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
          <span>{post.date}</span>
          <span>•</span>
          <span className="text-primary font-medium">{post.category}</span>
        </div>

        {/* 标题 */}
        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>

        {/* 摘要 */}
        <p className="text-sm text-muted-foreground line-clamp-3 flex-1">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}
