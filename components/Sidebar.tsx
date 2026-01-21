'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  Sparkles,
  Code,
  MousePointer,
  Database,
  Rocket,
  Search,
  FileCode,
  Gauge,
  Network,
  Shield,
  FileCheck,
  Camera,
  Eye,
  Cloud,
  Smartphone,
} from 'lucide-react';
import { CategoryTier } from '@/lib/tools';
import { useParams } from 'next/navigation';

const iconMap: Record<string, any> = {
  Sparkles,
  Code,
  MousePointer,
  Database,
  Rocket,
  Search,
  FileCode,
  Gauge,
  Network,
  Shield,
  FileCheck,
  Camera,
  Eye,
  Cloud,
  Smartphone,
};

interface SidebarProps {
  categoryTiers: CategoryTier[];
}

export function Sidebar({ categoryTiers }: SidebarProps) {
  const pathname = usePathname();
  const params = useParams();
  const locale = (params?.locale as string) || 'en';

  return (
    <aside className="w-64 flex-shrink-0 border-r bg-muted/10">
      <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto py-6 px-4">
        <nav className="space-y-6">
          <Link
            href={`/${locale}/tools`}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
              pathname === `/${locale}/tools`
                ? 'bg-primary/10 text-primary font-medium'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            )}
          >
            <Sparkles className="h-4 w-4" />
            <span>All Tools</span>
          </Link>

          {categoryTiers.map((tier) => (
            <div key={tier.tier}>
              <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {tier.tierName}
              </h3>
              <div className="space-y-1">
                {tier.categories.map((category) => {
                  const Icon = iconMap[category.icon] || Code;
                  const isActive = pathname === `/${locale}/tools/${category.slug}`;

                  return (
                    <Link
                      key={category.slug}
                      href={`/${locale}/tools/${category.slug}`}
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
              </div>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
