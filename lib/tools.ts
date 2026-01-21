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
  category: string;
  tags: string[];
  content: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export interface CategoryTier {
  tier: number;
  tierName: string;
  categories: Category[];
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

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    return '';
  }

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
    category: tool.category,
    tags: tool.tags,
    content: tool.content,
  }));
}

// Fetch a single tool by slug
export async function getToolBySlug(slug: string, locale: Locale = 'en'): Promise<Tool | null> {
  const toolsData = getToolsData(locale);
  const tool = toolsData.find((t) => t.slug === slug);

  if (!tool) return null;

  // Load markdown content if available
  const content = tool.content ? await getMarkdownContent(tool.content, locale) : '';

  return {
    slug: tool.slug,
    title: tool.title,
    logo: tool.logo,
    description: tool.description,
    affiliateLink: tool.affiliateLink,
    pricing: tool.pricing,
    category: tool.category,
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

// Get all categories
export function getAllCategories(locale: Locale = 'en'): CategoryTier[] {
  const filePath = path.join(process.cwd(), 'data', 'categories', `${locale}.json`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

// Filter tools by category
export async function getToolsByCategory(category: string, locale: Locale = 'en'): Promise<Tool[]> {
  const allTools = await getAllTools(locale);
  return allTools.filter((tool) => tool.category === category);
}
