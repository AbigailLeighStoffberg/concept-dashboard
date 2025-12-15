import { PulseCard } from './PulseCard';
import { PulseMetric } from '@/types/dashboard';
interface PulseSectionProps {
  metrics: PulseMetric[];
}

/**
 * Horizontal scrolling section for pulse metric cards
 */
export function PulseSection({
  metrics
}: PulseSectionProps) {
  return <section className="px-4 py-4">
      <div className="flex items-center justify-between mb-3 max-w-2xl mx-auto">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Q-INSIGHT</h2>
        <span className="text-xs text-muted-foreground">
          Last 7 days
        </span>
      </div>
      
      {/* Horizontal scroll container */}
      <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
        <div className="flex gap-3 pb-2 max-w-2xl mx-auto">
          {metrics.map((metric, index) => <PulseCard key={metric.id} metric={metric} index={index} />)}
        </div>
      </div>
    </section>;
}