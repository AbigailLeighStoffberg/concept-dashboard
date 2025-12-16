import { PulseCard } from './PulseCard';
import { PulseMetric } from '@/types/dashboard';
interface PulseSectionProps {
  metrics: PulseMetric[];
}

/**
 * Horizontal scrolling section for pulse metric cards
 */
export function PulseSection({ metrics }: PulseSectionProps) {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">
          Performance Pulse
        </h2>
        <span className="text-xs text-muted-foreground">Last 7 days</span>
      </div>
      
      {/* Responsive grid on desktop, scroll on mobile */}
      <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0 lg:overflow-visible">
        <div className="flex gap-3 pb-2 lg:grid lg:grid-cols-3 lg:gap-4">
          {metrics.map((metric, index) => (
            <PulseCard key={metric.id} metric={metric} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}