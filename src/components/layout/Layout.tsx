import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Menu, X, User as UserIcon, Bell, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../../lib/AuthContext';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Community', href: '/community' },
    { name: 'Events', href: '/events' },
    { name: 'Exclusive', href: '/exclusive' },
    { name: 'Merchandise', href: '#' },
    { name: 'Membership', href: '/membership' },
    { name: 'Support', href: '/support' },
  ];

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 font-sans selection:bg-amber-600/30">
      <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-neutral-900/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold tracking-tighter text-amber-500">
                THOMAS RHETT <span className="text-neutral-100">HUB</span>
              </Link>
            </div>
            
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              {user && (
                <button className="text-neutral-400 hover:text-white transition-colors">
                  <Bell className="h-5 w-5" />
                </button>
              )}
              {user ? (
                <div className="flex items-center space-x-4">
                  <Link to="/dashboard" className="flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors">
                    <UserIcon className="h-5 w-5" />
                    <span className="text-sm font-medium">Profile</span>
                  </Link>
                  <button onClick={handleSignOut} className="flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors">
                    <LogOut className="h-5 w-5" />
                  </button>
                </div>
              ) : (
                <Link to="/login" className="px-4 py-2 text-sm font-medium text-white bg-amber-600 hover:bg-amber-500 rounded-md transition-colors">
                  Sign In
                </Link>
              )}
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-neutral-400 hover:bg-neutral-800 hover:text-white focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-neutral-800 bg-neutral-900">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-neutral-300 hover:bg-neutral-800 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    className="block rounded-md px-3 py-2 text-base font-medium text-amber-500 hover:bg-neutral-800"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleSignOut();
                    }}
                    className="w-full text-left block rounded-md px-3 py-2 text-base font-medium text-red-500 hover:bg-neutral-800"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="block rounded-md px-3 py-2 text-base font-medium text-amber-500 hover:bg-neutral-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 w-full flex flex-col">
        <Outlet />
      </main>

      <footer className="border-t border-neutral-800 bg-neutral-950 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <p className="text-xl font-bold tracking-tighter text-amber-500 mb-4">
            THOMAS RHETT <span className="text-neutral-100">HUB</span>
          </p>
          <p className="text-neutral-400 text-sm mb-8 text-center max-w-lg">
            This is the official enterprise superfan platform. All payments occur securely through the platform. We never request payments through direct messages or bank transfers.
          </p>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-neutral-500 hover:text-white text-sm">Terms of Service</Link>
            <Link to="/privacy" className="text-neutral-500 hover:text-white text-sm">Privacy Policy</Link>
            <Link to="/safety" className="text-neutral-500 hover:text-white text-sm">Safety & Anti-Scam</Link>
            <Link to="/support" className="text-neutral-500 hover:text-white text-sm">Support</Link>
          </div>
          <p className="text-neutral-600 text-xs mt-8">
            &copy; {new Date().getFullYear()} Thomas Rhett Official. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
