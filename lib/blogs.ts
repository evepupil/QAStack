import fs from 'fs';
import path from 'path';

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
}

/**
 * 从 JSON 文件读取博客数据
 */
function getBlogsData(): BlogPost[] {
  const filePath = path.join(process.cwd(), 'data', 'blogs.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

/**
 * 获取所有博客文章
 */
export async function getAllBlogs(): Promise<BlogPost[]> {
  const blogsData = getBlogsData();
  return blogsData;
}

/**
 * 获取最新的博客文章
 * @param limit 返回的文章数量
 */
export async function getLatestBlogs(limit: number = 3): Promise<BlogPost[]> {
  const allBlogs = await getAllBlogs();
  return allBlogs.slice(0, limit);
}

/**
 * 根据 slug 获取单个博客文章
 */
export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  const blogsData = getBlogsData();
  const blog = blogsData.find((b) => b.slug === slug);
  return blog || null;
}
