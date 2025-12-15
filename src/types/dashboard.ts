/**
 * Dashboard data types for Q-Insight
 * Structured for easy Supabase integration
 */

export interface PulseMetric {
  id: string;
  label: string;
  value: string | number;
  change?: number; // Percentage change vs last period
  changeLabel?: string;
  icon: 'users' | 'revenue' | 'qr';
}

export interface ActivityDataPoint {
  date: string;
  guests: number;
  scans: number;
}

export interface SmartInsight {
  id: string;
  type: 'recommendation' | 'alert' | 'trend';
  title: string;
  description: string;
  actionLabel?: string;
  priority: 'low' | 'medium' | 'high';
}

export interface HotelProfile {
  id: string;
  name: string;
  location: string;
  activeQrCodes: number;
  plan: 'starter' | 'professional' | 'enterprise';
}

export interface DashboardState {
  hotel: HotelProfile;
  pulseMetrics: PulseMetric[];
  activityData: ActivityDataPoint[];
  insights: SmartInsight[];
  isLoading: boolean;
  lastUpdated: Date | null;
}
