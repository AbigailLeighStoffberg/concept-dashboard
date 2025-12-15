import { BarChart3, TrendingUp, Clock, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

/**
 * Insights tab view - Analytics deep dive
 */
export function InsightsView() {
  const stats = [
    { label: 'Avg. Session', value: '4m 32s', icon: Clock },
    { label: 'Conversion Rate', value: '23%', icon: Target },
    { label: 'Peak Hour', value: '7 PM', icon: TrendingUp },
    { label: 'Top Category', value: 'Dining', icon: BarChart3 },
  ];

  return (
    <div className="px-4 py-6 pb-24 animate-fade-in">
      <div className="max-w-2xl mx-auto space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-1">
            Analytics Overview
          </h2>
          <p className="text-sm text-muted-foreground">
            Deep dive into your Q-Pass performance
          </p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={stat.label} 
                className="rounded-2xl shadow-card border border-border animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-foreground">
                        {stat.value}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Coming Soon */}
        <Card className="rounded-2xl shadow-card border border-dashed border-border">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-base text-muted-foreground">
              Advanced Analytics Coming Soon
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center pb-6">
            <p className="text-sm text-muted-foreground">
              Heatmaps, cohort analysis, and predictive insights
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
