'use client';

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import { Tool, Locale } from '@/lib/tools';
import { SearchDialog } from './SearchDialog';

interface SearchContextType {
  isOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}

interface SearchProviderProps {
  children: ReactNode;
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

export function SearchProvider({ children, tools, locale, translations }: SearchProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openSearch = useCallback(() => setIsOpen(true), []);
  const closeSearch = useCallback(() => setIsOpen(false), []);

  // Global keyboard shortcut (Ctrl/Cmd + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent body scroll when dialog is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <SearchContext.Provider value={{ isOpen, openSearch, closeSearch }}>
      {children}
      <SearchDialog
        isOpen={isOpen}
        onClose={closeSearch}
        tools={tools}
        locale={locale}
        translations={translations}
      />
    </SearchContext.Provider>
  );
}
