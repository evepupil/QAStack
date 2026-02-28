import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://qastack.chaosyn.com'),
  title: {
    default: "QAStack - Software Testing Tools Directory",
    template: "%s | QAStack"
  },
  description: "Discover the best software testing tools and resources. QAStack is your comprehensive directory for automation, API testing, performance testing, and more.",
  keywords: ["software testing tools", "QA tools", "test automation", "API testing", "performance testing", "selenium", "playwright", "cypress", "jest", "testing frameworks"],
  authors: [{ name: "YeTong" }],
  creator: "YeTong",
  publisher: "QAStack",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'QAStack - Software Testing Tools Directory',
    description: 'Discover the best software testing tools and resources. Comprehensive directory for QA engineers and developers.',
    siteName: 'QAStack',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QAStack - Software Testing Tools Directory',
    description: 'Discover the best software testing tools and resources.',
    creator: '@qastack',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
