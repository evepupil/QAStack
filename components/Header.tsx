'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun, Languages } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import type { Locale } from '@/lib/i18n';
import { translations } from '@/lib/translations';

interface HeaderProps {
  locale: Locale;
  translations: ReturnType<typeof import('@/lib/translations').getTranslations>;
}

export function Header({ locale, translations: t }: HeaderProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const switchLocale = (newLocale: Locale) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    window.location.href = newPath;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-8 mx-auto max-w-7xl">
        <Link href={`/${locale}`} className="flex items-center gap-2 font-semibold text-lg">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span>QAStack</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href={`/${locale}/tools`}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.nav.tools}
          </Link>
          <Link
            href={`/${locale}/blog`}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.nav.blog}
          </Link>
          <Link
            href={`/${locale}/about`}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.nav.about}
          </Link>

          {mounted && (
            <>
              <button
                onClick={() => switchLocale(locale === 'en' ? 'zh' : 'en')}
                className="rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                aria-label="Switch language"
              >
                <Languages className="h-4 w-4" />
              </button>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
