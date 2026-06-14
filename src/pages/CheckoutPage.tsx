import { useParams, Link } from 'react-router-dom';
import { ShieldCheck, Info, UploadCloud } from 'lucide-react';
import { useState } from 'react';

const TIERS: Record<string, { name: string; price: number }> = {
  silver: { name: 'Silver', price: 9 },
  gold: { name: 'Gold', price: 19 },
  vip: { name: 'VIP', price: 49 },
};

export default function CheckoutPage() {
  const { tier } = useParams<{ tier: string }>();
  const [paymentMethod, setPaymentMethod] = useState<'steam' | 'amazon'>('steam');
  const [code, setCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const selectedTier = tier && TIERS[tier] ? TIERS[tier] : null;

  if (!selectedTier) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-20 px-4 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Invalid Membership Selection</h2>
        <Link to="/membership" className="text-amber-500 hover:text-amber-400 font-medium">
          &larr; Return to Memberships
        </Link>
      </div>
    );
  }

  const basePrice = selectedTier.price;
  const discount = basePrice * 0.05;
  const finalPrice = basePrice - discount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API delay for backend manual review submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
    }, 1500);
  };

  if (success) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 w-full text-center">
        <div className="bg-neutral-900 border border-emerald-500/50 rounded-2xl p-8 md:p-12 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
          <div className="w-16 h-16 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Verification Submitted</h2>
          <p className="text-neutral-400 mb-8 max-w-md mx-auto">
            Your {paymentMethod === 'steam' ? 'Steam' : 'Amazon'} card code has been securely submitted to the backend. Our admin team will manually verify the code within 1-2 hours.
          </p>
          <p className="text-amber-500 font-medium mb-8">
            You will receive an email notification when your {selectedTier.name} membership is active.
          </p>
          <Link to="/dashboard" className="py-3 px-8 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg font-medium transition-colors border border-neutral-700">
            Return to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      <div className="mb-8">
        <Link to="/membership" className="text-sm font-medium text-neutral-500 hover:text-neutral-400 transition-colors uppercase tracking-widest">
          &larr; Back to Plans
        </Link>
        <h1 className="text-3xl font-bold text-white mt-4 uppercase">Secure Checkout</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Column: Partnership & Order Detail */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/5 border border-amber-500/30 rounded-2xl p-6 shadow-lg shadow-amber-500/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <ShieldCheck className="w-32 h-32 text-amber-500" />
            </div>
            <h3 className="text-amber-500 font-bold mb-2 uppercase tracking-wide">Official Partnership</h3>
            <p className="text-sm text-neutral-300 leading-relaxed relative z-10">
              Thomas Rhett's Home Team has temporarily partnered directly with <strong>Steam</strong> and <strong>Amazon</strong> to ensure global fan accessibility while our primary payment processors undergo routine maintenance.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 bg-amber-500 text-black px-3 py-1 rounded-md text-xs font-bold uppercase">
              <StarIcon /> 5% Partnership Discount Applied
            </div>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white mb-4 border-b border-neutral-800 pb-2">Order Summary</h2>
            <div className="flex justify-between text-neutral-300 mb-3">
              <span>{selectedTier.name} Membership (Monthly)</span>
              <span>${basePrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-amber-500 mb-4 pb-4 border-b border-neutral-800 text-sm">
              <span>Partnership Discount (5%)</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-white font-bold text-xl">
              <span>Total</span>
              <span>${finalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-neutral-500 mt-4 flex items-center gap-1.5">
              <Info className="w-4 h-4" /> Please submit a card with a balance covering the total amount. Excess balances will be credited to your fan account for future merch purchases.
            </p>
          </div>
        </div>

        {/* Right Column: Payment Form */}
        <div>
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8">
            <h2 className="text-lg font-bold text-white mb-6">Payment Method</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('steam')}
                  className={`p-4 border rounded-xl flex flex-col items-center justify-center gap-2 transition-all ${
                    paymentMethod === 'steam' ? 'bg-amber-500/10 border-amber-500 text-amber-500' : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <span className="font-bold">Steam Wallet</span>
                  <span className="text-xs opacity-80">(Global)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('amazon')}
                  className={`p-4 border rounded-xl flex flex-col items-center justify-center gap-2 transition-all ${
                    paymentMethod === 'amazon' ? 'bg-amber-500/10 border-amber-500 text-amber-500' : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <span className="font-bold">Amazon Gift</span>
                  <span className="text-xs opacity-80">(Global)</span>
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                   Enter 15-digit {paymentMethod === 'steam' ? 'Steam' : 'Amazon'} E-Code / PIN
                </label>
                <input 
                  type="text" 
                  required
                  value={code}
                  onChange={(e) => setCode(e.target.value.toUpperCase())}
                  placeholder={`XXXX-XXXX-XXXX-XXXX`}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-colors uppercase tracking-widest font-mono"
                />
              </div>

              <div className="p-4 bg-neutral-950 border border-neutral-800 rounded-lg flex gap-3 text-sm text-neutral-400">
                <UploadCloud className="w-5 h-5 text-neutral-500 shrink-0" />
                <p>Physical card uploads are temporarily processed via email. If you have a physical receipt, please submit the code above and email the photo receipt to billing@thomasrhetthub.com.</p>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || code.length < 10}
                className="w-full py-4 px-4 bg-amber-600 hover:bg-amber-500 text-white rounded-lg font-bold transition-all shadow-lg flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Verifying Securely...' : `Submit Payment For Verification`}
                <ShieldCheck className="w-5 h-5" />
              </button>
            </form>
            
            <p className="text-xs text-center text-neutral-500 mt-6">
              USDT (Tether) crypto payments are being configured and will be available as an additional method shortly.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
    </svg>
  )
}
