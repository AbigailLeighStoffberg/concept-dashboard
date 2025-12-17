import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ActivityDataPoint } from '@/types/dashboard';

interface ActivityChartProps {
  data: ActivityDataPoint[];
}

/**
 * Custom tooltip for the activity chart
 */
function CustomTooltip({ 
  active, 
  payload, 
  label 
}: {
  active?: boolean;
  payload?: Array<{ value: number; dataKey: string }>;
  label?: string;
}) {
  if (!active || !payload) return null;

  return (
    <div className="bg-card border border-border rounded-lg shadow-elevated p-3">
      <p className="text-sm font-medium text-foreground mb-1">{label}</p>
      {payload.map((entry, index) => (
        <p 
          key={index} 
          className="text-xs text-muted-foreground"
        >
          {entry.dataKey === 'guests' ? 'Guests' : 'Scans'}: {' '}
          <span className="font-semibold text-foreground">{entry.value}</span>
        </p>
      ))}
    </div>
  );
}

/**
 * Line chart showing guest activity over time
 */
export function ActivityChart({ data }: ActivityChartProps) {
  return (
    <Card className="rounded-2xl shadow-card border border-border animate-slide-up">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold text-foreground">
            Guest Activity
          </CardTitle>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span className="text-xs text-muted-foreground">Guests</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-xs text-muted-foreground">Scans</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="h-48 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart 
              data={data} 
              margin={{ top: 8, right: 8, left: -20, bottom: 0 }}
            >
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="hsl(var(--border))" 
                vertical={false}
              />
              <XAxis 
                dataKey="date" 
                axisLine={false}
                tickLine={false}
                tick={{ 
                  fontSize: 11, 
                  fill: 'hsl(var(--muted-foreground))' 
                }}
                dy={8}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ 
                  fontSize: 11, 
                  fill: 'hsl(var(--muted-foreground))' 
                }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="guests"
                stroke="hsl(var(--accent))"
                strokeWidth={2.5}
                dot={false}
                activeDot={{ 
                  r: 4, 
                  fill: 'hsl(var(--accent))',
                  strokeWidth: 2,
                  stroke: 'hsl(var(--card))'
                }}
              />
              <Line
                type="monotone"
                dataKey="scans"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                strokeDasharray="4 4"
                dot={false}
                activeDot={{ 
                  r: 4, 
                  fill: 'hsl(var(--primary))',
                  strokeWidth: 2,
                  stroke: 'hsl(var(--card))'
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
