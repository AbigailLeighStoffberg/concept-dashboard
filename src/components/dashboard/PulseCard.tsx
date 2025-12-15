import { Users, Euro, QrCode, TrendingUp, TrendingDown } from 'lucide-react';
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
};

/**
 * Individual pulse metric card showing key KPIs
 */
export function PulseCard({ metric, index = 0 }: PulseCardProps) {
  const Icon = iconMap[metric.icon];
  const hasPositiveChange = metric.change && metric.change > 0;
  const hasNegativeChange = metric.change && metric.change < 0;

  return (
    <Card 
      className={cn(
        "min-w-[140px] flex-shrink-0 p-4 bg-card border border-border",
        "rounded-2xl shadow-card hover:shadow-elevated transition-shadow duration-200",
        "animate-fade-in"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div className="flex items-center justify-between mb-3">
        <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center">
          <Icon className="h-4 w-4 text-primary" />
        </div>
        
        {/* Change Indicator */}
        {metric.change !== undefined && (
          <div 
            className={cn(
              "flex items-center gap-0.5 text-xs font-medium px-1.5 py-0.5 rounded-md",
              hasPositiveChange && "text-success bg-success/10",
              hasNegativeChange && "text-destructive bg-destructive/10"
            )}
          >
            {hasPositiveChange ? (
              <TrendingUp className="h-3 w-3" />
            ) : (
              <TrendingDown className="h-3 w-3" />
            )}
            <span>{Math.abs(metric.change)}%</span>
          </div>
        )}
      </div>

      {/* Value */}
      <p className="text-2xl font-semibold text-foreground tracking-tight">
        {metric.value}
      </p>

      {/* Label */}
      <p className="text-sm text-muted-foreground mt-0.5">
        {metric.label}
      </p>
    </Card>
  );
}
