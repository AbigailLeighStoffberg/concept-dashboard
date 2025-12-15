import { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';

export type CategoryColorScheme = 'peach' | 'mint' | 'blue' | 'pink';

interface CategoryCardProps {
  id: string;
  title: string;
  icon: LucideIcon;
  colorScheme: CategoryColorScheme;
  isActive: boolean;
  onToggle: (id: string, active: boolean) => void;
}

const colorClasses: Record<CategoryColorScheme, { bg: string; iconColor: string }> = {
  peach: {
    bg: 'bg-category-peach',
    iconColor: 'text-category-peach-icon',
  },
  mint: {
    bg: 'bg-category-mint',
    iconColor: 'text-category-mint-icon',
  },
  blue: {
    bg: 'bg-category-blue',
    iconColor: 'text-category-blue-icon',
  },
  pink: {
    bg: 'bg-category-pink',
    iconColor: 'text-category-pink-icon',
  },
};

/**
 * Reusable category card component for recommendations grid
 */
export function CategoryCard({ 
  id, 
  title, 
  icon: Icon, 
  colorScheme, 
  isActive, 
  onToggle 
}: CategoryCardProps) {
  const colors = colorClasses[colorScheme];

  return (
    <Card
      className={cn(
        "p-4 rounded-2xl border-0 shadow-card transition-all duration-200",
        "hover:shadow-elevated",
        colors.bg,
        !isActive && "opacity-60"
      )}
    >
      <div className="flex flex-col gap-3">
        {/* Icon */}
        <div className="flex items-center justify-between">
          <div className={cn("h-10 w-10 rounded-xl flex items-center justify-center bg-white/50")}>
            <Icon className={cn("h-5 w-5", colors.iconColor)} />
          </div>
          <Switch 
            checked={isActive}
            onCheckedChange={(checked) => onToggle(id, checked)}
            className="data-[state=checked]:bg-accent"
          />
        </div>

        {/* Title */}
        <h3 className="text-sm font-medium text-foreground">
          {title}
        </h3>
      </div>
    </Card>
  );
}
