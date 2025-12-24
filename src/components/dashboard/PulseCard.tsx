import { Users, Euro, QrCode, TrendingUp, TrendingDown, Target, DollarSign, Shirt, Filter } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { PulseMetric } from '@/types/dashboard';
import { cn } from '@/lib/utils';

interface PulseCardProps {
  metric: PulseMetric;
  index?: number;
}

const iconMap = {
  users: Users,
  revenue: Euro,
  qr: QrCode,
  reach: Target,
  commission: DollarSign,
  merch: Shirt,
  funnel: Filter,
};

const colorSchemes = {
  users: { bg: 'bg-pulse-mint', iconBg: 'bg-pulse-mint-icon/15', iconColor: 'text-pulse-mint-icon' },
  revenue: { bg: 'bg-pulse-beige', iconBg: 'bg-pulse-beige-icon/15', iconColor: 'text-pulse-beige-icon' },
  qr: { bg: 'bg-pulse-lavender', iconBg: 'bg-pulse-lavender-icon/15', iconColor: 'text-pulse-lavender-icon' },
  reach: { bg: 'bg-category-blue', iconBg: 'bg-category-blue-icon/15', iconColor: 'text-category-blue-icon' },
  commission: { bg: 'bg-pulse-beige', iconBg: 'bg-pulse-beige-icon/15', iconColor: 'text-pulse-beige-icon' },
  merch: { bg: 'bg-category-pink', iconBg: 'bg-category-pink-icon/15', iconColor: 'text-category-pink-icon' },
  funnel: { bg: 'bg-pulse-lavender', iconBg: 'bg-pulse-lavender-icon/15', iconColor: 'text-pulse-lavender-icon' },
};

export function PulseCard({ metric, index = 0 }: PulseCardProps) {
  const Icon = iconMap[metric.icon];
  const colors = colorSchemes[metric.icon];
  const hasPositiveChange = metric.change && metric.change > 0;
  const hasNegativeChange = metric.change && metric.change < 0;

  return (
    <Card 
      className={cn(
        "min-w-[160px] flex-shrink-0 p-4",
        "rounded-3xl glass-card hover:shadow-float transition-all duration-300",
        "animate-fade-in",
        colors.bg
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className={cn("h-9 w-9 rounded-xl flex items-center justify-center", colors.iconBg)}>
          <Icon className={cn("h-4 w-4", colors.iconColor)} />
        </div>
        
        {metric.change !== undefined && (
          <div className={cn(
            "flex items-center gap-0.5 text-xs font-medium px-1.5 py-0.5 rounded-md",
            hasPositiveChange && "text-success bg-success/10",
            hasNegativeChange && "text-destructive bg-destructive/10"
          )}>
            {hasPositiveChange ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
            <span>{Math.abs(metric.change)}%</span>
          </div>
        )}
      </div>

      <p className="text-2xl font-semibold text-foreground tracking-tight">{metric.value}</p>
      <p className="text-sm text-muted-foreground mt-0.5">{metric.label}</p>
    </Card>
  );
}