import { useState } from 'react';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { PulseSection } from '@/components/dashboard/PulseSection';
import { ActivityChart } from '@/components/dashboard/ActivityChart';
import { SmartInsightCard } from '@/components/dashboard/SmartInsightCard';
import { InsightsView } from '@/components/dashboard/InsightsView';
import { ProfileView } from '@/components/dashboard/ProfileView';
import { BottomNav, TabId } from '@/components/navigation/BottomNav';
import { 
  mockHotel, 
  mockPulseMetrics, 
  mockActivityData, 
  mockInsights 
} from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';

/**
 * Q-Insight Dashboard - Main entry point
 * Mobile-first analytics dashboard for hoteliers
 */
const Index = () => {
  const [activeTab, setActiveTab] = useState<TabId>('home');
  const { toast } = useToast();

  const handleInsightAction = (insightId: string) => {
    toast({
      title: 'Coming Soon',
      description: 'This feature will be available in the next update.',
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header - Always visible */}
      <DashboardHeader 
        hotelName={mockHotel.name} 
        notificationCount={2} 
      />

      {/* Main Content Area */}
      <main className="pb-20">
        {activeTab === 'home' && (
          <div className="space-y-6">
            {/* Pulse Metrics */}
            <PulseSection metrics={mockPulseMetrics} />

            {/* Activity Chart */}
            <ActivityChart data={mockActivityData} />

            {/* Smart Insights */}
            <section className="py-2">
              <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide px-4 mb-3 max-w-2xl mx-auto">
                Smart Suggestions
              </h2>
              <div className="space-y-3">
                {mockInsights.map((insight) => (
                  <SmartInsightCard
                    key={insight.id}
                    insight={insight}
                    onAction={handleInsightAction}
                  />
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'insights' && <InsightsView />}
        
        {activeTab === 'profile' && <ProfileView hotel={mockHotel} />}
      </main>

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
