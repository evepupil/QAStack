import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/lib/blogs';
import type { Locale } from '@/lib/i18n';

interface BlogCardProps {
  post: BlogPost;
  locale: Locale;
}

export function BlogCard({ post, locale }: BlogCardProps) {
  return (
    <Link
      href={`/${locale}/blog/${post.slug}`}
      className="group flex flex-col rounded-xl border bg-card overflow-hidden transition-all hover:shadow-lg hover:border-primary/50"
    >
      <div className="relative w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
          <span>{post.date}</span>
          <span>•</span>
          <span className="text-primary font-medium">{post.category}</span>
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-3 flex-1">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}
