'use client';

import { Search } from 'lucide-react';
import { useSearch } from './SearchProvider';
import { cn } from '@/lib/utils';

interface SearchTriggerProps {
  variant?: 'hero' | 'standard';
  placeholder?: string;
  className?: string;
}

export function SearchTrigger({ variant = 'standard', placeholder = 'Search tools...', className }: SearchTriggerProps) {
  const { openSearch } = useSearch();

  if (variant === 'hero') {
    return (
      <button
        onClick={openSearch}
        className={cn("relative w-full group", className)}
      >
        <div className="flex items-center w-full rounded-lg border bg-background hover:border-primary transition-colors pl-12 pr-20 py-3 text-left">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground group-hover:text-primary transition-colors" />
          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
            {placeholder}
          </span>
          <kbd className="absolute right-4 top-1/2 -translate-y-1/2 rounded border bg-muted px-2 py-1 text-xs text-muted-foreground font-mono">
            Ctrl + K
          </kbd>
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={openSearch}
      className={cn("relative w-full group", className)}
    >
      <div className="flex items-center w-full rounded-lg border bg-background hover:border-primary transition-colors pl-10 pr-4 py-2 text-left">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground group-hover:text-primary transition-colors" />
        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
          {placeholder}
        </span>
        <kbd className="absolute right-3 top-1/2 -translate-y-1/2 rounded border bg-muted px-2 py-0.5 text-xs text-muted-foreground">
          Ctrl + K
        </kbd>
      </div>
    </button>
  );
}
