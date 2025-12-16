import { TrendingUp, Users, Clock, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatItem {
  label: string;
  value: string;
  change?: number;
  icon: typeof TrendingUp;
}

const stats: StatItem[] = [
  { label: 'Active Now', value: '23', change: 5, icon: Users },
  { label: 'Avg. Session', value: '4m 32s', icon: Clock },
  { label: 'Peak Hour', value: '7 PM', icon: Zap },
];

/**
 * Live stats sidebar card with glassmorphism
 */
export function LiveStatsCard() {
  return (
    <div className="glass rounded-2xl p-5 animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-2 w-2 rounded-full bg-success animate-pulse-soft" />
        <h3 className="text-sm font-semibold text-foreground">Live Stats</h3>
      </div>

      <div className="space-y-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div 
              key={stat.label}
              className="flex items-center justify-between animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-secondary/80 flex items-center justify-center">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base font-semibold text-foreground">{stat.value}</span>
                {stat.change && (
                  <span className="flex items-center text-xs text-success font-medium">
                    <TrendingUp className="h-3 w-3 mr-0.5" />
                    {stat.change}%
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Mini Chart Placeholder */}
      <div className="mt-5 pt-4 border-t border-border/50">
        <div className="flex items-end justify-between gap-1 h-12">
          {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-accent/20 transition-all duration-300 hover:bg-accent/40"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
        <p className="text-xs text-muted-foreground text-center mt-2">Last 7 days activity</p>
      </div>
    </div>
  );
}