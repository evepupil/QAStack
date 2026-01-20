import { Search } from 'lucide-react';

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
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search tools..."
              className="w-full rounded-lg border bg-background pl-12 pr-20 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <kbd className="absolute right-4 top-1/2 -translate-y-1/2 rounded border bg-muted px-2 py-1 text-xs text-muted-foreground font-mono">
              Ctrl + K
            </kbd>
          </div>
        </div>
      </div>
    </section>
  );
}
