# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

QAStack is a modern, SEO-optimized directory site for software testing tools built with Next.js 15 App Router and TypeScript. The site uses a simple JSON-based data structure with Markdown content files for tool descriptions.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

### Data Flow Architecture

The application uses a **file-based data system** instead of a traditional CMS:

1. **Tool Metadata**: Stored in `data/tools.json` - contains tool information (title, logo, description, pricing, tags, etc.)
2. **Tool Content**: Stored as individual Markdown files in `data/content/` directory (e.g., `playwright.md`, `jest.md`)
3. **Data Access Layer**: `lib/tools.ts` provides utility functions to read and process tool data
4. **Static Generation**: All pages are statically generated at build time using Next.js App Router

### Key Data Structures

**Tool Interface** (`lib/tools.ts`):
```typescript
interface Tool {
  slug: string;              // URL-friendly identifier
  title: string;             // Display name
  logo: string | null;       // Path to logo image
  description: string;       // Short description for cards
  affiliateLink: string;     // External website URL
  pricing: 'free' | 'paid' | 'freemium';
  tags: string[];           // Categories (automation, api-testing, etc.)
  content: string;          // Markdown filename or HTML content
}
```

### Page Structure

- **Home (`app/page.tsx`)**: Redirects to `/tools`
- **Tools List (`app/tools/page.tsx`)**: Grid view of all tools with sidebar navigation
- **Tool Detail (`app/tools/[slug]/page.tsx`)**: Individual tool page with full content
  - Uses `generateStaticParams()` for static generation
  - Uses `generateMetadata()` for SEO optimization
  - Markdown content is converted to HTML using remark

### Component Organization

- **Header** (`components/Header.tsx`): Global navigation bar
- **Sidebar** (`components/Sidebar.tsx`): Left sidebar for filtering/navigation
- **ToolCard** (`components/ToolCard.tsx`): Reusable card component for tool grid display

### Styling System

- **Tailwind CSS**: Utility-first CSS framework
- **CSS Variables**: Theme colors defined using HSL values in `app/globals.css`
- **Dark Mode**: Supported via `class` strategy in `tailwind.config.ts`
- **Typography Plugin**: `@tailwindcss/typography` for prose content styling

## Adding New Tools

To add a new tool to the directory:

1. Add tool metadata to `data/tools.json`:
```json
{
  "slug": "tool-name",
  "title": "Tool Name",
  "logo": "/images/tools/tool-name.png",
  "description": "Short description",
  "affiliateLink": "https://example.com",
  "pricing": "free",
  "tags": ["automation", "ui-testing"],
  "content": "tool-name.md"
}
```

2. Create Markdown content file at `data/content/tool-name.md`
3. Add logo image to `public/images/tools/`

## Important Technical Details

### Image Handling

- Next.js Image component is configured to allow all remote image hosts (`next.config.ts`)
- Logo images should be placed in `public/images/tools/`
- Images are optimized automatically by Next.js

### Markdown Processing

- Uses `remark` and `remark-html` to convert Markdown to HTML
- Content is processed server-side in `lib/tools.ts:getMarkdownContent()`
- HTML is rendered using `dangerouslySetInnerHTML` with Tailwind typography classes

### Static Generation

- All tool pages are pre-rendered at build time
- `generateStaticParams()` creates routes for all tools in `data/tools.json`
- Changes to tool data require a rebuild to take effect

### Available Tags

Current tag options: `automation`, `api-testing`, `ui-testing`, `e2e-testing`, `unit-testing`, `browser-automation`, `performance`, `load-testing`

## File Path Requirements

**CRITICAL**: When using Edit or Write tools on Windows, file paths MUST use backslashes (`\`), not forward slashes (`/`).

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom theme
- **UI Components**: Custom components with `lucide-react` icons
- **Utilities**: `clsx`, `tailwind-merge`, `class-variance-authority`
- **Content Processing**: `remark`, `remark-html`
