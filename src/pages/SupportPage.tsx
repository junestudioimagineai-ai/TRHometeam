export default function SupportPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 w-full">
      <h1 className="text-3xl font-bold text-white mb-2">Fan Support</h1>
      <p className="text-neutral-400 mb-8">Need help with your membership or orders? We're here for you.</p>
      
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 md:p-8">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">Full Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-colors"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">Email Address</label>
            <input 
              type="email" 
              id="email" 
              className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-colors"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-neutral-300 mb-2">How can we help?</label>
            <select 
              id="category" 
              className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-colors appearance-none"
            >
              <option>Membership Support</option>
              <option>Order/Merch Issue</option>
              <option>Ticketing/Events</option>
              <option>Report a Scam</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">Message</label>
            <textarea 
              id="message" 
              rows={5}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-colors resize-none"
              placeholder="Please describe your issue..."
            />
          </div>
          <button type="submit" className="w-full py-3 px-4 bg-amber-600 hover:bg-amber-500 text-white rounded-lg font-medium transition-colors">
            Submit Ticket
          </button>
        </form>
      </div>

      <div className="mt-8 bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
        <h3 className="text-amber-500 font-semibold mb-2">Anti-Scam Notice</h3>
        <p className="text-sm text-neutral-300">
          Official Thomas Rhett support will NEVER ask for your password, credit card details over email, or request payments via gift cards, wire transfers, or crypto. All official communication comes from our verified domain.
        </p>
      </div>
    </div>
  );
}
