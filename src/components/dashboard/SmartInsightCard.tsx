import { Sparkles, ChevronRight, Lightbulb, TrendingUp, AlertCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SmartInsight } from '@/types/dashboard';
import { cn } from '@/lib/utils';

interface SmartInsightCardProps {
  insight: SmartInsight;
  onAction?: (insightId: string) => void;
}

const typeIconMap = {
  recommendation: Lightbulb,
  trend: TrendingUp,
  alert: AlertCircle,
};

const priorityStyles = {
  high: 'border-accent/30 bg-accent/5',
  medium: 'border-warning/30 bg-warning/5',
  low: 'border-border bg-card',
};

/**
 * AI-powered smart insight card
 */
export function SmartInsightCard({ insight, onAction }: SmartInsightCardProps) {
  const TypeIcon = typeIconMap[insight.type];

  return (
    <Card 
      className={cn(
        "p-4 rounded-2xl shadow-card border-2 transition-all duration-200",
        "hover:shadow-elevated animate-slide-up",
        priorityStyles[insight.priority]
      )}
      style={{ animationDelay: '200ms' }}
    >
      {/* Header with AI badge */}
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0">
          <Sparkles className="h-5 w-5 text-accent" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-semibold text-accent uppercase tracking-wider">
              AI Insight
            </span>
            <TypeIcon className="h-3 w-3 text-muted-foreground" />
          </div>
          
          <h3 className="text-sm font-semibold text-foreground mb-1">
            {insight.title}
          </h3>
          
          <p className="text-sm text-muted-foreground leading-relaxed">
            {insight.description}
          </p>
        </div>
      </div>

      {/* Action Button */}
      {insight.actionLabel && (
        <Button
          variant="ghost"
          className="w-full mt-4 justify-between text-accent hover:text-accent hover:bg-accent/10 font-medium h-11 rounded-xl"
          onClick={() => onAction?.(insight.id)}
        >
          {insight.actionLabel}
          <ChevronRight className="h-4 w-4" />
        </Button>
      )}
    </Card>
  );
}
