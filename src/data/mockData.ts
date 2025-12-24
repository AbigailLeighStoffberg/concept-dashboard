/**
 * Mock data for Lobbyly Dashboard
 * Replace with Supabase queries when ready
 */

import { 
  PulseMetric, 
  ActivityDataPoint, 
  SmartInsight, 
  HotelProfile,
  InfluencerProfile,
  GeoScanPoint
} from '@/types/dashboard';

export const mockHotel: HotelProfile = {
  id: 'hotel-001',
  name: 'The Grand Riviera',
  location: 'Thessaloniki, Greece',
  activeQrCodes: 24,
  plan: 'professional',
};

export const mockInfluencer: InfluencerProfile = {
  id: 'influencer-001',
  name: 'Sofia Martinez',
  handle: '@sofiatravels',
  totalScans: 1842,
  commissionEarned: 2450.00,
  merchCodes: 8,
};

// Manager-specific metrics
export const mockManagerMetrics: PulseMetric[] = [
  {
    id: 'metric-001',
    label: 'Total Guest Revenue',
    value: '€12,450',
    change: 18,
    changeLabel: 'vs last week',
    icon: 'revenue',
  },
  {
    id: 'metric-002',
    label: 'Conversion Rate',
    value: '24.5%',
    change: 5,
    changeLabel: 'vs last week',
    icon: 'funnel',
  },
  {
    id: 'metric-003',
    label: 'Active Guests',
    value: 142,
    change: 12,
    changeLabel: 'today',
    icon: 'users',
  },
];

// Influencer-specific metrics
export const mockInfluencerMetrics: PulseMetric[] = [
  {
    id: 'metric-001',
    label: 'Affiliate Reach',
    value: '1,842',
    change: 23,
    changeLabel: 'scans this month',
    icon: 'reach',
  },
  {
    id: 'metric-002',
    label: 'Commission Earned',
    value: '€2,450',
    change: 15,
    changeLabel: 'vs last month',
    icon: 'commission',
  },
  {
    id: 'metric-003',
    label: 'Merch Performance',
    value: '324',
    change: 8,
    changeLabel: 'scans from merch',
    icon: 'merch',
  },
];

export const mockPulseMetrics = mockManagerMetrics;

export const mockActivityData: ActivityDataPoint[] = [
  { date: 'Mon', guests: 18, scans: 24 },
  { date: 'Tue', guests: 22, scans: 31 },
  { date: 'Wed', guests: 15, scans: 19 },
  { date: 'Thu', guests: 28, scans: 35 },
  { date: 'Fri', guests: 32, scans: 42 },
  { date: 'Sat', guests: 38, scans: 48 },
  { date: 'Sun', guests: 25, scans: 32 },
];

export const mockInsights: SmartInsight[] = [
  {
    id: 'insight-001',
    type: 'recommendation',
    title: 'Lobby Hotspot Detected',
    description: 'Guests are scanning "Transfers" at the Lobby—consider increasing staff there now.',
    actionLabel: 'Quick Action',
    priority: 'high',
  },
  {
    id: 'insight-002',
    type: 'trend',
    title: 'Weekend Revenue Spike',
    description: 'Saturday shows 45% higher conversion. Optimize weekend-specific promotions.',
    actionLabel: 'View Analytics',
    priority: 'medium',
  },
];

export const mockGeoScans: GeoScanPoint[] = [
  { id: 'scan-1', lat: 40.6401, lng: 22.9444, type: 'lobby', timestamp: new Date() },
  { id: 'scan-2', lat: 40.6405, lng: 22.9448, type: 'restaurant', timestamp: new Date() },
  { id: 'scan-3', lat: 40.6398, lng: 22.9442, type: 'spa', timestamp: new Date() },
  { id: 'scan-4', lat: 40.6403, lng: 22.9450, type: 'pool', timestamp: new Date() },
];

/**
 * Utility function to get greeting based on time of day
 */
export function getTimeGreeting(): string {
  const hour = new Date().getHours();
  
  if (hour < 12) return 'Good Morning';
  if (hour < 17) return 'Good Afternoon';
  if (hour < 21) return 'Good Evening';
  return 'Good Night';
}