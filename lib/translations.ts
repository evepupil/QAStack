import { Locale } from './i18n';

export const translations = {
  en: {
    nav: {
      tools: 'Tools',
      blog: 'Blog',
      about: 'About',
    },
    home: {
      latestAdditions: 'Latest Additions',
      browseAllTools: 'Browse All Tools',
      latestBlogPosts: 'Our latest blog posts',
    },
    tools: {
      title: 'Testing Tools Directory',
      description: 'Discover the best software testing tools for your needs',
      backToTools: 'Back to all tools',
      visitWebsite: 'Visit Website',
      free: 'Free',
      paid: 'Paid',
      freemium: 'Freemium',
    },
    search: {
      placeholder: 'Search tools...',
      noResults: 'No tools found for',
      tryDifferent: 'Try different keywords or browse',
      allTools: 'all tools',
      navigate: 'Navigate',
      select: 'Select',
      close: 'Close',
      openSearch: 'Search',
    },
    blog: {
      title: 'Blog',
      description: 'Latest articles and insights about software testing',
      backToBlog: 'Back to all posts',
    },
  },
  zh: {
    nav: {
      tools: '工具',
      blog: '博客',
      about: '关于',
    },
    home: {
      latestAdditions: '最新添加',
      browseAllTools: '浏览所有工具',
      latestBlogPosts: '最新博客文章',
    },
    tools: {
      title: '测试工具目录',
      description: '发现最适合您需求的软件测试工具',
      backToTools: '返回所有工具',
      visitWebsite: '访问网站',
      free: '免费',
      paid: '付费',
      freemium: '免费增值',
    },
    search: {
      placeholder: '搜索工具...',
      noResults: '未找到工具',
      tryDifferent: '尝试其他关键词或浏览',
      allTools: '所有工具',
      navigate: '导航',
      select: '选择',
      close: '关闭',
      openSearch: '搜索',
    },
    blog: {
      title: '博客',
      description: '关于软件测试的最新文章和见解',
      backToBlog: '返回所有文章',
    },
  },
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.en;
}
