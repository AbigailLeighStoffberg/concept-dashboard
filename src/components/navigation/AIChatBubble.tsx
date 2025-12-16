import { MessageCircle, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AIChatBubbleProps {
  onClick: () => void;
  className?: string;
}

/**
 * Animated AI chat bubble that floats in the corner
 */
export function AIChatBubble({ onClick, className }: AIChatBubbleProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "fixed bottom-24 right-4 z-40 lg:bottom-6 lg:right-6",
        "flex items-center justify-center",
        "h-14 w-14 rounded-full",
        "bg-gradient-to-br from-accent to-accent/80",
        "shadow-lg shadow-accent/25",
        "transition-all duration-300 ease-out",
        "hover:scale-110 hover:shadow-xl hover:shadow-accent/30",
        "active:scale-95",
        "group",
        className
      )}
      aria-label="Open AI Assistant"
    >
      {/* Animated ring */}
      <span className="absolute inset-0 rounded-full bg-accent/30 animate-ping opacity-75" />
      
      {/* Pulsing glow */}
      <span 
        className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-accent/60 animate-pulse-soft"
        style={{ animationDuration: '2s' }}
      />
      
      {/* Icon container */}
      <span className="relative flex items-center justify-center">
        <MessageCircle className="h-6 w-6 text-white transition-transform group-hover:scale-0 group-hover:opacity-0 duration-200" />
        <Sparkles className="absolute h-6 w-6 text-white scale-0 opacity-0 transition-transform group-hover:scale-100 group-hover:opacity-100 duration-200" />
      </span>
      
      {/* Tooltip on hover */}
      <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-card/95 backdrop-blur-sm border border-border text-sm font-medium text-foreground whitespace-nowrap opacity-0 scale-95 transition-all group-hover:opacity-100 group-hover:scale-100 shadow-lg">
        Ask Q-Insight AI
      </span>
    </button>
  );
}
