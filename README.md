# QAStack - Software Testing Tools Directory

A modern, SEO-optimized directory site for software testing tools built with Next.js 15, Keystatic CMS, and Shadcn UI.

## Features

- **Headless CMS**: Keystatic CMS for easy content management
- **Modern Stack**: Next.js 15 with App Router and TypeScript
- **Beautiful UI**: Shadcn UI components with Tailwind CSS
- **SEO Optimized**: Static generation for optimal performance
- **Type Safe**: Full TypeScript support
- **Responsive**: Mobile-first design

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **CMS**: Keystatic
- **Styling**: Tailwind CSS + Shadcn UI
- **Language**: TypeScript
- **Content**: MDX for rich content

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd QAStack
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Adding Content

1. Navigate to [http://localhost:3000/keystatic](http://localhost:3000/keystatic) to access the CMS admin panel

2. **Add a Tool**:
   - Click on "Tools" in the sidebar
   - Click "Create Tool"
   - Fill in the required fields:
     - Title: Name of the testing tool
     - Logo: Upload a logo image
     - Description: Short description (shown on cards)
     - Affiliate Link: URL to the tool's website
     - Pricing: Select Free, Paid, or Freemium
     - Tags: Select relevant tags
     - Content: Write detailed content in MDX format
   - Click "Save"

3. **Add a Category**:
   - Click on "Categories" in the sidebar
   - Click "Create Category"
   - Fill in the name and description
   - Click "Save"

## Project Structure

```
QAStack/
├── app/                      # Next.js App Router
│   ├── api/                  # API routes
│   │   └── keystatic/        # Keystatic API handlers
│   ├── keystatic/            # Keystatic admin UI
│   ├── tools/                # Tool detail pages
│   │   └── [slug]/           # Dynamic tool pages
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── components/               # React components
│   └── ToolCard.tsx          # Tool card component
├── lib/                      # Utility functions
│   ├── keystatic.ts          # Data fetching utilities
│   └── utils.ts              # Helper functions
├── content/                  # CMS content (git-ignored)
│   ├── tools/                # Tool entries
│   └── categories/           # Category entries
├── public/                   # Static assets
│   └── images/               # Uploaded images
├── keystatic.config.ts       # Keystatic configuration
├── tailwind.config.ts        # Tailwind configuration
└── tsconfig.json             # TypeScript configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Content Schema

### Tools Collection

- **title**: String (slug field)
- **logo**: Image
- **description**: Text (multiline)
- **affiliateLink**: URL
- **pricing**: Select (Free, Paid, Freemium)
- **tags**: Multiselect (Automation, API Testing, UI Testing, etc.)
- **content**: MDX (rich content)

### Categories Collection

- **name**: String (slug field)
- **description**: Text (multiline)

## Customization

### Adding New Tags

Edit `keystatic.config.ts` and add new options to the `tags` field:

```typescript
tags: fields.multiselect({
  label: 'Tags',
  options: [
    // Add your new tag here
    { label: 'Your Tag', value: 'your-tag' },
  ],
}),
```

### Styling

The project uses Tailwind CSS with Shadcn UI. Customize colors and themes in:
- `tailwind.config.ts` - Tailwind configuration
- `app/globals.css` - CSS variables and global styles

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy

### Other Platforms

Build the project:
```bash
npm run build
```

The output will be in the `.next` folder. Follow your hosting provider's Next.js deployment guide.

## SEO Optimization

- Static generation for all pages
- Metadata API for dynamic meta tags
- Semantic HTML structure
- Image optimization with Next.js Image component
- Fast page loads with automatic code splitting

## Future Enhancements

- Multi-language support (i18n)
- Search functionality
- Filter by tags and pricing
- User reviews and ratings
- Tool comparison feature
- RSS feed

## License

MIT

## Support

For issues and questions, please open an issue on GitHub.
