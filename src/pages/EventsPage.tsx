import { Calendar, MapPin, ShieldCheck, Ticket } from 'lucide-react';
import { useAuth } from '../lib/AuthContext';
import { Link } from 'react-router-dom';

export default function EventsPage() {
  const { profile } = useAuth();
  const isVip = profile?.membershipTier === 'vip' || profile?.membershipTier === 'gold';

  const events = [
    { id: 1, title: 'Summer Tour 2026 - Nashville', date: 'AUG 15, 2026 • 7:00 PM', venue: 'Nissan Stadium', vipOnly: false },
    { id: 2, title: 'Intimate Acoustic Set - Atlanta', date: 'SEP 02, 2026 • 8:00 PM', venue: 'The Tabernacle', vipOnly: true },
    { id: 3, title: 'Virtual Meet & Greet', date: 'SEP 10, 2026 • 5:00 PM EST', venue: 'Online / Home Team App', vipOnly: true },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 w-full">
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Events & Tour</h1>
          <p className="text-neutral-400">Discover upcoming shows, VIP experiences, and virtual meet & greets.</p>
        </div>
        
        <div className="bg-amber-500/10 border border-amber-500/20 px-4 py-3 rounded-xl flex items-start gap-3 max-w-md">
          <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <p className="text-xs text-neutral-300">
            <strong>Official Ticketing Policy:</strong> All VIP registrations are processed securely right here. 
            We strictly do <strong>not</strong> support third-party private transfers, cash apps, or gift card purchases.
          </p>
        </div>
      </div>
      
      <div className="grid gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 flex flex-col md:flex-row gap-6 md:items-center transition-all hover:border-neutral-700">
            <div className="w-full md:w-32 md:h-32 bg-neutral-950 border border-neutral-800 rounded-lg flex flex-col items-center justify-center p-4 shrink-0">
              <Calendar className="w-6 h-6 text-amber-500 mb-2" />
              <div className="text-amber-500 font-bold text-center text-sm leading-tight">
                {event.date.split(' • ')[0].replace(', 2026', '')}
              </div>
            </div>

            <div className="flex-1">
              {event.vipOnly && (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-800 text-amber-500 text-[10px] font-bold tracking-widest uppercase mb-3">
                  <Ticket className="w-3 h-3" /> VIP Exclusive
                </div>
              )}
              <h2 className="text-xl font-bold text-white mb-2">{event.title}</h2>
              <div className="flex items-center gap-4 text-sm text-neutral-400 mb-4">
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4"/> {event.date}</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4"/> {event.venue}</span>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {event.vipOnly && !isVip ? (
                  <Link to="/membership" className="py-2 px-4 bg-amber-600/20 hover:bg-amber-600/30 text-amber-500 rounded-lg font-medium transition-colors text-sm border border-amber-500/30">
                    Upgrade for Access
                  </Link>
                ) : (
                  <button className="py-2 px-4 bg-white hover:bg-neutral-200 text-black rounded-lg font-medium transition-colors text-sm">
                    {event.vipOnly ? 'Register VIP' : 'Get Tickets'}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
