'use client';

import { SearchTrigger } from './SearchTrigger';

/**
 * Hero 部分组件
 * 包含主标题、描述文字和搜索框
 */
export function Hero() {
  return (
    <section className="w-full px-8 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Hand-Picked Software<br />
            Testing Tools & Resources
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            QAStack is the curated collection of the best tools on the internet<br />
            to supercharge your testing.
          </p>

          {/* 搜索框 */}
          <SearchTrigger variant="hero" placeholder="Search tools..." />
        </div>
      </div>
    </section>
  );
}
