export interface User {
  id: string;
  email: string;
  fullName: string;
  avatarUrl?: string;
  role: 'guest' | 'fan' | 'premium' | 'moderator' | 'admin' | 'superadmin';
  membershipTier: 'free' | 'silver' | 'gold' | 'vip';
  membershipStatus: 'active' | 'inactive' | 'canceled';
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  imageUrl?: string;
  capacity?: number;
  description: string;
  isVirtual: boolean;
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  summary: string;
}
