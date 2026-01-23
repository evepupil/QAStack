import { Header } from "@/components/Header";
import { SearchProvider } from "@/components/SearchProvider";
import { locales, type Locale } from "@/lib/i18n";
import { getAllTools } from "@/lib/tools";
import { getAllBlogs } from "@/lib/blogs";
import { getTranslations } from "@/lib/translations";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);
  const tools = await getAllTools(locale as Locale);
  const blogs = await getAllBlogs(locale as Locale);

  return (
    <SearchProvider
      tools={tools}
      blogs={blogs}
      locale={locale as Locale}
      translations={t.search}
    >
      <Header locale={locale as Locale} translations={t} />
      {children}
    </SearchProvider>
  );
}
