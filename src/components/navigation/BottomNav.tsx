import { Home, BarChart3, User } from 'lucide-react';
import { cn } from '@/lib/utils';

type TabId = 'home' | 'insights' | 'profile';

interface BottomNavProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
  onProfileClick?: () => void;
}

const navItems = [
  { id: 'home' as const, label: 'Home', icon: Home },
  { id: 'insights' as const, label: 'Insights', icon: BarChart3 },
  { id: 'profile' as const, label: 'Profile', icon: User },
];

/**
 * Floating bottom navigation with frosted glass effect
 */
export function BottomNav({ activeTab, onTabChange, onProfileClick }: BottomNavProps) {
  const handleClick = (itemId: TabId) => {
    if (itemId === 'profile' && onProfileClick) {
      onProfileClick();
    } else {
      onTabChange(itemId);
    }
  };

  return (
    <nav className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-md">
      <div className="glass-nav rounded-3xl shadow-float safe-area-pb">
        <div className="flex items-center justify-around h-16 px-4">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 flex-1 h-full",
                  "transition-all duration-300 focus:outline-none",
                  "active:scale-95 transform relative"
                )}
                aria-label={item.label}
                aria-current={isActive ? 'page' : undefined}
              >
                <div
                  className={cn(
                    "flex items-center justify-center h-10 w-10 rounded-2xl transition-all duration-300",
                    isActive && "bg-accent shadow-lg shadow-accent/30"
                  )}
                >
                  <Icon 
                    className={cn(
                      "h-5 w-5 transition-colors duration-300",
                      isActive ? "text-accent-foreground" : "text-muted-foreground"
                    )} 
                  />
                </div>
                <span 
                  className={cn(
                    "text-[10px] font-medium transition-colors duration-300",
                    isActive ? "text-accent" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export type { TabId };