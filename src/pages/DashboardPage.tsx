import { useAuth } from '../lib/AuthContext';
import { ShieldCheck, Star, Ticket, Medal } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DashboardPage() {
  const { profile, user } = useAuth();
  
  const isVipOrGold = profile?.membershipTier === 'vip' || profile?.membershipTier === 'gold';

  const badges = [
    { title: 'Founding Home Team Member', icon: Star },
    { title: 'Vault Explorer', icon: Medal },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 w-full">
      <div className="mb-8 border-b border-neutral-800 pb-8">
        <h1 className="text-3xl font-bold text-white font-serif">Welcome back, {profile?.fullName || 'Fan'}</h1>
        <p className="text-neutral-400 mt-2">Here is your official Home Team headquarters.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-1 lg:col-span-2 space-y-8">
          <div className="bg-[#111110] border border-neutral-800 rounded-xl p-8 shadow-md relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-5 bg-[url('https://images.unsplash.com/photo-1540039155732-680c74fb5ab3?q=80&w=3540&auto=format&fit=crop')] bg-cover w-full h-full mix-blend-overlay pointer-events-none" />
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2 relative z-10">
              <Ticket className="w-5 h-5 text-amber-500" /> My Upcoming Tours
            </h2>
            <div className="p-6 bg-neutral-950/80 backdrop-blur-sm border border-neutral-800/50 rounded-lg text-center text-neutral-400 relative z-10">
              You haven't RSVP'd for any upcoming 2026 tour dates yet.
              <div className="mt-4">
                <Link to="/events" className="text-sm font-medium text-amber-500 hover:text-amber-400 uppercase tracking-widest text-xs">Browse 2026 Tour Dates &rarr;</Link>
              </div>
            </div>
          </div>

          <div className="bg-[#111110] border border-neutral-800 rounded-xl p-8 shadow-md">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500" /> Recommended for You
            </h2>
            {isVipOrGold ? (
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="border border-neutral-800 rounded-lg overflow-hidden group cursor-pointer hover:border-neutral-700">
                    {/* album_cover_url support placeholder */}
                    <div className="aspect-square bg-neutral-800 relative flex items-center justify-center">
                       <span className="text-xs text-neutral-500 uppercase tracking-widest">About a Woman</span>
                    </div>
                    <div className="p-4 bg-neutral-950 text-center">
                      <h3 className="text-sm font-bold text-white mb-1">Album Discussion</h3>
                      <p className="text-xs text-neutral-400">Join the community</p>
                    </div>
                 </div>
                 <div className="p-4 border border-neutral-800 rounded-lg bg-neutral-950 flex flex-col justify-center items-center text-center">
                    <Link to="/community" className="text-sm font-bold text-amber-500 hover:text-amber-400 uppercase tracking-widest text-xs">Explore All Albums &rarr;</Link>
                 </div>
               </div>
            ) : (
              <div className="p-6 bg-neutral-950 border border-neutral-800 rounded-lg text-center text-neutral-400">
                Upgrade to Gold or VIP to unlock deep album discussions and community boards.
                <div className="mt-4">
                  <Link to="/membership" className="text-sm font-medium text-amber-500 hover:text-amber-400 uppercase tracking-widest text-xs">View Memberships &rarr;</Link>
                </div>
              </div>
            )}
          </div>
          
          <div className="bg-[#111110] border border-neutral-800 rounded-xl p-8 shadow-md">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500" /> For You: The Vault
            </h2>
            {isVipOrGold ? (
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="border border-neutral-800 rounded-lg overflow-hidden group cursor-pointer hover:border-neutral-700">
                   <div className="aspect-video bg-neutral-800 relative">
                     <div className="absolute inset-0 opacity-60 bg-[url('https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?q=80&w=3549&auto=format&fit=crop')] bg-cover bg-center" />
                   </div>
                   <div className="p-4 bg-neutral-950">
                     <h3 className="text-sm font-bold text-white mb-1">Studio Sessions: Track 1</h3>
                     <p className="text-xs text-neutral-400">Exclusive Behind The Scenes</p>
                   </div>
                 </div>
                 <div className="p-4 border border-neutral-800 rounded-lg bg-neutral-950 flex flex-col justify-center items-center text-center">
                    <Link to="/exclusive" className="text-sm font-bold text-amber-500 hover:text-amber-400 uppercase tracking-widest text-xs">Explore The Vault &rarr;</Link>
                 </div>
               </div>
            ) : (
              <div className="p-6 bg-neutral-950 border border-neutral-800 rounded-lg text-center text-neutral-400">
                Upgrade to Gold or VIP to access the latest studio videos and unreleased tracks in The Vault.
                <div className="mt-4">
                  <Link to="/membership" className="text-sm font-medium text-amber-500 hover:text-amber-400 uppercase tracking-widest text-xs">View Memberships &rarr;</Link>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="col-span-1 space-y-8">
          <div className="bg-[#111110] border border-amber-500/30 rounded-xl p-6 shadow-[0_0_20px_rgba(245,158,11,0.05)]">
            <h2 className="text-xs font-bold text-neutral-500 mb-3 uppercase tracking-widest">Membership Status</h2>
            <div className="flex items-center gap-2 mb-4">
              <span className={`inline-flex items-center rounded-sm px-3 py-1.5 text-xs font-bold uppercase tracking-widest ${
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
            
            <div className="text-sm text-neutral-400 mb-6 space-y-3 p-4 bg-neutral-950 rounded-lg border border-neutral-800/50">
              <p className="flex flex-col"><span className="text-xs text-neutral-500 uppercase tracking-widest mb-1">Email</span> <span className="text-white truncate">{user?.email}</span></p>
              <p className="flex flex-col"><span className="text-xs text-neutral-500 uppercase tracking-widest mb-1">Status</span> <span className="text-white">Active</span></p>
            </div>
            
            {profile?.membershipTier !== 'vip' && (
              <Link to="/membership" className="w-full block text-center py-3 px-4 bg-amber-600 hover:bg-amber-500 text-white rounded-lg font-bold transition-colors uppercase tracking-widest text-xs">
                Upgrade Membership
              </Link>
            )}
          </div>

          <div className="bg-[#111110] border border-neutral-800 rounded-xl p-6 shadow-md">
            <h2 className="text-xs font-bold text-neutral-500 mb-4 uppercase tracking-widest flex items-center gap-2">
              <Medal className="w-4 h-4" /> Achievements
            </h2>
            <div className="space-y-3">
              {badges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-neutral-950 rounded-lg border border-neutral-800/50 hover:border-amber-500/30 transition-colors">
                    <div className="bg-amber-500/10 p-2 rounded-md">
                      <Icon className="w-4 h-4 text-amber-500" />
                    </div>
                    <span className="text-sm text-white font-medium">{badge.title}</span>
                  </div>
                )
              })}
              <div className="pt-2 text-center">
                 <span className="text-xs text-neutral-500 italic">More badges unlock organically</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
