import { Building2, QrCode, LogOut, ChevronRight } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

interface SettingsDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const menuItems = [
  { id: 'hotel-details', label: 'Hotel Details', icon: Building2 },
  { id: 'qr-settings', label: 'QR Code Settings', icon: QrCode },
];

/**
 * Settings drawer accessible from profile navigation
 */
export function SettingsDrawer({ open, onOpenChange }: SettingsDrawerProps) {
  const { toast } = useToast();

  const handleMenuClick = (id: string) => {
    toast({
      title: 'Coming Soon',
      description: 'This feature will be available in the next update.',
    });
  };

  const handleSignOut = () => {
    toast({
      title: 'Signed Out',
      description: 'You have been signed out successfully.',
    });
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[300px] sm:w-[340px]">
        <SheetHeader>
          <SheetTitle className="text-left">Settings</SheetTitle>
        </SheetHeader>

        <div className="mt-6 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className="w-full flex items-center justify-between px-3 py-3 rounded-xl hover:bg-secondary transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </button>
            );
          })}
        </div>

        <Separator className="my-4" />

        <button
          onClick={handleSignOut}
          className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-destructive/10 transition-colors text-destructive"
        >
          <LogOut className="h-5 w-5" />
          <span className="text-sm font-medium">Sign Out</span>
        </button>
      </SheetContent>
    </Sheet>
  );
}
