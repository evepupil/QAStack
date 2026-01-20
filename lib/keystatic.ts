import { createReader } from '@keystatic/core/reader';
import config from '../keystatic.config';

// Create a reader instance
export const reader = createReader(process.cwd(), config);

// TypeScript interfaces
export interface Tool {
  slug: string;
  title: string;
  logo: string | null;
  description: string;
  affiliateLink: string;
  pricing: 'free' | 'paid' | 'freemium';
  tags: string[];
  content: () => Promise<any>;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
}

// Fetch all tools
export async function getAllTools(): Promise<Tool[]> {
  const tools = await reader.collections.tools.all();

  return tools.map((tool) => ({
    slug: tool.slug,
    title: tool.entry.title,
    logo: tool.entry.logo,
    description: tool.entry.description,
    affiliateLink: tool.entry.affiliateLink,
    pricing: tool.entry.pricing,
    tags: tool.entry.tags,
    content: tool.entry.content,
  }));
}

// Fetch a single tool by slug
export async function getToolBySlug(slug: string): Promise<Tool | null> {
  const tool = await reader.collections.tools.read(slug);

  if (!tool) return null;

  return {
    slug,
    title: tool.title,
    logo: tool.logo,
    description: tool.description,
    affiliateLink: tool.affiliateLink,
    pricing: tool.pricing,
    tags: tool.tags,
    content: tool.content,
  };
}

// Fetch all categories
export async function getAllCategories(): Promise<Category[]> {
  const categories = await reader.collections.categories.all();

  return categories.map((category) => ({
    slug: category.slug,
    name: category.entry.name,
    description: category.entry.description,
  }));
}

// Fetch a single category by slug
export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const category = await reader.collections.categories.read(slug);

  if (!category) return null;

  return {
    slug,
    name: category.name,
    description: category.description,
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
