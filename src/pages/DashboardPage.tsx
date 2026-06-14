import { useAuth } from '../lib/AuthContext';
import { ShieldCheck, Star, Ticket } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DashboardPage() {
  const { profile, user } = useAuth();
  
  const isVipOrGold = profile?.membershipTier === 'vip' || profile?.membershipTier === 'gold';

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Welcome back, {profile?.fullName || 'Fan'}</h1>
        <p className="text-neutral-400 mt-2">Here is your official Home Team headquarters.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Ticket className="w-5 h-5 text-amber-500" /> My Tickets & Registrations
            </h2>
            <div className="p-4 bg-neutral-950 border border-neutral-800 rounded-lg text-center text-neutral-400">
              You haven't registered for any upcoming events yet.
              <div className="mt-4">
                <Link to="/events" className="text-sm font-medium text-amber-500 hover:text-amber-400">Browse Events &rarr;</Link>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500" /> For You: Exclusive Content
            </h2>
            {isVipOrGold ? (
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="border border-neutral-800 rounded-lg overflow-hidden group cursor-pointer hover:border-neutral-700">
                   <div className="aspect-video bg-neutral-800 relative">
                     <div className="absolute inset-0 opacity-60 bg-[url('https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?q=80&w=3549&auto=format&fit=crop')] bg-cover bg-center" />
                   </div>
                   <div className="p-3 bg-neutral-950">
                     <h3 className="text-sm font-bold text-white">Studio Sessions: Track 1</h3>
                   </div>
                 </div>
                 <div className="p-4 border border-neutral-800 rounded-lg bg-neutral-950 flex flex-col justify-center items-center text-center">
                    <Link to="/exclusive" className="text-sm font-medium text-amber-500 hover:text-amber-400">View All Exclusive Content &rarr;</Link>
                 </div>
               </div>
            ) : (
              <div className="p-4 bg-neutral-950 border border-neutral-800 rounded-lg text-center text-neutral-400">
                Upgrade to Gold or VIP to access the latest studio videos and unreleased tracks.
                <div className="mt-4">
                  <Link to="/membership" className="text-sm font-medium text-amber-500 hover:text-amber-400">View Memberships &rarr;</Link>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="col-span-1 space-y-6">
          <div className="bg-neutral-900 border border-amber-500/30 rounded-xl p-6 shadow-[0_0_20px_rgba(245,158,11,0.05)]">
            <h2 className="text-sm font-semibold text-neutral-400 mb-1 uppercase tracking-wider">Membership Status</h2>
            <div className="flex items-center gap-2 mb-4">
              <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-bold uppercase tracking-wider ${
                profile?.membershipTier === 'vip' ? 'bg-amber-500 text-black' :
                profile?.membershipTier === 'gold' ? 'bg-yellow-500/20 text-yellow-500' :
                profile?.membershipTier === 'silver' ? 'bg-slate-300/20 text-slate-300' :
                'bg-neutral-800 text-neutral-400'
              }`}>
                {profile?.membershipTier || 'Guest'} Member
              </span>
              {(profile?.membershipTier === 'vip' || profile?.membershipTier === 'gold') && (
                <ShieldCheck className="w-5 h-5 text-amber-500" />
              )}
            </div>
            
            <div className="text-sm text-neutral-400 mb-6 space-y-2">
              <p><strong>Email:</strong> {user?.email}</p>
              <p><strong>Status:</strong> Active</p>
            </div>
            
            {profile?.membershipTier !== 'vip' && (
              <Link to="/membership" className="w-full block text-center py-2 px-4 bg-amber-600 hover:bg-amber-500 text-white rounded-lg font-medium transition-colors">
                Upgrade Membership
              </Link>
            )}
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-md">
            <h2 className="text-sm font-semibold text-neutral-400 mb-3 uppercase tracking-wider">Fan Safety</h2>
            <p className="text-xs text-neutral-400 mb-3 leading-relaxed">
              We proactively monitor for scammers. Thomas Rhett will NEVER message you asking for gift cards, crypto, or money via WhatsApp/Telegram.
            </p>
            <Link to="/support" className="text-sm text-amber-500 hover:text-amber-400 font-medium">Report suspicious activity &rarr;</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
