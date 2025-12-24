/**
 * Dashboard data types for Lobbyly
 * Structured for easy Supabase integration
 */

export type UserRole = 'manager' | 'influencer';

export interface PulseMetric {
  id: string;
  label: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon: 'users' | 'revenue' | 'qr' | 'reach' | 'commission' | 'merch' | 'funnel';
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

export interface InfluencerProfile {
  id: string;
  name: string;
  handle: string;
  totalScans: number;
  commissionEarned: number;
  merchCodes: number;
}

export interface DashboardState {
  hotel: HotelProfile;
  pulseMetrics: PulseMetric[];
  activityData: ActivityDataPoint[];
  insights: SmartInsight[];
  isLoading: boolean;
  lastUpdated: Date | null;
}

export interface GeoScanPoint {
  id: string;
  lat: number;
  lng: number;
  type: 'lobby' | 'restaurant' | 'spa' | 'pool' | 'room';
  timestamp: Date;
}