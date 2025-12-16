import { useState } from 'react';
import { HeroHeader } from '@/components/dashboard/HeroHeader';
import { PulseSection } from '@/components/dashboard/PulseSection';
import { ActivityChart } from '@/components/dashboard/ActivityChart';
import { SmartInsightCard } from '@/components/dashboard/SmartInsightCard';
import { RecommendationsSection } from '@/components/dashboard/RecommendationsSection';
import { LiveStatsCard } from '@/components/dashboard/LiveStatsCard';
import { AIChatPanel } from '@/components/dashboard/AIChatPanel';
import { ProfileView } from '@/components/dashboard/ProfileView';
import { BottomNav, TabId } from '@/components/navigation/BottomNav';
import { SettingsDrawer } from '@/components/navigation/SettingsDrawer';
import { AIChatBubble } from '@/components/navigation/AIChatBubble';
import { 
  mockHotel, 
  mockPulseMetrics, 
  mockActivityData, 
  mockInsights 
} from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';

/**
 * Q-Insight Dashboard - Premium Mobile-First Analytics
 */
const Index = () => {
  const [activeTab, setActiveTab] = useState<TabId>('home');
  const [settingsOpen, setSettingsOpen] = useState(false);
  const { toast } = useToast();

  const handleInsightAction = (insightId: string) => {
    toast({
      title: 'Coming Soon',
      description: 'This feature will be available in the next update.',
    });
  };

  const handleChatBubbleClick = () => {
    setActiveTab('insights');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Premium Hero Header */}
      <HeroHeader 
        hotelName={mockHotel.name} 
        notificationCount={2} 
      />

      {/* Main Content Area */}
      <main className="pb-24">
        {activeTab === 'home' && (
          <div className="premium-container py-6">
            {/* Desktop: Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content Column */}
              <div className="lg:col-span-2 space-y-6">
                {/* Key Metrics */}
                <PulseSection metrics={mockPulseMetrics} />

                {/* Activity Chart */}
                <ActivityChart data={mockActivityData} />

                {/* Smart Insights */}
                <section>
                  <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
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

              {/* Sidebar Column - Desktop Only */}
              <div className="hidden lg:block space-y-6">
                <LiveStatsCard />
                <RecommendationsSection />
              </div>
            </div>

            {/* Recommendations Grid - Mobile Only */}
            <div className="lg:hidden mt-6">
              <RecommendationsSection />
            </div>
          </div>
        )}

        {/* AI Insights Tab */}
        {activeTab === 'insights' && (
          <div className="premium-container py-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[calc(100vh-220px)]">
              {/* Stats Overview - Desktop */}
              <div className="hidden lg:block space-y-6">
                <LiveStatsCard />
                <div className="glass rounded-2xl p-5">
                  <h3 className="text-sm font-semibold text-foreground mb-4">Quick Actions</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Ask about guest trends</p>
                    <p>• Generate reports</p>
                    <p>• Get partner recommendations</p>
                  </div>
                </div>
              </div>
              
              {/* AI Chat Panel */}
              <AIChatPanel className="h-[calc(100vh-220px)] lg:h-auto" />
            </div>
          </div>
        )}
        
        {activeTab === 'profile' && <ProfileView hotel={mockHotel} />}
      </main>

      {/* AI Chat Bubble - Only show on home tab */}
      {activeTab === 'home' && (
        <AIChatBubble onClick={handleChatBubbleClick} />
      )}

      {/* Bottom Navigation */}
      <BottomNav 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        onProfileClick={() => setSettingsOpen(true)}
      />

      {/* Settings Drawer */}
      <SettingsDrawer open={settingsOpen} onOpenChange={setSettingsOpen} />
    </div>
  );
};

export default Index;
