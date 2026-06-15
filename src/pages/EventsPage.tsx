import { Calendar, MapPin, ShieldCheck, Ticket, X, CheckCircle2, CreditCard } from 'lucide-react';
import { useAuth } from '../lib/AuthContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function EventsPage() {
  const { profile } = useAuth();
  const isVip = profile?.membershipTier === 'vip' || profile?.membershipTier === 'gold';
  
  const [checkoutEvent, setCheckoutEvent] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  const closeCheckout = () => {
    setCheckoutEvent(null);
    setIsSuccess(false);
  };

  const events = [
    { id: 1, title: 'Headline Show with Niall Horan', date: 'JUL 09, 2026 • 7:00 PM', venue: 'Geodis Park, Nashville TN', vipOnly: false },
    { id: 2, title: 'The Soundtrack to Life Tour', date: 'JUL 11, 2026 • 7:30 PM', venue: 'Bon Secours Wellness Arena, Greenville SC', vipOnly: false },
    { id: 3, title: 'The Soundtrack to Life Tour', date: 'JUL 16, 2026 • 8:00 PM', venue: 'The Meadows Music Theatre, Hartford CT', vipOnly: false },
    { id: 4, title: 'The Soundtrack to Life Tour', date: 'JUL 17, 2026 • 7:00 PM', venue: 'BankNH Pavilion, Gilford NH', vipOnly: false },
    { id: 5, title: 'Headline Show with Niall Horan', date: 'JUL 18, 2026 • 7:00 PM', venue: 'Hersheypark Stadium, Hershey PA', vipOnly: false },
    { id: 6, title: 'Morgan Wallen Still The Problem Tour', date: 'JUL 24, 2026 • 7:00 PM', venue: 'Michigan Stadium, Ann Arbor MI', vipOnly: false },
    { id: 7, title: 'Luke Combs Tour (Night 1)', date: 'JUL 31, 2026 • 8:00 PM', venue: 'Wembley Stadium, London UK', vipOnly: false },
    { id: 8, title: 'Luke Combs Tour (Night 2)', date: 'AUG 01, 2026 • 8:00 PM', venue: 'Wembley Stadium, London UK', vipOnly: false },
    { id: 9, title: 'Luke Combs Tour (Night 3)', date: 'AUG 02, 2026 • 8:00 PM', venue: 'Wembley Stadium, London UK', vipOnly: false },
    { id: 10, title: 'WE Fest', date: 'AUG 07, 2026 • 6:00 PM', venue: 'Soo Pass Ranch, Detroit Lakes MN', vipOnly: false },
    { id: 11, title: 'Thomas Rhett Tour', date: 'AUG 13, 2026 • 7:30 PM', venue: 'Merriweather Post Pavilion, Columbia MD', vipOnly: false },
    { id: 12, title: 'Thomas Rhett Tour', date: 'AUG 14, 2026 • 7:30 PM', venue: 'Bethel Woods Center for the Arts, Bethel NY', vipOnly: false },
    { id: 13, title: 'Lasso Festival', date: 'AUG 15, 2026 • 7:00 PM', venue: 'Parc Jean-Drapeau, Montreal QC', vipOnly: false },
    { id: 14, title: 'Thomas Rhett Tour', date: 'AUG 20, 2026 • 7:30 PM', venue: 'Ford Center, Evansville IN', vipOnly: false },
    { id: 15, title: 'LIV Golf After Play', date: 'AUG 21, 2026 • 8:00 PM', venue: 'Indianapolis IN', vipOnly: false },
    { id: 16, title: 'Thomas Rhett Tour', date: 'AUG 22, 2026 • 7:30 PM', venue: 'Acrisure Amphitheater, Grand Rapids MI', vipOnly: false },
    { id: 17, title: 'Virtual Fan M&G - VIP Only', date: 'SEP 05, 2026 • 5:00 PM', venue: 'Online / Home Team App', vipOnly: true },
    { id: 18, title: 'Thomas Rhett Tour', date: 'SEP 10, 2026 • 7:30 PM', venue: 'KFC Yum! Center, Louisville KY', vipOnly: false },
    { id: 19, title: 'Thomas Rhett Tour', date: 'SEP 11, 2026 • 7:30 PM', venue: 'Schottenstein Center, Columbus OH', vipOnly: false },
    { id: 20, title: 'Thomas Rhett Tour', date: 'SEP 12, 2026 • 7:30 PM', venue: 'Blossom Music Center, Cuyahoga Falls OH', vipOnly: false },
    { id: 21, title: 'Thomas Rhett Tour', date: 'SEP 17, 2026 • 7:30 PM', venue: 'Moody Center, Austin TX', vipOnly: false },
    { id: 22, title: 'Thomas Rhett Tour', date: 'SEP 18, 2026 • 7:30 PM', venue: 'American Airlines Center, Dallas TX', vipOnly: false },
    { id: 23, title: 'Thomas Rhett Tour', date: 'SEP 19, 2026 • 7:30 PM', venue: 'BOK Center, Tulsa OK', vipOnly: false },
    { id: 24, title: 'Thomas Rhett Tour', date: 'OCT 02, 2026 • 7:30 PM', venue: 'Honda Center, Anaheim CA', vipOnly: false },
    { id: 25, title: 'Thomas Rhett Tour', date: 'OCT 03, 2026 • 7:30 PM', venue: 'Golden 1 Center, Sacramento CA', vipOnly: false },
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
                  <button 
                    onClick={() => setCheckoutEvent(event)}
                    className="py-2 px-4 bg-white hover:bg-neutral-200 text-black rounded-lg font-medium transition-colors text-sm"
                  >
                    {event.vipOnly ? 'Register VIP' : 'Get Tickets'}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ticket Checkout Modal Simulator */}
      {checkoutEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl relative">
            <button onClick={closeCheckout} className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
            
            {!isSuccess ? (
              <div className="p-8">
                <div className="flex items-center gap-3 text-amber-500 mb-6 border-b border-neutral-800 pb-4">
                  <CreditCard className="w-8 h-8" />
                  <h2 className="text-xl font-bold text-white tracking-wide">Secure Checkout</h2>
                </div>
                
                <div className="mb-6 space-y-2">
                  <h3 className="text-white font-bold">{checkoutEvent.title}</h3>
                  <p className="text-neutral-400 text-sm flex items-center gap-1.5"><Calendar className="w-4 h-4"/> {checkoutEvent.date}</p>
                  <p className="text-neutral-400 text-sm flex items-center gap-1.5"><MapPin className="w-4 h-4"/> {checkoutEvent.venue}</p>
                </div>
                
                <div className="bg-neutral-950 p-4 rounded-lg border border-neutral-800 mb-6">
                   <div className="flex justify-between text-sm text-neutral-400 mb-2">
                     <span>1x General Admission</span>
                     <span>$85.00</span>
                   </div>
                   <div className="flex justify-between text-sm text-neutral-400 mb-4 pb-4 border-b border-neutral-800">
                     <span>Service Fee</span>
                     <span>$12.50</span>
                   </div>
                   <div className="flex justify-between text-lg font-bold text-white">
                     <span>Total</span>
                     <span>$97.50</span>
                   </div>
                </div>

                <form onSubmit={handleCheckout} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">Card Information (Simulated)</label>
                    <input 
                      type="text" 
                      required
                      placeholder="XXXX-XXXX-XXXX-XXXX" 
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors font-mono"
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isProcessing}
                    className="w-full py-3.5 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 uppercase tracking-widest text-sm disabled:opacity-50"
                  >
                    {isProcessing ? 'Processing...' : 'Pay $97.50'}
                    {!isProcessing && <ShieldCheck className="w-4 h-4" />}
                  </button>
                </form>
                <p className="text-center text-neutral-500 text-xs mt-4">Payments proudly secured by Stripe.</p>
              </div>
            ) : (
              <div className="p-10 text-center flex flex-col items-center">
                 <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                   <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                 </div>
                 <h2 className="text-2xl font-bold text-white mb-2">Payment Successful!</h2>
                 <p className="text-neutral-400 mb-8 leading-relaxed">
                   Your tickets for <strong>{checkoutEvent.title}</strong> have been confirmed. An email with your digital passes has been sent.
                 </p>
                 <button 
                   onClick={closeCheckout}
                   className="w-full py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-bold rounded-lg transition-colors uppercase tracking-widest text-sm border border-neutral-700"
                 >
                   Return to Events
                 </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
