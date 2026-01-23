'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';
import Image from 'next/image';
import { Tool, Locale } from '@/lib/tools';
import { searchTools } from '@/lib/search';
import { highlightText } from '@/lib/highlight';
import { cn } from '@/lib/utils';

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
  tools: Tool[];
  locale: Locale;
  translations: {
    placeholder: string;
    noResults: string;
    tryDifferent: string;
    allTools: string;
    navigate: string;
    select: string;
    close: string;
  };
}

export function SearchDialog({ isOpen, onClose, tools, locale, translations }: SearchDialogProps) {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [results, setResults] = useState<Tool[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 150);
    return () => clearTimeout(timer);
  }, [query]);

  // Execute search
  useEffect(() => {
    if (debouncedQuery.trim()) {
      setResults(searchTools(tools, debouncedQuery, locale));
      setSelectedIndex(0);
    } else {
      setResults([]);
    }
  }, [debouncedQuery, tools, locale]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setResults([]);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Scroll selected item into view
  useEffect(() => {
    if (resultsRef.current && results.length > 0) {
      const selectedElement = resultsRef.current.children[selectedIndex] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex, results.length]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(i => Math.min(i + 1, results.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(i => Math.max(i - 1, 0));
        break;
      case 'Enter':
        e.preventDefault();
        if (results[selectedIndex]) {
          router.push(`/${locale}/tools/${results[selectedIndex].slug}`);
          onClose();
        }
        break;
      case 'Escape':
        onClose();
        break;
    }
  }, [results, selectedIndex, router, locale, onClose]);

  // Pricing badge colors
  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case 'free':
        return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400';
      case 'paid':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'freemium':
        return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400';
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] sm:pt-[15vh]"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200" />

      {/* Dialog */}
      <div
        className="relative w-full max-w-2xl mx-4 bg-background rounded-xl border shadow-2xl animate-in slide-in-from-top-4 fade-in duration-300"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input */}
        <div className="flex items-center border-b px-4 py-3">
          <Search className="h-5 w-5 text-muted-foreground shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent outline-none text-base sm:text-lg placeholder:text-muted-foreground mx-3"
            placeholder={translations.placeholder}
          />
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-muted rounded-md transition-colors shrink-0"
            aria-label={translations.close}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Results */}
        <div ref={resultsRef} className="max-h-[60vh] overflow-y-auto p-2">
          {results.length > 0 ? (
            results.map((tool, index) => (
              <button
                key={tool.slug}
                onClick={() => {
                  router.push(`/${locale}/tools/${tool.slug}`);
                  onClose();
                }}
                onMouseEnter={() => setSelectedIndex(index)}
                className={cn(
                  "w-full flex items-start gap-3 p-3 rounded-lg transition-all duration-150 text-left group",
                  index === selectedIndex
                    ? "bg-primary/10 border border-primary/20"
                    : "hover:bg-muted border border-transparent"
                )}
              >
                {/* Tool Logo */}
                {tool.logo ? (
                  <div className="h-10 w-10 rounded-lg overflow-hidden bg-muted flex items-center justify-center shrink-0">
                    <Image
                      src={tool.logo}
                      alt={tool.title}
                      width={40}
                      height={40}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                    <span className="text-lg font-semibold text-muted-foreground">
                      {tool.title.charAt(0)}
                    </span>
                  </div>
                )}

                {/* Tool Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-sm sm:text-base truncate">
                      {highlightText(tool.title, query)}
                    </h4>
                    <span className={cn("text-xs px-2 py-0.5 rounded-full shrink-0", getPricingColor(tool.pricing))}>
                      {tool.pricing}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-1 sm:line-clamp-2">
                    {highlightText(tool.description, query)}
                  </p>
                  {tool.tags.length > 0 && (
                    <div className="hidden sm:flex gap-1.5 mt-2">
                      {tool.tags.slice(0, 3).map(tag => (
                        <span
                          key={tag}
                          className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Enter hint for selected */}
                {index === selectedIndex && (
                  <kbd className="self-center text-xs bg-muted px-2 py-1 rounded hidden sm:block shrink-0">
                    ↵
                  </kbd>
                )}
              </button>
            ))
          ) : query.trim() ? (
            <div className="py-12 text-center">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground">
                {translations.noResults} &quot;<strong>{query}</strong>&quot;
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {translations.tryDifferent}{' '}
                <button
                  onClick={() => {
                    router.push(`/${locale}/tools`);
                    onClose();
                  }}
                  className="text-primary hover:underline"
                >
                  {translations.allTools}
                </button>
              </p>
            </div>
          ) : (
            <div className="py-8 text-center text-muted-foreground text-sm">
              {translations.placeholder}
            </div>
          )}
        </div>

        {/* Footer Hints */}
        <div className="border-t px-4 py-2.5 text-xs text-muted-foreground flex flex-wrap gap-x-4 gap-y-1">
          <span className="flex items-center gap-1">
            <kbd className="bg-muted px-1.5 py-0.5 rounded text-[10px]">↑</kbd>
            <kbd className="bg-muted px-1.5 py-0.5 rounded text-[10px]">↓</kbd>
            <span className="ml-1">{translations.navigate}</span>
          </span>
          <span className="flex items-center gap-1">
            <kbd className="bg-muted px-1.5 py-0.5 rounded text-[10px]">↵</kbd>
            <span className="ml-1">{translations.select}</span>
          </span>
          <span className="flex items-center gap-1">
            <kbd className="bg-muted px-1.5 py-0.5 rounded text-[10px]">Esc</kbd>
            <span className="ml-1">{translations.close}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
