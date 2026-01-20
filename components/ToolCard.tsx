import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { Tool } from '@/lib/tools';

interface ToolCardProps {
  tool: Tool;
  className?: string;
}

/**
 * 工具卡片组件
 * 显示单个工具的信息，包括 logo、标题、定价、描述和标签
 */
export function ToolCard({ tool, className }: ToolCardProps) {
  const pricingColors = {
    free: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
    paid: 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    freemium: 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  };

  // 获取第一个标签用于显示
  const primaryTag = tool.tags[0] || 'DevTools';

  return (
    <Link
      href={`/tools/${tool.slug}`}
      className={cn(
        'group relative flex flex-col rounded-xl border bg-card p-5 transition-all hover:shadow-lg hover:border-primary/50',
        className
      )}
    >
      {/* Logo 和标题行 */}
      <div className="flex items-start gap-3 mb-3">
        {/* Logo */}
        {tool.logo && (
          <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg border bg-white dark:bg-gray-800 flex items-center justify-center">
            <Image
              src={tool.logo}
              alt={`${tool.title} logo`}
              fill
              className="object-contain p-2"
            />
          </div>
        )}

        {/* 标题和定价 */}
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-foreground mb-1.5 line-clamp-1 group-hover:text-primary transition-colors">
            {tool.title}
          </h3>
          <span className={cn('inline-block rounded-full px-2.5 py-0.5 text-xs font-medium', pricingColors[tool.pricing])}>
            {tool.pricing === 'free' ? 'Free' : tool.pricing === 'paid' ? 'Paid' : 'Freemium'}
          </span>
        </div>
      </div>

      {/* 描述 */}
      <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
        {tool.description}
      </p>

      {/* 主要标签 */}
      <div>
        <span className="inline-block rounded-md bg-secondary px-2.5 py-1 text-xs text-secondary-foreground font-medium">
          {primaryTag}
        </span>
      </div>
    </Link>
  );
}
