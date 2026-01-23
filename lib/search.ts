import { Tool, Locale } from './tools';
import { BlogPost } from './blogs';

export interface SearchResult {
  type: 'tool' | 'blog';
  item: Tool | BlogPost;
  score: number;
}

/**
 * Search tools by query string
 * Matches against title, description, tags, and category
 * Returns results sorted by relevance score
 */
export function searchTools(tools: Tool[], query: string, locale: Locale): Tool[] {
  if (!query.trim()) return [];

  const normalizedQuery = query.toLowerCase().trim();

  const scoredTools = tools.map(tool => {
    let score = 0;
    const title = tool.title.toLowerCase();
    const desc = tool.description.toLowerCase();
    const category = tool.category.toLowerCase().replace(/-/g, ' ');

    // Title exact match (highest priority)
    if (title === normalizedQuery) {
      score += 100;
    } else if (title.startsWith(normalizedQuery)) {
      // Title starts with query
      score += 90;
    } else if (title.includes(normalizedQuery)) {
      // Title contains query
      score += 80;
    }

    // Tag match
    const matchingTags = tool.tags.filter(tag =>
      tag.toLowerCase().includes(normalizedQuery) ||
      normalizedQuery.includes(tag.toLowerCase())
    );
    score += matchingTags.length * 60;

    // Category match
    if (category.includes(normalizedQuery) || normalizedQuery.includes(category)) {
      score += 50;
    }

    // Description match
    if (desc.includes(normalizedQuery)) {
      score += 40;
    }

    return { tool, score };
  });

  return scoredTools
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10)
    .map(({ tool }) => tool);
}

/**
 * Search blogs by query string
 * Matches against title, excerpt, and category
 * Returns results sorted by relevance score
 */
export function searchBlogs(blogs: BlogPost[], query: string, locale: Locale): BlogPost[] {
  if (!query.trim()) return [];

  const normalizedQuery = query.toLowerCase().trim();

  const scoredBlogs = blogs.map(blog => {
    let score = 0;
    const title = blog.title.toLowerCase();
    const excerpt = blog.excerpt.toLowerCase();
    const category = blog.category.toLowerCase().replace(/-/g, ' ');

    // Title exact match (highest priority)
    if (title === normalizedQuery) {
      score += 100;
    } else if (title.startsWith(normalizedQuery)) {
      score += 90;
    } else if (title.includes(normalizedQuery)) {
      score += 80;
    }

    // Category match
    if (category.includes(normalizedQuery) || normalizedQuery.includes(category)) {
      score += 50;
    }

    // Excerpt match
    if (excerpt.includes(normalizedQuery)) {
      score += 40;
    }

    return { blog, score };
  });

  return scoredBlogs
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(({ blog }) => blog);
}

/**
 * Combined search for tools and blogs
 * Returns grouped results
 */
export function searchAll(
  tools: Tool[],
  blogs: BlogPost[],
  query: string,
  locale: Locale
): { tools: Tool[]; blogs: BlogPost[] } {
  return {
    tools: searchTools(tools, query, locale),
    blogs: searchBlogs(blogs, query, locale),
  };
}
