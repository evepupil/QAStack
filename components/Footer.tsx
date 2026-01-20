import Link from 'next/link';

/**
 * Footer 组件
 * 显示页脚信息，包括版权声明和制作信息
 */
export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="mx-auto max-w-7xl px-8 py-8">
        <div className="flex flex-col items-center justify-center gap-2 text-center text-sm text-muted-foreground">
          <p>© 2025, QAStack. All rights RESERVED</p>
          <p>
            Made with ❤️ by{' '}
            <span className="text-primary font-medium">
              YeTong
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
