import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

/**
 * 生成 robots.txt 文件
 * 告诉搜索引擎爬虫哪些页面可以访问
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://qastack.chaosyn.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
