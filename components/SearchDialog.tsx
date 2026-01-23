'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, Wrench, FileText } from 'lucide-react';
import Image from 'next/image';
import { Tool, Locale } from '@/lib/tools';
import { BlogPost } from '@/lib/blogs';
import { searchAll } from '@/lib/search';
import { highlightText } from '@/lib/highlight';
import { cn } from '@/lib/utils';

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
  tools: Tool[];
  blogs: BlogPost[];
  locale: Locale;
  translations: {
    placeholder: string;
    noResults: string;
    tryDifferent: string;
    allTools: string;
    navigate: string;
    select: string;
    close: string;
    tools: string;
    blogs: string;
  };
}

type ResultItem = { type: 'tool'; item: Tool } | { type: 'blog'; item: BlogPost };

export function SearchDialog({ isOpen, onClose, tools, blogs, locale, translations }: SearchDialogProps) {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [toolResults, setToolResults] = useState<Tool[]>([]);
  const [blogResults, setBlogResults] = useState<BlogPost[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Flatten results for keyboard navigation
  const allResults: ResultItem[] = [
    ...toolResults.map(item => ({ type: 'tool' as const, item })),
    ...blogResults.map(item => ({ type: 'blog' as const, item })),
  ];

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 150);
    return () => clearTimeout(timer);
  }, [query]);

  // Execute search
  useEffect(() => {
    if (debouncedQuery.trim()) {
      const results = searchAll(tools, blogs, debouncedQuery, locale);
      setToolResults(results.tools);
      setBlogResults(results.blogs);
      setSelectedIndex(0);
    } else {
      setToolResults([]);
      setBlogResults([]);
    }
  }, [debouncedQuery, tools, blogs, locale]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setToolResults([]);
      setBlogResults([]);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Scroll selected item into view
  useEffect(() => {
    if (resultsRef.current && allResults.length > 0) {
      const selectedElement = resultsRef.current.querySelector(`[data-index="${selectedIndex}"]`);
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex, allResults.length]);

  // Navigate to result
  const navigateToResult = useCallback((result: ResultItem) => {
    if (result.type === 'tool') {
      router.push(`/${locale}/tools/${result.item.slug}`);
    } else {
      router.push(`/${locale}/blog/${result.item.slug}`);
    }
    onClose();
  }, [router, locale, onClose]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(i => Math.min(i + 1, allResults.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(i => Math.max(i - 1, 0));
        break;
      case 'Enter':
        e.preventDefault();
        if (allResults[selectedIndex]) {
          navigateToResult(allResults[selectedIndex]);
        }
        break;
      case 'Escape':
        onClose();
        break;
    }
  }, [allResults, selectedIndex, navigateToResult, onClose]);

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

  const hasResults = toolResults.length > 0 || blogResults.length > 0;
  let currentIndex = 0;

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
        <div ref={resultsRef} className="max-h-[60vh] overflow-y-auto">
          {hasResults ? (
            <div className="p-2">
              {/* Tools Section */}
              {toolResults.length > 0 && (
                <div className="mb-2">
                  <div className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    <Wrench className="h-3.5 w-3.5" />
                    {translations.tools}
                  </div>
                  {toolResults.map((tool) => {
                    const index = currentIndex++;
                    return (
                      <button
                        key={`tool-${tool.slug}`}
                        data-index={index}
                        onClick={() => navigateToResult({ type: 'tool', item: tool })}
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
                          <p className="text-sm text-muted-foreground line-clamp-1">
                            {highlightText(tool.description, query)}
                          </p>
                        </div>

                        {/* Enter hint for selected */}
                        {index === selectedIndex && (
                          <kbd className="self-center text-xs bg-muted px-2 py-1 rounded hidden sm:block shrink-0">
                            ↵
                          </kbd>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Blogs Section */}
              {blogResults.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    <FileText className="h-3.5 w-3.5" />
                    {translations.blogs}
                  </div>
                  {blogResults.map((blog) => {
                    const index = currentIndex++;
                    return (
                      <button
                        key={`blog-${blog.slug}`}
                        data-index={index}
                        onClick={() => navigateToResult({ type: 'blog', item: blog })}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={cn(
                          "w-full flex items-start gap-3 p-3 rounded-lg transition-all duration-150 text-left group",
                          index === selectedIndex
                            ? "bg-primary/10 border border-primary/20"
                            : "hover:bg-muted border border-transparent"
                        )}
                      >
                        {/* Blog Cover */}
                        {blog.coverImage ? (
                          <div className="h-10 w-14 rounded-lg overflow-hidden bg-muted flex items-center justify-center shrink-0">
                            <Image
                              src={blog.coverImage}
                              alt={blog.title}
                              width={56}
                              height={40}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="h-10 w-14 rounded-lg bg-muted flex items-center justify-center shrink-0">
                            <FileText className="h-5 w-5 text-muted-foreground" />
                          </div>
                        )}

                        {/* Blog Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-sm sm:text-base truncate">
                              {highlightText(blog.title, query)}
                            </h4>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground shrink-0">
                              {blog.category}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-1">
                            {highlightText(blog.excerpt, query)}
                          </p>
                        </div>

                        {/* Enter hint for selected */}
                        {index === selectedIndex && (
                          <kbd className="self-center text-xs bg-muted px-2 py-1 rounded hidden sm:block shrink-0">
                            ↵
                          </kbd>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
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
