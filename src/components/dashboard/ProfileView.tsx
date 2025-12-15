import { Building2, MapPin, CreditCard, Settings, LogOut, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { HotelProfile } from '@/types/dashboard';
import { cn } from '@/lib/utils';

interface ProfileViewProps {
  hotel: HotelProfile;
}

const planBadgeStyles = {
  starter: 'bg-secondary text-secondary-foreground',
  professional: 'bg-accent text-accent-foreground',
  enterprise: 'bg-primary text-primary-foreground',
};

/**
 * Profile tab view - Hotel settings and account info
 */
export function ProfileView({ hotel }: ProfileViewProps) {
  const menuItems = [
    { icon: Building2, label: 'Hotel Details', action: () => {} },
    { icon: CreditCard, label: 'Billing & Plan', action: () => {} },
    { icon: Settings, label: 'Settings', action: () => {} },
  ];

  return (
    <div className="px-4 py-6 pb-24 animate-fade-in">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Hotel Card */}
        <Card className="rounded-2xl shadow-card border border-border overflow-hidden">
          <div className="h-16 bg-gradient-to-r from-primary to-primary/80" />
          <CardContent className="p-4 pt-0">
            <div className="flex items-start gap-4 -mt-6">
              <div className="h-16 w-16 rounded-2xl bg-card border-4 border-card shadow-elevated flex items-center justify-center">
                <Building2 className="h-7 w-7 text-primary" />
              </div>
              <div className="pt-8 flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-foreground">
                    {hotel.name}
                  </h2>
                  <span 
                    className={cn(
                      "text-[10px] font-semibold uppercase tracking-wide px-2 py-1 rounded-md",
                      planBadgeStyles[hotel.plan]
                    )}
                  >
                    {hotel.plan}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground mt-0.5">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{hotel.location}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Menu Items */}
        <Card className="rounded-2xl shadow-card border border-border">
          <CardContent className="p-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.label}>
                  <Button
                    variant="ghost"
                    className="w-full justify-between h-12 px-3 rounded-xl hover:bg-secondary"
                    onClick={item.action}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm font-medium text-foreground">
                        {item.label}
                      </span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </Button>
                  {index < menuItems.length - 1 && (
                    <Separator className="mx-3 my-1" />
                  )}
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Logout */}
        <Button
          variant="ghost"
          className="w-full h-12 text-destructive hover:text-destructive hover:bg-destructive/10 rounded-xl"
        >
          <LogOut className="h-5 w-5 mr-2" />
          Sign Out
        </Button>
      </div>
    </div>
  );
}
