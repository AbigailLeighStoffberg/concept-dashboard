import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getTimeGreeting } from '@/data/mockData';

interface DashboardHeaderProps {
  hotelName: string;
  notificationCount?: number;
}

/**
 * Dashboard header with greeting and notification bell
 */
export function DashboardHeader({ 
  hotelName, 
  notificationCount = 0 
}: DashboardHeaderProps) {
  const greeting = getTimeGreeting();

  return (
    <header className="sticky top-0 z-10 bg-card backdrop-blur-sm border-b border-border px-4 py-4">
      <div className="flex items-center justify-between max-w-2xl mx-auto">
        {/* Greeting Section */}
        <div className="flex flex-col">
          <span className="text-sm text-muted-foreground font-medium">
            {greeting}
          </span>
          <h1 className="text-lg font-semibold text-foreground tracking-tight">
            {hotelName}
          </h1>
        </div>

        {/* Notification Bell */}
        <Button
          variant="ghost"
          size="icon"
          className="relative h-10 w-10 rounded-xl hover:bg-secondary"
          aria-label={`Notifications ${notificationCount > 0 ? `(${notificationCount} new)` : ''}`}
        >
          <Bell className="h-5 w-5 text-foreground" />
          {notificationCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-semibold text-accent-foreground">
                {notificationCount > 9 ? '9+' : notificationCount}
              </span>
            </span>
          )}
        </Button>
      </div>
    </header>
  );
}
