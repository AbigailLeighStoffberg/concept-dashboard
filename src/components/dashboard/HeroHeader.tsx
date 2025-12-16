import { Bell, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getTimeGreeting } from '@/data/mockData';

interface HeroHeaderProps {
  hotelName: string;
  notificationCount?: number;
}

/**
 * Premium hero header with gradient background and hotel avatar
 */
export function HeroHeader({ 
  hotelName, 
  notificationCount = 0 
}: HeroHeaderProps) {
  const greeting = getTimeGreeting();
  const initials = hotelName.split(' ').map(w => w[0]).join('').slice(0, 2);

  return (
    <header className="relative overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700"
        style={{
          backgroundImage: 'linear-gradient(135deg, hsl(220 25% 12%) 0%, hsl(220 20% 20%) 50%, hsl(200 25% 25%) 100%)'
        }}
      />
      
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(186 100% 42% / 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, hsl(200 80% 50% / 0.2) 0%, transparent 50%)`
        }}
      />

      {/* Content */}
      <div className="relative premium-container py-6 lg:py-8">
        <div className="flex items-center justify-between">
          {/* Left: Avatar + Greeting */}
          <div className="flex items-center gap-4">
            <Avatar className="h-14 w-14 lg:h-16 lg:w-16 ring-2 ring-white/20 shadow-lg">
              <AvatarImage src="/hotel-avatar.png" alt={hotelName} />
              <AvatarFallback className="bg-gradient-to-br from-accent to-accent/80 text-white font-semibold text-lg">
                {initials}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex flex-col">
              <span className="text-sm text-white/70 font-medium">
                {greeting}
              </span>
              <h1 className="text-xl lg:text-2xl font-semibold text-white tracking-tight">
                {hotelName}
              </h1>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            {/* Q-Insight Badge */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              <span className="text-xs font-medium text-white/90">Q-Insight</span>
            </div>

            {/* Notification Bell */}
            <Button
              variant="ghost"
              size="icon"
              className="relative h-11 w-11 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 transition-all"
              aria-label={`Notifications ${notificationCount > 0 ? `(${notificationCount} new)` : ''}`}
            >
              <Bell className="h-5 w-5 text-white" />
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-semibold text-white">
                    {notificationCount > 9 ? '9+' : notificationCount}
                  </span>
                </span>
              )}
            </Button>
          </div>
        </div>

        {/* Quick Stats Bar */}
        <div className="mt-6 flex items-center gap-4 lg:gap-6">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-success animate-pulse-soft" />
            <span className="text-sm text-white/80">Live Dashboard</span>
          </div>
          <div className="h-4 w-px bg-white/20" />
          <span className="text-sm text-white/60">Updated just now</span>
        </div>
      </div>
    </header>
  );
}