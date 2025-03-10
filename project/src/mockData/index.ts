import { User, Member, AuditLog } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@iete.org',
    role: 'admin',
    verified: true,
  },
  {
    id: '2',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'member',
    membershipId: 'IETE2023001',
    phoneNumber: '+91-9876543210',
    verified: true,
  },
];

export const mockMembers: Member[] = [
  {
    id: '1',
    userId: '2',
    membershipId: 'IETE2023001',
    temporaryNumber: 'TEMP001',
    status: 'active',
    type: 'professional',
    joinDate: '2023-08-15',
    paymentStatus: 'paid',
  },
];

export const mockAuditLogs: AuditLog[] = [
  {
    id: '1',
    action: 'User Registration',
    userId: '2',
    timestamp: '2023-08-15T10:30:00Z',
    details: 'New user registered with email john@example.com',
  },
];