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


export interface FormStep {
  id: number
  title: string
  status: "completed" | "pending" | "failed"
  date: string | null
}

export interface FormData {
  applicationNo: string
  email: string
  userId: string | null
  status: string
  amount: number
  date: string
  isApproved: boolean
  paymentStatus: "Success" | "Pending" | "Failed"
  steps: FormStep[]
  images?: string[]
}

export interface PaymentHistory {
  id: string
  applicationNo: string
  amount: number
  adminFee: number
  status: string
  date: string
  transactionId?: string
  paymentMethod?: string
  remarks?: string
}