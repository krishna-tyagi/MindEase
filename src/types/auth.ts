export interface User {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'admin' | 'volunteer';
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

export const DEMO_ACCOUNTS = {
  'student@demo.com': { 
    id: '1', 
    email: 'student@demo.com', 
    name: 'Demo Student', 
    role: 'student' as const,
    password: 'demo123'
  },
  'admin@demo.com': { 
    id: '2', 
    email: 'admin@demo.com', 
    name: 'Demo Admin', 
    role: 'admin' as const,
    password: 'admin123'
  },
  'volunteer@demo.com': { 
    id: '3', 
    email: 'volunteer@demo.com', 
    name: 'Demo Volunteer', 
    role: 'volunteer' as const,
    password: 'volunteer123'
  }
};