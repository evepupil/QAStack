# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

QAStack is a modern software testing tools directory built with Next.js 15 (App Router) and TypeScript. It serves as an SEO-optimized directory site for discovering software testing tools, featuring internationalization (English/Chinese), blog functionality, and a three-tier category system.

## Key Commands

### Development
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build for production (static export to `.next` folder)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Cloudflare Pages Deployment
- `npm run pages:build` - Build for Cloudflare Pages using OpenNext
- `npm run pages:deploy` - Build and deploy to Cloudflare Pages
- `npm run pages:dev` - Build and preview Cloudflare Pages locally

## Architecture & Data Flow

### Core Structure
- **App Router**: Next.js 15 App Router in `/app/[locale]/` with dynamic locale routing
- **Data Layer**: JSON-based content system in `/data/` (no CMS database)
- **Static Generation**: All pages pre-rendered at build time for SEO
- **Internationalization**: Dual-language support (en/zh) via route parameters

### Data Organization
```
data/
├── tools/           # Tool metadata (en.json, zh.json)
├── blogs/           # Blog post metadata (en.json, zh.json)
├── categories/      # Three-tier category structure (en.json, zh.json)
└── content/         # Markdown content for tools
    ├── en/
    └── zh/
```

### Key Components

#### Tool System (`lib/tools.ts`)
- **Tool Interface**: Contains slug, title, logo, description, affiliateLink, pricing, category, tags, content
- **Category Tiers**: Three-tier structure (Full-Stack Testing, DevOps & Management, Utilities)
- **Filtering**: Functions for filtering by tag, pricing, and category
- **Content Loading**: Markdown content converted to HTML via remark

#### Blog System (`lib/blogs.ts`)
- **BlogPost Interface**: Contains slug, title, excerpt, coverImage, date, category, content
- **Markdown Support**: Blog content stored as markdown files in `/data/blog/[locale]/`
- **Latest Posts**: Utility to fetch recent blog entries

#### Internationalization (`lib/i18n.ts`, `lib/translations.ts`)
- **Locales**: `en` (English) and `zh` (Chinese)
- **Route Structure**: `/{locale}/tools/{slug}`, `/{locale}/blog/{slug}`
- **Translations**: Centralized translation object for UI text

### Page Structure

#### Home Page (`/app/[locale]/page.tsx`)
- Hero section
- Latest tools grid (9 tools)
- Latest blog posts section
- Footer

#### Tools Directory (`/app/[locale]/tools/page.tsx`)
- Sidebar with category navigation
- Search bar (UI only, no functionality)
- Grid of all tools
- Tool count display

#### Tool Detail (`/app/[locale]/tools/[slug]/page.tsx`)
- Tool metadata display (logo, title, description, pricing)
- Tags display
- Markdown content rendered as HTML
- Related tools by category
- Dynamic route generation via `generateStaticParams`

#### Blog Pages
- Blog listing and detail pages in `/app/[locale]/blog/`

### Component Library

#### Core Components
- **ToolCard.tsx**: Reusable card component for tool display
- **BlogCard.tsx**: Card component for blog posts
- **Sidebar.tsx**: Category navigation with three-tier structure
- **Header.tsx**: Navigation with locale switcher
- **Hero.tsx**: Landing page hero section
- **Footer.tsx**: Site footer
- **ThemeProvider.tsx**: Dark/light theme support

### Styling & UI
- **Tailwind CSS**: Utility-first styling
- **Shadcn UI**: Component library (via Tailwind)
- **Lucide React**: Icon library
- **Theme Support**: Dark/light mode with `next-themes`

### Deployment Configuration

#### Next.js Config (`next.config.ts`)
- `output: 'export'` - Static site generation
- `images.unoptimized: true` - Required for static export

#### OpenNext Config (`open-next.config.ts`)
- Cloudflare Pages deployment configuration
- Edge runtime for middleware
- External node:crypto for edge compatibility

#### Wrangler Config (`wrangler.toml`)
- Cloudflare Pages deployment settings
- Observability enabled
- Output directory: `out`

## Development Workflow

### Adding New Tools
1. Add tool entry to `data/tools/[locale].json`
2. Create markdown content in `data/content/[locale]/[slug].md` (optional)
3. Add category if needed in `data/categories/[locale].json`
4. Run `npm run build` to regenerate static pages

### Adding Blog Posts
1. Add post metadata to `data/blogs/[locale].json`
2. Create markdown content in `data/blog/[locale]/[slug].md`
3. Run `npm run build` to regenerate static pages

### Modifying Categories
1. Edit `data/categories/[locale].json`
2. Categories are organized in three tiers:
   - Tier 1: Full-Stack Testing (Web Automation, Mobile Testing, API Testing, Performance, Network Proxy, Security)
   - Tier 2: DevOps & Management (CI/CD, Test Management, Mock Data, Accessibility)
   - Tier 3: Utilities (Cloud Testing, Visual Testing, Exploratory, IDE & Editors)

## Important Notes

### Static Generation
- All pages are pre-rendered at build time
- Dynamic routes use `generateStaticParams` for SSG
- No runtime data fetching from databases
- Content changes require rebuild and redeploy

### Image Optimization
- External images used for tool logos (no local image optimization)
- `next/image` with `unoptimized: true` for static export

### TypeScript Configuration
- Strict mode enabled
- Path aliases configured: `@/*` maps to project root
- Incremental compilation enabled

### Environment
- Node.js 18+ required
- Uses npm package manager (v10.9.2)
- No environment variables required for basic operation

### Content Management
- No Keystatic CMS (mentioned in README but not implemented)
- Manual JSON file editing for content management
- Markdown files for detailed content

## Testing Strategy
- No test framework currently configured
- Manual testing via `npm run dev`
- Build verification via `npm run build`

## Common Issues & Solutions

### Build Failures
- Check for malformed JSON in data files
- Verify all referenced markdown files exist
- Ensure TypeScript types are correct

### Deployment Issues
- Cloudflare Pages requires `out` directory (configured in wrangler.toml)
- Static export must complete successfully
- Check OpenNext configuration for edge runtime compatibility