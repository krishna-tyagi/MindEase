import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { LogOut, User } from 'lucide-react';

export const Navigation: React.FC = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <nav className="floating-navbar glass">
      <div className="flex items-center justify-between w-full max-w-6xl">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-serif font-bold hero-text">
            MindEase AI
          </h1>
          <span className="text-sm glass text-foreground px-3 py-1 rounded-full font-medium">
            {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
          </span>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <User className="w-4 h-4" />
            <span>{user.name}</span>
          </div>
          <Button 
            variant="glass" 
            size="sm" 
            onClick={logout}
            className="flex items-center space-x-2"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};
