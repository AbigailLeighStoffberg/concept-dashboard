import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Sparkles, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UserRole } from '@/types/dashboard';
import { cn } from '@/lib/utils';

/**
 * Lobbyly Auth Page - Dual-role login
 */
const Auth = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<UserRole>('manager');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate auth - replace with actual auth logic
    setTimeout(() => {
      setIsLoading(false);
      navigate('/', { state: { role } });
    }, 1000);
  };

  return (
    <div className="min-h-screen aura-bg flex items-center justify-center p-4">
      {/* Login Card */}
      <div className="w-full max-w-md animate-fade-in">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="font-display text-4xl font-semibold text-foreground tracking-tight">
            Lobbyly
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            Hotel Guest Intelligence Platform
          </p>
        </div>

        {/* Glass Card */}
        <div className="glass-card p-8">
          {/* Role Toggle */}
          <div className="flex rounded-2xl bg-muted/50 p-1 mb-8">
            <button
              type="button"
              onClick={() => setRole('manager')}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300",
                role === 'manager' 
                  ? "bg-card shadow-md text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Building2 className="h-4 w-4" />
              <span>Property Manager</span>
            </button>
            <button
              type="button"
              onClick={() => setRole('influencer')}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300",
                role === 'influencer' 
                  ? "bg-card shadow-md text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Sparkles className="h-4 w-4" />
              <span>Influencer Partner</span>
            </button>
          </div>

          {/* Welcome Message */}
          <div className="text-center mb-6">
            <h2 className="font-display text-2xl font-medium text-foreground">
              {role === 'manager' ? 'Manage your Property' : 'Track your Influence'}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {role === 'manager' 
                ? 'Access revenue insights and guest analytics' 
                : 'Monitor affiliate reach and commission earnings'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-foreground">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-xl bg-background/50 border-border/50 focus:border-accent focus:ring-accent/20"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-foreground">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 rounded-xl bg-background/50 border-border/50 pr-12 focus:border-accent focus:ring-accent/20"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className={cn(
                "w-full h-12 rounded-xl font-medium text-base transition-all duration-300",
                "bg-accent hover:bg-accent/90 text-accent-foreground",
                "shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30",
                isLoading && "opacity-80"
              )}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                  Signing in...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Continue
                  <ArrowRight className="h-4 w-4" />
                </span>
              )}
            </Button>
          </form>

          {/* Footer */}
          <p className="text-center text-xs text-muted-foreground mt-6">
            Don't have an account?{' '}
            <button className="text-accent hover:underline font-medium">
              Request Access
            </button>
          </p>
        </div>

        {/* Trust Badge */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          Trusted by 500+ hotels worldwide
        </p>
      </div>
    </div>
  );
};

export default Auth;