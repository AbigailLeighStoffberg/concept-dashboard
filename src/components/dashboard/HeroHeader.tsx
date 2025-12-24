import { Bell, Sparkles, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getTimeGreeting } from '@/data/mockData';
import { UserRole } from '@/types/dashboard';
import { useNavigate } from 'react-router-dom';

interface HeroHeaderProps {
  name: string;
  role: UserRole;
  notificationCount?: number;
}

/**
 * Premium header with Lobbyly branding and glassmorphism
 */
export function HeroHeader({ 
  name, 
  role,
  notificationCount = 0 
}: HeroHeaderProps) {
  const navigate = useNavigate();
  const greeting = getTimeGreeting();
  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2);

  return (
    <header className="relative overflow-hidden">
      {/* Gradient Background with Aura */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-foreground/85" />
      
      {/* Aura blobs */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 50% 40% at 10% 20%, hsl(270 60% 70% / 0.4) 0%, transparent 50%),
            radial-gradient(ellipse 40% 35% at 90% 80%, hsl(210 70% 70% / 0.3) 0%, transparent 45%),
            radial-gradient(ellipse 45% 30% at 60% 10%, hsl(25 80% 75% / 0.25) 0%, transparent 40%)
          `
        }}
      />

      {/* Content */}
      <div className="relative premium-container py-6 lg:py-8">
        <div className="flex items-center justify-between">
          {/* Left: Logo + Greeting */}
          <div className="flex items-center gap-4">
            <Avatar className="h-14 w-14 lg:h-16 lg:w-16 ring-2 ring-primary-foreground/20 shadow-lg">
              <AvatarImage src="/avatar.png" alt={name} />
              <AvatarFallback className="bg-accent text-accent-foreground font-semibold text-lg">
                {initials}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex flex-col">
              <span className="text-sm text-primary-foreground/70 font-medium">
                {greeting}
              </span>
              <h1 className="text-xl lg:text-2xl font-semibold text-primary-foreground tracking-tight">
                {name}
              </h1>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            {/* Lobbyly Badge */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              <span className="text-xs font-medium text-primary-foreground/90 font-display">
                Lobbyly
              </span>
            </div>

            {/* Notification Bell */}
            <Button
              variant="ghost"
              size="icon"
              className="relative h-11 w-11 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/10 transition-all"
              aria-label={`Notifications ${notificationCount > 0 ? `(${notificationCount} new)` : ''}`}
            >
              <Bell className="h-5 w-5 text-primary-foreground" />
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-semibold text-accent-foreground">
                    {notificationCount > 9 ? '9+' : notificationCount}
                  </span>
                </span>
              )}
            </Button>

            {/* Logout */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/auth')}
              className="h-11 w-11 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/10 transition-all"
              aria-label="Sign out"
            >
              <LogOut className="h-5 w-5 text-primary-foreground" />
            </Button>
          </div>
        </div>

        {/* Quick Stats Bar */}
        <div className="mt-6 flex items-center gap-4 lg:gap-6">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-success animate-pulse-soft" />
            <span className="text-sm text-primary-foreground/80">
              {role === 'manager' ? 'Live Dashboard' : 'Affiliate Dashboard'}
            </span>
          </div>
          <div className="h-4 w-px bg-primary-foreground/20" />
          <span className="text-sm text-primary-foreground/60">Updated just now</span>
        </div>
      </div>
    </header>
  );
}