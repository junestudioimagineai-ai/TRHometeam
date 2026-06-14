import { Users, CreditCard, ShieldAlert, BarChart3, Search } from 'lucide-react';
import { useAuth } from '../lib/AuthContext';
import { Navigate } from 'react-router-dom';

export default function AdminPage() {
  const { profile } = useAuth();
  
  if (profile?.role !== 'admin' && profile?.role !== 'superadmin') {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 w-full">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Admin Hub</h1>
          <p className="text-neutral-400 mt-1">Platform management and analytics.</p>
        </div>
        <div className="bg-amber-500/10 text-amber-500 border border-amber-500/20 px-4 py-2 rounded-lg text-sm font-bold tracking-widest uppercase">
          Admin Access Granted
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-neutral-900 border border-neutral-800 p-5 rounded-xl">
          <div className="flex items-center gap-3 text-neutral-400 mb-2 font-medium">
            <Users className="w-5 h-5 text-amber-500" /> Total Users
          </div>
          <div className="text-3xl font-bold text-white">24,591</div>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 p-5 rounded-xl">
          <div className="flex items-center gap-3 text-neutral-400 mb-2 font-medium">
            <CreditCard className="w-5 h-5 text-emerald-500" /> Active Subscriptions
          </div>
          <div className="text-3xl font-bold text-white">8,204</div>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 p-5 rounded-xl">
          <div className="flex items-center gap-3 text-neutral-400 mb-2 font-medium">
            <ShieldAlert className="w-5 h-5 text-red-500" /> Open Support Tickets
          </div>
          <div className="text-3xl font-bold text-white">42</div>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 p-5 rounded-xl">
          <div className="flex items-center gap-3 text-neutral-400 mb-2 font-medium">
            <BarChart3 className="w-5 h-5 text-blue-500" /> Monthly Revenue
          </div>
          <div className="text-3xl font-bold text-white">$142.5k</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* User Search & Management */}
        <div className="col-span-1 lg:col-span-2 space-y-6">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
             <div className="p-5 border-b border-neutral-800 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
               <h2 className="text-lg font-bold text-white">Recent Users</h2>
               <div className="relative">
                 <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                 <input 
                   type="text" 
                   placeholder="Search email or name..." 
                   className="bg-neutral-950 border border-neutral-800 rounded-lg pl-9 pr-4 py-1.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                 />
               </div>
             </div>
             <div className="overflow-x-auto">
               <table className="w-full text-left text-sm text-neutral-400">
                 <thead className="bg-neutral-950 text-neutral-500 border-b border-neutral-800">
                   <tr>
                     <th className="px-5 py-3 font-medium">Name</th>
                     <th className="px-5 py-3 font-medium">Email</th>
                     <th className="px-5 py-3 font-medium">Tier</th>
                     <th className="px-5 py-3 font-medium">Status</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-neutral-800">
                    <tr>
                      <td className="px-5 py-3 text-white">Sarah Jenkins</td>
                      <td className="px-5 py-3">sarahj@example.com</td>
                      <td className="px-5 py-3"><span className="text-amber-500 font-medium">VIP</span></td>
                      <td className="px-5 py-3"><span className="text-emerald-500">Active</span></td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 text-white">Mike Ross</td>
                      <td className="px-5 py-3">miker@example.com</td>
                      <td className="px-5 py-3"><span className="text-yellow-500 font-medium">Gold</span></td>
                      <td className="px-5 py-3"><span className="text-emerald-500">Active</span></td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 text-white">Jenny Fan</td>
                      <td className="px-5 py-3">jenny@example.com</td>
                      <td className="px-5 py-3"><span className="text-neutral-500 font-medium">Guest</span></td>
                      <td className="px-5 py-3"><span className="text-neutral-500">Unverified</span></td>
                    </tr>
                 </tbody>
               </table>
             </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="col-span-1 space-y-6">
           <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
             <h2 className="text-lg font-bold text-white mb-4">Manual Verifications</h2>
             <p className="text-sm text-neutral-400 mb-4 pb-4 border-b border-neutral-800">
               Review pending Steam/Amazon membership payment proofs. Ensure validity before approving accounts.
             </p>
             <button className="w-full bg-neutral-950 border border-neutral-800 hover:border-amber-500 text-amber-500 py-2.5 rounded-lg text-sm font-medium transition-colors mb-2">
               Review Payment Proofs (12)
             </button>
             <button className="w-full bg-neutral-950 border border-neutral-800 hover:border-white text-white py-2.5 rounded-lg text-sm font-medium transition-colors">
               View Support Queue
             </button>
           </div>
        </div>
      </div>
    </div>
  );
}
