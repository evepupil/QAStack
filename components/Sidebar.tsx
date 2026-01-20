'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  Sparkles,
  Code,
  CheckSquare,
  MousePointer,
  Database,
  Monitor,
  Rocket,
  Mail,
  Search,
  FileCode,
  Gauge,
  Network,
  Shield,
  ListTodo,
  FileCheck,
  BarChart,
  Camera,
  Eye,
  Layers,
} from 'lucide-react';

const categories = [
  { name: 'All Tools', slug: 'all', icon: Sparkles },
  { name: 'AI Testing', slug: 'ai-testing', icon: Sparkles },
  { name: 'API Testing', slug: 'api-testing', icon: Code },
  { name: 'Accessibility Testing', slug: 'accessibility', icon: Eye },
  { name: 'Automated Checking', slug: 'automated-checking', icon: CheckSquare },
  { name: 'Browser Automation', slug: 'browser-automation', icon: MousePointer },
  { name: 'Data', slug: 'data', icon: Database },
  { name: 'Desktop Automation', slug: 'desktop-automation', icon: Monitor },
  { name: 'DevOps', slug: 'devops', icon: Rocket },
  { name: 'Email Testing', slug: 'email-testing', icon: Mail },
  { name: 'Exploratory Testing', slug: 'exploratory', icon: Search },
  { name: 'IDE', slug: 'ide', icon: FileCode },
  { name: 'Performance Testing', slug: 'performance', icon: Gauge },
  { name: 'Network', slug: 'network', icon: Network },
  { name: 'Security Testing', slug: 'security', icon: Shield },
  { name: 'Task Management', slug: 'task-management', icon: ListTodo },
  { name: 'Test Case Management', slug: 'test-case', icon: FileCheck },
  { name: 'Test Data Generation', slug: 'test-data', icon: BarChart },
  { name: 'Screen Capture', slug: 'screen-capture', icon: Camera },
  { name: 'Visual Modeling', slug: 'visual-modeling', icon: Layers },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 flex-shrink-0 border-r bg-muted/10">
      <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto py-6 px-4">
        <nav className="space-y-1">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = pathname === `/tools/${category.slug}` || (category.slug === 'all' && pathname === '/tools');

            return (
              <Link
                key={category.slug}
                href={category.slug === 'all' ? '/tools' : `/tools/${category.slug}`}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
                  isActive
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{category.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
