export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'staff' | 'secretary_general' | 'member';
  membershipId?: string;
  phoneNumber?: string;
  verified: boolean;
}

export interface Member {
  id: string;
  userId: string;
  membershipId: string;
  temporaryNumber?: string;
  status: 'active' | 'pending' | 'expired';
  type: 'student' | 'professional' | 'corporate';
  joinDate: string;
  paymentStatus: 'paid' | 'pending' | 'failed';
}

export interface AuditLog {
  id: string;
  action: string;
  userId: string;
  timestamp: string;
  details: string;
}