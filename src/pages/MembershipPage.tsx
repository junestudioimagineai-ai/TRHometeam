import { useState } from 'react';
import { Check, ShieldCheck, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { useAuth } from '../lib/AuthContext';
import { Link } from 'react-router-dom';

const TIERS = [
  {
    name: 'Free',
    role: 'Guest Account',
    price: { monthly: 0, annual: 0 },
    description: 'Basic access to the public fan hub.',
    features: [
      'Access to public news',
      'View public tour dates',
      'Basic profile',
    ],
    buttonText: 'Current Plan',
    popular: false,
  },
  {
    name: 'Silver',
    role: 'Verified Fan',
    price: { monthly: 9, annual: 99 },
    description: 'Perfect for staying connected with the Home Team.',
    features: [
      'Everything in Free',
      'Exclusive community board access',
      'Early access to standard merch',
      'Monthly digital downloads',
    ],
    buttonText: 'Join Silver',
    popular: false,
  },
  {
    name: 'Gold',
    role: 'Premium Member',
    price: { monthly: 19, annual: 199 },
    description: 'The ultimate fan experience with pre-sale access.',
    features: [
      'Everything in Silver',
      'Tour pre-sale ticket access',
      'Exclusive behind-the-scenes video',
      '10% off all merchandise',
      'Exclusive Gold-tier merch drops'
    ],
    buttonText: 'Join Gold',
    popular: true,
  },
  {
    name: 'VIP',
    role: 'All-Access Pass',
    price: { monthly: 49, annual: 499 },
    description: 'Meet & greet opportunities and ultimate access.',
    features: [
      'Everything in Gold',
      'Meet & Greet lottery entries',
      'Virtual Q&A sessions with Thomas Rhett',
      'Free shipping on all merch',
      'Personalized video message lottery'
    ],
    buttonText: 'Join VIP',
    popular: false,
  }
];

export default function MembershipPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const { user } = useAuth();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 w-full">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4 uppercase">
          Home Team <span className="text-amber-500">Memberships</span>
        </h1>
        <p className="text-lg text-neutral-400">
          Choose your level of access. Unlock exclusive content, pre-sale tickets, and join the official community. 
        </p>
        
        {/* Toggle */}
        <div className="mt-8 flex items-center justify-center space-x-4">
          <span className={`text-sm ${!isAnnual ? 'text-white font-semibold' : 'text-neutral-400'}`}>Monthly</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-neutral-900 transition-colors"
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-6' : 'translate-x-1'}`}
            />
          </button>
          <span className={`text-sm ${isAnnual ? 'text-white font-semibold' : 'text-neutral-400'}`}>
            Annually <span className="text-amber-500 text-xs ml-1">(Save ~15%)</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {TIERS.map((tier, index) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative flex flex-col p-8 rounded-2xl border ${tier.popular ? 'bg-neutral-900 border-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.1)]' : 'bg-neutral-900/50 border-neutral-800'}`}
          >
            {tier.popular && (
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <span className="bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase flex items-center gap-1">
                  <Star className="w-3 h-3 fill-black" /> Most Popular
                </span>
              </div>
            )}
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
              <p className="text-sm text-amber-500 font-medium mb-4">{tier.role}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">
                  ${isAnnual ? tier.price.annual : tier.price.monthly}
                </span>
                {tier.price.monthly > 0 && (
                  <span className="text-neutral-400">/{isAnnual ? 'yr' : 'mo'}</span>
                )}
              </div>
              <p className="mt-4 text-sm text-neutral-400 h-10">{tier.description}</p>
            </div>

            <ul className="flex-1 space-y-4 mb-8">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="text-sm text-neutral-300">{feature}</span>
                </li>
              ))}
            </ul>

            {user ? (
              <Link 
                to={tier.name.toLowerCase() === 'free' ? '/dashboard' : `/checkout/${tier.name.toLowerCase()}`}
                className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-all ${tier.popular ? 'bg-amber-600 hover:bg-amber-500 text-white' : tier.price.monthly === 0 ? 'bg-neutral-800 text-neutral-500' : 'bg-white hover:bg-neutral-200 text-black'}`}
              >
                {tier.price.monthly === 0 ? 'Active Plan' : tier.buttonText}
              </Link>
            ) : (
              <Link 
                to="/login"
                className={`w-full text-center py-3 px-4 rounded-lg font-semibold transition-all ${tier.popular ? 'bg-amber-600 hover:bg-amber-500 text-white' : 'bg-white hover:bg-neutral-200 text-black'}`}
              >
                Sign In to Join
              </Link>
            )}
          </motion.div>
        ))}
      </div>

      {/* Stripe & Security Notice (Per User Request to keep it clean and stripe-focused) */}
      <div className="mt-20 max-w-4xl mx-auto bg-neutral-900 border border-neutral-800 rounded-2xl p-8 md:p-12 text-center shadow-xl">
        <ShieldCheck className="h-12 w-12 text-amber-500 mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-white mb-4">Secure Checkout Environment</h2>
        <p className="text-neutral-400 mb-6 text-lg">
          For fan safety, checkout processing is securely managed by <strong>Stripe</strong>. 
          <br className="hidden md:block" />
          <em>(Note: Active processing is temporarily paused for routine system maintenance).</em>
        </p>
        
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 text-left inline-block w-full max-w-2xl mx-auto">
          <h3 className="text-red-500 font-semibold mb-3 flex items-center gap-2">
            <span className="bg-red-500 w-2 h-2 rounded-full animate-pulse"></span> Important Anti-Scam Notice
          </h3>
          <ul className="text-sm text-neutral-300 space-y-2 list-disc list-inside">
            <li>We <strong>never</strong> accept payments via Cryptocurrency (USDT, BTC, etc).</li>
            <li>We <strong>never</strong> accept Steam cards, Amazon gift cards, or Apple gift cards.</li>
            <li>We <strong>never</strong> request payments through Telegram, WhatsApp, direct messages, or bank transfers.</li>
            <li>All membership upgrades will strictly happen on this domain via our official Stripe checkout portal once maintenance completes.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
