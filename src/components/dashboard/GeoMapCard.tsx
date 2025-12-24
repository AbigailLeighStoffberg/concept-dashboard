import { useState, useEffect } from 'react';
import { MapPin, Wifi } from 'lucide-react';
import { cn } from '@/lib/utils';
import { GeoScanPoint } from '@/types/dashboard';

interface GeoMapCardProps {
  scans: GeoScanPoint[];
  className?: string;
}

const typeColors = {
  lobby: { bg: 'bg-aura-lavender', pulse: 'hsl(270 60% 70%)' },
  restaurant: { bg: 'bg-aura-peach', pulse: 'hsl(25 80% 70%)' },
  spa: { bg: 'bg-aura-mint', pulse: 'hsl(160 50% 65%)' },
  pool: { bg: 'bg-aura-blue', pulse: 'hsl(210 70% 70%)' },
  room: { bg: 'bg-pulse-lavender', pulse: 'hsl(270 50% 70%)' },
};

const typeLabels = {
  lobby: 'Lobby',
  restaurant: 'Restaurant',
  spa: 'Spa',
  pool: 'Pool',
  room: 'Room',
};

/**
 * Interactive glassmorphic map showing real-time QR scan locations
 */
export function GeoMapCard({ scans, className }: GeoMapCardProps) {
  const [activeScan, setActiveScan] = useState<string | null>(null);
  const [liveScans, setLiveScans] = useState(scans);

  // Simulate new scans appearing
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * liveScans.length);
      setLiveScans(prev => prev.map((scan, i) => 
        i === randomIndex 
          ? { ...scan, timestamp: new Date() }
          : scan
      ));
    }, 3000);

    return () => clearInterval(interval);
  }, [liveScans.length]);

  return (
    <div className={cn("glass-card p-5 overflow-hidden", className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-accent/15 flex items-center justify-center">
            <MapPin className="h-4 w-4 text-accent" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground font-display">Activity Map</h3>
            <p className="text-xs text-muted-foreground">Real-time scan locations</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-success/10">
          <Wifi className="h-3 w-3 text-success animate-pulse-soft" />
          <span className="text-xs font-medium text-success">Live</span>
        </div>
      </div>

      {/* Map Container */}
      <div className="relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-muted/50 to-secondary/30">
        {/* Stylized Map Background */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(hsl(var(--border)) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Aura Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 50% at 30% 40%, hsl(var(--aura-lavender) / 0.4) 0%, transparent 50%),
              radial-gradient(ellipse 50% 40% at 70% 60%, hsl(var(--aura-blue) / 0.3) 0%, transparent 45%),
              radial-gradient(ellipse 40% 35% at 50% 30%, hsl(var(--aura-peach) / 0.25) 0%, transparent 40%)
            `
          }}
        />

        {/* Property Outline */}
        <div className="absolute inset-8 border-2 border-dashed border-border/50 rounded-xl" />
        <div className="absolute top-10 left-10 text-[10px] font-medium text-muted-foreground/60 uppercase tracking-wider">
          Property Layout
        </div>

        {/* Scan Points */}
        {liveScans.map((scan, index) => {
          const colors = typeColors[scan.type];
          const positions = [
            { top: '25%', left: '20%' },
            { top: '45%', left: '65%' },
            { top: '65%', left: '30%' },
            { top: '35%', left: '75%' },
            { top: '55%', left: '45%' },
          ];
          const pos = positions[index % positions.length];

          return (
            <div
              key={scan.id}
              className="absolute cursor-pointer group"
              style={{ top: pos.top, left: pos.left }}
              onMouseEnter={() => setActiveScan(scan.id)}
              onMouseLeave={() => setActiveScan(null)}
            >
              {/* Outer Pulse Ring */}
              <div 
                className="absolute -inset-4 rounded-full animate-ping opacity-30"
                style={{ 
                  backgroundColor: colors.pulse,
                  animationDuration: '2s',
                  animationDelay: `${index * 0.3}s`
                }}
              />
              
              {/* Middle Glow Ring */}
              <div 
                className="absolute -inset-2 rounded-full animate-pulse-soft opacity-50"
                style={{ backgroundColor: colors.pulse }}
              />

              {/* Core Dot */}
              <div 
                className={cn(
                  "relative h-4 w-4 rounded-full shadow-lg transition-transform duration-300",
                  "group-hover:scale-150",
                  colors.bg
                )}
                style={{
                  boxShadow: `0 0 20px ${colors.pulse}`
                }}
              />

              {/* Tooltip */}
              {activeScan === scan.id && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg bg-card shadow-float border border-border/50 whitespace-nowrap animate-fade-in z-10">
                  <p className="text-xs font-semibold text-foreground">{typeLabels[scan.type]}</p>
                  <p className="text-[10px] text-muted-foreground">
                    {scan.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-3">
        {Object.entries(typeLabels).slice(0, 4).map(([type, label]) => (
          <div key={type} className="flex items-center gap-1.5">
            <div className={cn("h-2.5 w-2.5 rounded-full", typeColors[type as keyof typeof typeColors].bg)} />
            <span className="text-xs text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}