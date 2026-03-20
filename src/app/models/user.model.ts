export interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: 'ROLE_CLIENT' | 'ROLE_ADMIN';
  createdAt: string;
  lastLoginAt?: string;
}