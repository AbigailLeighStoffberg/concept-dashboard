/**
 * Mock data for Q-Insight Dashboard
 * Replace with Supabase queries when ready
 */

import { 
  PulseMetric, 
  ActivityDataPoint, 
  SmartInsight, 
  HotelProfile 
} from '@/types/dashboard';

export const mockHotel: HotelProfile = {
  id: 'hotel-001',
  name: 'Hotel Makedonia',
  location: 'Thessaloniki, Greece',
  activeQrCodes: 15,
  plan: 'professional',
};

export const mockPulseMetrics: PulseMetric[] = [
  {
    id: 'metric-001',
    label: 'Guest Scans',
    value: 124,
    change: 12,
    changeLabel: 'vs last week',
    icon: 'users',
  },
  {
    id: 'metric-002',
    label: 'Revenue',
    value: '€450.00',
    change: 8,
    changeLabel: 'vs last week',
    icon: 'revenue',
  },
  {
    id: 'metric-003',
    label: 'Active QR Codes',
    value: 15,
    icon: 'qr',
  },
];

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
    title: 'Late Night Dining Opportunity',
    description: 'Your guests are searching for "Late Night Food" at 11 PM. Add 2 recommendations to capture this demand.',
    actionLabel: 'Add Recommendations',
    priority: 'high',
  },
  {
    id: 'insight-002',
    type: 'trend',
    title: 'Weekend Peak Detected',
    description: 'Saturday shows 45% higher engagement. Consider weekend-specific promotions.',
    priority: 'medium',
  },
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
