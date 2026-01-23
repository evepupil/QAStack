import { Tool, Locale } from './tools';

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
