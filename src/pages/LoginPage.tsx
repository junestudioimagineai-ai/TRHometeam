import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/dashboard';

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
            }
          }
        });
        if (error) throw error;
        // Supabase often requires email confirmation by default
        setError('Check your email for the confirmation link to complete registration.');
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        navigate(from, { replace: true });
      }
    } catch (err: any) {
       setError(err.message || 'An error occurred during authentication.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center flex-1 py-12 px-4 sm:px-6 lg:px-8 bg-neutral-950 w-full min-h-[80vh]">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-2 font-display uppercase">
            {isSignUp ? 'Join the Home Team' : 'Welcome Back'}
          </h2>
          <p className="text-neutral-400">
            {isSignUp ? 'Create your official fan account' : 'Sign in to access your VIP benefits'}
          </p>
        </div>

        <form className="mt-8 space-y-6 bg-neutral-900 border border-neutral-800 rounded-xl p-8 shadow-xl shadow-black/50" onSubmit={handleAuth}>
          {error && (
            <div className={`p-4 rounded-md text-sm ${error.includes('Check your email') ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}>
              {error}
            </div>
          )}
          
          <div className="space-y-4">
            {isSignUp && (
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-1">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-colors"
                placeholder="fan@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-1">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-colors"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:ring-amber-500 disabled:opacity-50 transition-colors"
          >
            {loading ? 'Processing...' : isSignUp ? 'Create Account' : 'Sign In'}
          </button>

          <div className="text-center text-sm mt-4">
            <button
              type="button"
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError(null);
              }}
              className="text-amber-500 hover:text-amber-400 font-medium transition-colors"
            >
              {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
            </button>
          </div>
        </form>

        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6 flex flex-col items-center text-center mt-8">
          <ShieldCheck className="h-8 w-8 text-amber-500 mb-3" />
          <h3 className="text-sm font-semibold text-white mb-1">Official Thomas Rhett Platform</h3>
          <p className="text-xs text-neutral-400">
            This is a secure environment. We never ask for payments outside of this domain via crypto, gift cards, or wire transfers.
          </p>
        </div>
      </div>
    </div>
  );
}
