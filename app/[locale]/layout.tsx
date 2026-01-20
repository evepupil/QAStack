import { Header } from "@/components/Header";
import { locales, type Locale } from "@/lib/i18n";
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

  return (
    <>
      <Header locale={locale as Locale} translations={t} />
      {children}
    </>
  );
}
