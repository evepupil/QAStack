import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

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
function getToolsData(): Tool[] {
  const filePath = path.join(process.cwd(), 'data', 'tools.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

// Read markdown content
async function getMarkdownContent(filename: string): Promise<string> {
  const filePath = path.join(process.cwd(), 'data', 'content', filename);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Convert markdown to HTML
  const processedContent = await remark()
    .use(html)
    .process(fileContents);

  return processedContent.toString();
}

// Fetch all tools
export async function getAllTools(): Promise<Tool[]> {
  const toolsData = getToolsData();

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
export async function getToolBySlug(slug: string): Promise<Tool | null> {
  const toolsData = getToolsData();
  const tool = toolsData.find((t) => t.slug === slug);

  if (!tool) return null;

  // Load markdown content
  const content = await getMarkdownContent(tool.content);

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
export async function getToolsByTag(tag: string): Promise<Tool[]> {
  const allTools = await getAllTools();
  return allTools.filter((tool) => tool.tags.includes(tag));
}

// Filter tools by pricing
export async function getToolsByPricing(pricing: 'free' | 'paid' | 'freemium'): Promise<Tool[]> {
  const allTools = await getAllTools();
  return allTools.filter((tool) => tool.pricing === pricing);
}
