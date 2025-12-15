import { Home, BarChart3, User } from 'lucide-react';
import { cn } from '@/lib/utils';

type TabId = 'home' | 'insights' | 'profile';

interface BottomNavProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

const navItems = [
  { id: 'home' as const, label: 'Home', icon: Home },
  { id: 'insights' as const, label: 'Insights', icon: BarChart3 },
  { id: 'profile' as const, label: 'Profile', icon: User },
];

/**
 * Mobile bottom navigation bar
 */
export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-t border-border safe-area-pb">
      <div className="flex items-center justify-around max-w-2xl mx-auto h-16 px-4">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                "flex flex-col items-center justify-center gap-1 flex-1 h-full",
                "transition-colors duration-200 focus:outline-none",
                "active:scale-95 transform"
              )}
              aria-label={item.label}
              aria-current={isActive ? 'page' : undefined}
            >
              <div
                className={cn(
                  "flex items-center justify-center h-8 w-8 rounded-xl transition-all duration-200",
                  isActive && "bg-accent/15"
                )}
              >
                <Icon 
                  className={cn(
                    "h-5 w-5 transition-colors duration-200",
                    isActive ? "text-accent" : "text-muted-foreground"
                  )} 
                />
              </div>
              <span 
                className={cn(
                  "text-[10px] font-medium transition-colors duration-200",
                  isActive ? "text-accent" : "text-muted-foreground"
                )}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export type { TabId };
