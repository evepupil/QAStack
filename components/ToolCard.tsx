import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { Tool } from '@/lib/tools';

interface ToolCardProps {
  tool: Tool;
  className?: string;
}

export function ToolCard({ tool, className }: ToolCardProps) {
  const pricingColors = {
    free: 'bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400',
    paid: 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    freemium: 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  };

  // Get first tag for display
  const primaryTag = tool.tags[0] || 'Tools';

  return (
    <Link
      href={`/tools/${tool.slug}`}
      className={cn(
        'group relative flex flex-col rounded-lg border bg-card p-4 transition-all hover:shadow-md hover:border-primary/50',
        className
      )}
    >
      {/* Logo and Title Row */}
      <div className="flex items-start gap-3 mb-2">
        {/* Logo */}
        {tool.logo && (
          <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-md bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center">
            <Image
              src={tool.logo}
              alt={`${tool.title} logo`}
              fill
              className="object-contain p-2"
            />
          </div>
        )}

        {/* Title and Pricing */}
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors">
            {tool.title}
          </h3>
          <span className={cn('inline-block rounded px-2 py-0.5 text-xs font-medium', pricingColors[tool.pricing])}>
            {tool.pricing === 'free' ? 'Free' : tool.pricing === 'paid' ? 'Paid' : 'Free'}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
        {tool.description}
      </p>

      {/* Primary Tag */}
      <div>
        <span className="inline-block rounded border border-border bg-secondary/50 px-2 py-0.5 text-xs text-secondary-foreground">
          {primaryTag}
        </span>
      </div>
    </Link>
  );
}
