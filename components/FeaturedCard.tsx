import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

/**
 * 特色广告卡片组件
 * 显示 TestDevJobs 招聘广告
 */
export function FeaturedCard() {
  return (
    <Link
      href="https://testdevjobs.com"
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg border bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 p-6 transition-all hover:shadow-lg"
    >
      {/* Featured 标签 */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-black dark:bg-white flex items-center justify-center">
            <span className="text-white dark:text-black font-bold text-sm">TD</span>
          </div>
          <span className="font-semibold text-foreground">TestDevJobs</span>
        </div>
        <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-white dark:bg-blue-950 px-2 py-1 rounded">
          Featured
        </span>
      </div>

      {/* 描述文字 */}
      <p className="text-sm text-foreground mb-4">
        Find your next QA role, framework-specific jobs, location-wise or remote jobs.{' '}
        <span className="font-semibold">for Free!</span>
      </p>

      {/* 链接按钮 */}
      <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-medium">
        <span>Visit TestDevJobs</span>
        <ExternalLink className="h-4 w-4" />
      </div>
    </Link>
  );
}
