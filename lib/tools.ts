import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

export type Locale = 'en' | 'zh';

// TypeScript interfaces
export interface Tool {
  slug: string;
  title: string;
  logo: string | null;
  description: string;
  affiliateLink: string;
  pricing: 'free' | 'paid' | 'freemium';
  tags: string[];
  content: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
}

// Read tools from JSON file
function getToolsData(locale: Locale): Tool[] {
  const filePath = path.join(process.cwd(), 'data', 'tools', `${locale}.json`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

// Read markdown content
async function getMarkdownContent(filename: string, locale: Locale): Promise<string> {
  const filePath = path.join(process.cwd(), 'data', 'content', locale, filename);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Convert markdown to HTML
  const processedContent = await remark()
    .use(html)
    .process(fileContents);

  return processedContent.toString();
}

// Fetch all tools
export async function getAllTools(locale: Locale = 'en'): Promise<Tool[]> {
  const toolsData = getToolsData(locale);

  return toolsData.map((tool) => ({
    slug: tool.slug,
    title: tool.title,
    logo: tool.logo,
    description: tool.description,
    affiliateLink: tool.affiliateLink,
    pricing: tool.pricing,
    tags: tool.tags,
    content: tool.content,
  }));
}

// Fetch a single tool by slug
export async function getToolBySlug(slug: string, locale: Locale = 'en'): Promise<Tool | null> {
  const toolsData = getToolsData(locale);
  const tool = toolsData.find((t) => t.slug === slug);

  if (!tool) return null;

  // Load markdown content
  const content = await getMarkdownContent(tool.content, locale);

  return {
    slug: tool.slug,
    title: tool.title,
    logo: tool.logo,
    description: tool.description,
    affiliateLink: tool.affiliateLink,
    pricing: tool.pricing,
    tags: tool.tags,
    content,
  };
}

// Filter tools by tag
export async function getToolsByTag(tag: string, locale: Locale = 'en'): Promise<Tool[]> {
  const allTools = await getAllTools(locale);
  return allTools.filter((tool) => tool.tags.includes(tag));
}

// Filter tools by pricing
export async function getToolsByPricing(pricing: 'free' | 'paid' | 'freemium', locale: Locale = 'en'): Promise<Tool[]> {
  const allTools = await getAllTools(locale);
  return allTools.filter((tool) => tool.pricing === pricing);
}
