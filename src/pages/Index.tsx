import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HeroHeader } from '@/components/dashboard/HeroHeader';
import { PulseSection } from '@/components/dashboard/PulseSection';
import { ActivityChart } from '@/components/dashboard/ActivityChart';
import { SmartInsightCard } from '@/components/dashboard/SmartInsightCard';
import { LiveStatsCard } from '@/components/dashboard/LiveStatsCard';
import { GeoMapCard } from '@/components/dashboard/GeoMapCard';
import { AIChatPanel } from '@/components/dashboard/AIChatPanel';
import { ProfileView } from '@/components/dashboard/ProfileView';
import { BottomNav, TabId } from '@/components/navigation/BottomNav';
import { SettingsDrawer } from '@/components/navigation/SettingsDrawer';
import { 
  mockHotel, 
  mockInfluencer,
  mockManagerMetrics,
  mockInfluencerMetrics,
  mockActivityData, 
  mockInsights,
  mockGeoScans
} from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';
import { UserRole } from '@/types/dashboard';

/**
 * Lobbyly Dashboard - Premium Hotel Guest Intelligence
 */
const Index = () => {
  const location = useLocation();
  const role: UserRole = (location.state as { role?: UserRole })?.role || 'manager';
  
  const [activeTab, setActiveTab] = useState<TabId>('home');
  const [settingsOpen, setSettingsOpen] = useState(false);
  const { toast } = useToast();

  const metrics = role === 'manager' ? mockManagerMetrics : mockInfluencerMetrics;
  const name = role === 'manager' ? mockHotel.name : mockInfluencer.name;

  const handleInsightAction = (insightId: string) => {
    setActiveTab('insights');
    toast({
      title: 'Lobbyly Intelligence',
      description: 'Use the AI assistant to explore this insight further.',
    });
  };

  return (
    <div className="min-h-screen bg-background aura-bg">
      {/* Premium Hero Header */}
      <HeroHeader 
        name={name}
        role={role}
        notificationCount={2} 
      />

      {/* Main Content Area */}
      <main className="pb-24">
        {activeTab === 'home' && (
          <div className="premium-container py-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 lg:px-0">
              {/* Main Content Column */}
              <div className="lg:col-span-2 space-y-6">
                {/* Key Metrics */}
                <PulseSection metrics={metrics} />

                {/* Activity Map - Manager Only */}
                {role === 'manager' && (
                  <GeoMapCard scans={mockGeoScans} />
                )}

                {/* Activity Chart */}
                <ActivityChart data={mockActivityData} />

                {/* Lobbyly Intelligence */}
                <section>
                  <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3 font-display">
                    Lobbyly Intelligence
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
              </div>
            </div>
          </div>
        )}

        {/* AI Insights Tab */}
        {activeTab === 'insights' && (
          <div className="premium-container py-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[calc(100vh-220px)]">
              <div className="hidden lg:block space-y-6">
                <LiveStatsCard />
                <div className="glass-card p-5">
                  <h3 className="text-sm font-semibold text-foreground mb-4 font-display">Quick Actions</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Ask about guest trends</p>
                    <p>• Generate reports</p>
                    <p>• Optimize conversions</p>
                  </div>
                </div>
              </div>
              
              <AIChatPanel className="h-[calc(100vh-220px)] lg:h-auto" />
            </div>
          </div>
        )}
        
        {activeTab === 'profile' && <ProfileView hotel={mockHotel} />}
      </main>

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