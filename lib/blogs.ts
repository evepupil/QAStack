import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

export type Locale = 'en' | 'zh';

/**
 * 博客文章接口
 */
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  category: string;
  content?: string;
}

/**
 * 从 JSON 文件读取博客数据
 */
function getBlogsData(locale: Locale): BlogPost[] {
  const filePath = path.join(process.cwd(), 'data', 'blogs', `${locale}.json`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

/**
 * 获取所有博客文章
 */
export async function getAllBlogs(locale: Locale = 'en'): Promise<BlogPost[]> {
  const blogsData = getBlogsData(locale);
  return blogsData;
}

/**
 * 获取最新的博客文章
 * @param limit 返回的文章数量
 */
export async function getLatestBlogs(limit: number = 3, locale: Locale = 'en'): Promise<BlogPost[]> {
  const allBlogs = await getAllBlogs(locale);
  return allBlogs.slice(0, limit);
}

/**
 * 读取并转换 Markdown 内容为 HTML
 */
async function getMarkdownContent(slug: string, locale: Locale): Promise<string> {
  const filePath = path.join(process.cwd(), 'data', 'blog', locale, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return '';
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const processedContent = await remark().use(html).process(fileContents);
  return processedContent.toString();
}

/**
 * 根据 slug 获取单个博客文章
 */
export async function getBlogBySlug(slug: string, locale: Locale = 'en'): Promise<BlogPost | null> {
  const blogsData = getBlogsData(locale);
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return null;
  }

  const content = await getMarkdownContent(slug, locale);

  return {
    ...blog,
    content,
  };
}
