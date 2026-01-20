import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { Tool } from '@/lib/keystatic';

interface ToolCardProps {
  tool: Tool;
  className?: string;
}

export function ToolCard({ tool, className }: ToolCardProps) {
  const pricingColors = {
    free: 'text-green-600',
    paid: 'text-blue-600',
    freemium: 'text-purple-600',
  };

  // Get first tag for display
  const primaryTag = tool.tags[0] || 'Tools';

  return (
    <Link
      href={`/tools/${tool.slug}`}
      className={cn(
        'group relative flex items-start gap-3 rounded-lg border bg-card p-4 transition-all hover:shadow-md hover:border-primary/50',
        className
      )}
    >
      {/* Logo */}
      {tool.logo && (
        <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg border bg-white">
          <Image
            src={tool.logo}
            alt={`${tool.title} logo`}
            fill
            className="object-contain p-2"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Title and Pricing */}
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
            {tool.title}
          </h3>
          <span className={cn('text-xs font-medium whitespace-nowrap', pricingColors[tool.pricing])}>
            {tool.pricing === 'free' ? 'Free' : tool.pricing === 'paid' ? 'Paid' : 'Free'}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
          {tool.description}
        </p>

        {/* Primary Tag */}
        <span className="inline-block text-xs text-muted-foreground">
          {primaryTag}
        </span>
      </div>
    </Link>
  );
}
