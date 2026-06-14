import { Link } from 'react-router-dom';
import { ShieldCheck, Star, Calendar, Music, Lock, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1 pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-neutral-900">
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-neutral-900/80 to-transparent z-10" />
          {/* Real deployment would use an actual hero image of Thomas Rhett */}
          <div className="w-full h-full object-cover opacity-30 bg-[url('https://images.unsplash.com/photo-1540039155732-680c74fb5ab3?q=80&w=3540&auto=format&fit=crop')] bg-cover bg-center" />
        </div>
        
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 uppercase"
          >
            Welcome to the <br /> <span className="text-amber-500">Home Team</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl md:text-2xl text-neutral-300 max-w-2xl mb-10"
          >
            The official enterprise superfan community. Exclusive content, pre-sale tickets, limited merchandise, and direct connection.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link to="/dashboard" className="w-full sm:w-auto px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-amber-600/25">
              Join Home Team VIP
            </Link>
            <Link to="/exclusive" className="w-full sm:w-auto px-8 py-4 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-lg transition-all border border-neutral-700">
              Explore Content
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-amber-500/10 border-y border-amber-500/20 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="flex items-center justify-center bg-amber-500/20 p-3 rounded-full">
              <ShieldCheck className="h-8 w-8 text-amber-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Official & Secure Platform</h3>
              <p className="text-neutral-400 text-sm max-w-3xl mt-1">
                We never request payments through direct messages, gift cards, crypto, or random cash transfers. All payments are processed securely through Stripe via our official domain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Outline */}
      <section className="py-24 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Platform Benefits</h2>
            <p className="mt-4 text-neutral-400">Everything you get with your Home Team membership.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl flex flex-col items-center text-center hover:border-neutral-700 transition-colors">
              <Star className="h-10 w-10 text-amber-500 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">VIP Memberships</h3>
              <p className="text-neutral-400">Access tiered memberships through Stripe subscriptions for monthly or annual exclusive perks.</p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl flex flex-col items-center text-center hover:border-neutral-700 transition-colors">
              <Calendar className="h-10 w-10 text-amber-500 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Event Pre-Sales</h3>
              <p className="text-neutral-400">Get early access to tour tickets, meet and greets, and exclusive digital event registrations.</p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl flex flex-col items-center text-center hover:border-neutral-700 transition-colors">
              <Lock className="h-10 w-10 text-amber-500 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Exclusive Content</h3>
              <p className="text-neutral-400">Behind-the-scenes videos, photo galleries, and unreleased audio securely gated for members.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
