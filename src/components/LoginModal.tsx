import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { DEMO_ACCOUNTS } from '@/types/auth';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRole?: 'student' | 'admin' | 'volunteer';
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, defaultRole }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const success = await login(email, password);
      if (success) {
        toast({
          title: "Login successful",
          description: "Welcome to the psychological intervention system.",
        });
        onClose();
        setEmail('');
        setPassword('');
      } else {
        toast({
          title: "Login failed",
          description: "Invalid email or password. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = (role: string) => {
    const demoAccount = Object.values(DEMO_ACCOUNTS).find(account => account.role === role);
    if (demoAccount) {
      setEmail(demoAccount.email);
      setPassword(demoAccount.password);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Login</DialogTitle>
          <DialogDescription className="text-center">
            Access your psychological intervention dashboard
          </DialogDescription>
        </DialogHeader>
        
        <Alert className="mb-4">
          <AlertDescription>
            <strong>Demo Accounts:</strong><br />
            Student: student@demo.com / demo123<br />
            Admin: admin@demo.com / admin123<br />
            Volunteer: volunteer@demo.com / volunteer123
          </AlertDescription>
        </Alert>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex gap-2 mb-4">
            <Button 
              type="button" 
              variant="soft" 
              size="sm" 
              onClick={() => handleDemoLogin('student')}
              className="flex-1"
            >
              Student Demo
            </Button>
            <Button 
              type="button" 
              variant="soft" 
              size="sm" 
              onClick={() => handleDemoLogin('admin')}
              className="flex-1"
            >
              Admin Demo
            </Button>
            <Button 
              type="button" 
              variant="soft" 
              size="sm" 
              onClick={() => handleDemoLogin('volunteer')}
              className="flex-1"
            >
              Volunteer Demo
            </Button>
          </div>
          
          <Button 
            type="submit" 
            className="w-full" 
            variant="hero"
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};