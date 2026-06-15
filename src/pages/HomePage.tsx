import { Link } from 'react-router-dom';
import { ShieldCheck, Star, Calendar, Music, Lock, Heart, Award, PlayCircle, MessageSquare, ShoppingBag, Plus, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1 pb-24 bg-neutral-950">
      {/* 2. Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-neutral-900/80 to-transparent z-10" />
          {/* Stadium Energy Visual Identity / hero_image_url support */}
          <div className="w-full h-full object-cover opacity-40 bg-[url('https://images.unsplash.com/photo-1540039155732-680c74fb5ab3?q=80&w=3540&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
        </div>
        
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 uppercase"
          >
            Welcome Home, <span className="text-amber-500">Home Team.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl md:text-2xl text-neutral-300 max-w-2xl mb-10 font-medium"
          >
            Exclusive experiences, unforgettable shows, premium access, and the stories behind the songs that bring us together.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link to="/dashboard" className="w-full sm:w-auto px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(217,119,6,0.4)]">
              Join Home Team
            </Link>
            <Link to="/exclusive" className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-neutral-800 text-white font-bold rounded-lg transition-all border-2 border-white">
              Explore The Vault
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 3. Trust Banner */}
      <section className="bg-amber-500/10 border-y border-amber-500/20 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-center text-amber-500 font-bold text-xs sm:text-sm uppercase tracking-wider">
            <span className="flex items-center gap-2 whitespace-nowrap"><ShieldCheck className="w-4 h-4" /> Secure Payments Through Stripe</span>
            <span className="hidden md:block text-amber-500/50">•</span>
            <span className="flex items-center gap-2 whitespace-nowrap">No Gift Cards Accepted</span>
            <span className="hidden md:block text-amber-500/50">•</span>
            <span className="flex items-center gap-2 whitespace-nowrap">No Cryptocurrency Accepted</span>
            <span className="hidden lg:block text-amber-500/50">•</span>
            <span className="flex items-center gap-2 whitespace-nowrap">No Payments Through Direct Messages</span>
            <span className="hidden lg:block text-amber-500/50">•</span>
            <span className="flex items-center gap-2 whitespace-nowrap">Official Communications Only</span>
          </div>
        </div>
      </section>

      {/* 4. Membership Benefits */}
      <section className="py-24 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Home Team Membership Benefits</h2>
            <p className="mt-4 text-neutral-400">Join the official enterprise superfan community. Choose the tier that's right for you.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl flex flex-col items-center text-center hover:border-neutral-700 transition-colors">
              <Star className="h-10 w-10 text-amber-500 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">VIP Insider</h3>
              <p className="text-neutral-400 text-sm">Premium access. Early tickets, Vault access, VIP membership badge, limited merchandise drops, priority support, and behind-the-scenes.</p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl flex flex-col items-center text-center hover:border-neutral-700 transition-colors">
              <Calendar className="h-10 w-10 text-amber-500 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Event Pre-Sales</h3>
              <p className="text-neutral-400 text-sm">Get early access to tour tickets, meet and greets, and exclusive digital event registrations before the general public.</p>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl flex flex-col items-center text-center hover:border-neutral-700 transition-colors">
              <Lock className="h-10 w-10 text-amber-500 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">The Vault</h3>
              <p className="text-neutral-400 text-sm">Behind-the-scenes videos, photo galleries, and unreleased audio securely gated for members. Access the stories behind the songs.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
             <Link to="/membership" className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-bold uppercase tracking-widest text-sm">
                View All Tiers & Pricing <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
        </div>
      </section>

      {/* 5. Upcoming Events */}
      <section className="py-24 bg-[#111110] border-t border-neutral-900 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-4 opacity-[0.03] bg-[url('https://images.unsplash.com/photo-1540039155732-680c74fb5ab3?q=80&w=3540&auto=format&fit=crop')] bg-cover w-full h-full mix-blend-overlay pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white mb-2">2026 Tour Dates</h2>
              <p className="text-neutral-400">See Thomas Rhett live on tour. VIPs get first access to tickets.</p>
            </div>
            <Link to="/events" className="px-6 py-3 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white font-medium rounded-lg transition-colors flex items-center gap-2">
              View All Dates <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-4">
            {/* Truncated seed data sample for preview */}
            {[
              { title: 'Headline Show with Niall Horan', date: 'JUL 09, 2026', venue: 'Geodis Park, Nashville TN' },
              { title: 'The Soundtrack to Life Tour', date: 'JUL 11, 2026', venue: 'Bon Secours Wellness Arena, Greenville SC' },
              { title: 'The Soundtrack to Life Tour', date: 'JUL 16, 2026', venue: 'The Meadows Music Theatre, Hartford CT' },
            ].map((event, i) => (
               <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 bg-neutral-950 border border-neutral-800 rounded-xl hover:border-amber-500/50 transition-colors group">
                  <div className="flex items-center gap-6 mb-4 sm:mb-0">
                    <div className="flex flex-col items-center justify-center bg-neutral-900 px-4 py-2 rounded-lg border border-neutral-800 group-hover:border-amber-500/30">
                      <span className="text-amber-500 font-bold uppercase text-sm">{event.date.split(' ')[0]}</span>
                      <span className="text-white font-bold text-xl">{event.date.split(' ')[1].replace(',', '')}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors">{event.title}</h3>
                      <p className="text-neutral-400 flex items-center gap-2 mt-1">
                        <Calendar className="w-4 h-4" /> {event.venue}
                      </p>
                    </div>
                  </div>
                  <Link to="/events" className="w-full sm:w-auto px-6 py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-lg transition-colors text-sm text-center">
                    RSVP / Tickets
                  </Link>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Exclusive Content Preview */}
      <section className="py-24 bg-neutral-950 border-t border-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
                <Lock className="w-8 h-8 text-amber-500" /> The Vault
              </h2>
              <p className="text-neutral-400">Exclusive videos, unreleased audio, and behind-the-scenes content.</p>
            </div>
            <Link to="/exclusive" className="px-6 py-3 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white font-medium rounded-lg transition-colors flex items-center gap-2">
              Unlock More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Making of About a Woman', type: 'Behind the Scenes', tier: 'GOLD' },
              { title: 'Live from Nashville (Acoustic)', type: 'Unreleased Audio', tier: 'VIP' },
              { title: 'The Soundtrack to Life Tour Diary', type: 'Video Series', tier: 'SILVER' },
            ].map((content, i) => (
              <div key={i} className="group relative bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all cursor-pointer">
                 <div className="aspect-video bg-neutral-800 relative flex items-center justify-center">
                    <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?q=80&w=3549&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                    <PlayCircle className="w-12 h-12 text-white/80 z-20 group-hover:text-white transition-colors group-hover:scale-110 duration-300" />
                 </div>
                 <div className="p-5 relative z-20">
                    <div className="text-xs font-bold text-amber-500 tracking-widest uppercase mb-2">Requires {content.tier}</div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-amber-500 transition-colors">{content.title}</h3>
                    <p className="text-sm text-neutral-400">{content.type}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Community Highlights */}
      <section className="py-24 bg-[#111110] border-t border-neutral-900 relative">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Home Team Community</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">Connect with fans around the world. Share your concert experiences, discuss the discography, and meet new friends.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Concert Meetups', icon: Calendar, text: 'Find fans attending your local show.' },
                { title: 'Album Discussions', icon: Music, text: 'Dive deep into the lyrics and production.' },
                { title: 'Fan Stories', icon: Heart, text: 'Share how the music has impacted you.' },
              ].map((board, i) => (
                 <div key={i} className="bg-neutral-950 border border-neutral-800 p-6 rounded-xl hover:border-neutral-700 transition-colors text-center">
                    <div className="inline-flex p-3 bg-neutral-900 rounded-full mb-4 text-amber-500">
                      <board.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{board.title}</h3>
                    <p className="text-sm text-neutral-400 mb-6">{board.text}</p>
                    <Link to="/community" className="text-amber-500 text-sm font-bold tracking-widest uppercase hover:text-amber-400">Join the Conversation</Link>
                 </div>
              ))}
            </div>
         </div>
      </section>

      {/* 8. Featured Merchandise */}
      <section className="py-24 bg-neutral-950 border-t border-neutral-900">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-10">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2"><ShoppingBag className="w-6 h-6 text-amber-500" /> Member Exclusive Merch</h2>
              <button className="text-sm text-neutral-400 hover:text-white uppercase tracking-widest font-bold">Shop All</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
               {[1,2,3,4].map((i) => (
                 <div key={i} className="group cursor-pointer">
                   <div className="aspect-square bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden mb-4 relative flex items-center justify-center">
                     <span className="text-neutral-600 text-sm">Merch Item {i}</span>
                     <div className="absolute top-2 left-2 bg-amber-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">VIP Only</div>
                   </div>
                   <h3 className="text-white font-medium text-sm group-hover:text-amber-500 transition-colors">Limited Edition Tee {i}</h3>
                   <p className="text-neutral-500 text-sm">$35.00</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* About Thomas - Americana Vibe */}
      <section className="py-24 bg-[#111110] relative overflow-hidden border-t border-neutral-900">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1510915361894-faa88418ec25?q=80&w=3400&auto=format&fit=crop')] bg-cover bg-center grayscale" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-8 font-serif">About Thomas Rhett</h2>
          <div className="space-y-6 text-lg text-neutral-300 leading-relaxed max-w-3xl mx-auto">
            <p>
              Thomas Rhett dropped out of Lipscomb University at age twenty to pursue songwriting full time. Before becoming a superstar recording artist, he wrote songs for some of country music's biggest names.
            </p>
            <p>
              His talent for turning everyday moments into unforgettable anthems transformed him into one of the defining voices of modern country music.
            </p>
            <p>
              Known for explosive live performances and deeply personal storytelling, Thomas Rhett continues to bring fans together through authenticity, joy, and family-centered values.
            </p>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-neutral-900 border-y border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-amber-500 mb-4" />
              <div className="text-white font-bold text-lg mb-1">2020 ACM</div>
              <div className="text-neutral-400 text-sm">Entertainer of the Year</div>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-amber-500 mb-4" />
              <div className="text-white font-bold text-lg mb-1">2021 ACM</div>
              <div className="text-neutral-400 text-sm">Male Artist of the Year</div>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-amber-500 mb-4" />
              <div className="text-white font-bold text-lg mb-1">Multiple</div>
              <div className="text-neutral-400 text-sm">Grammy Nominations</div>
            </div>
            <div className="flex flex-col items-center">
              <Music className="w-10 h-10 text-amber-500 mb-4" />
              <div className="text-white font-bold text-lg mb-1">20+</div>
              <div className="text-neutral-400 text-sm">Billboard #1 Singles</div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / 9. Fan Testimonials */}
      <section className="py-24 bg-neutral-950 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-20">
          <Heart className="w-12 h-12 text-amber-500 mx-auto mb-8" />
          <h2 className="text-3xl font-bold tracking-tight text-white mb-6">The Home Team Philosophy</h2>
          <div className="text-xl text-neutral-400 leading-relaxed italic border-l-4 border-amber-500 pl-6 py-2 mx-auto text-left">
            "The Home Team is more than a fan club. It is a community. Fans celebrate milestones together, support one another, and share a love for music that feels like home. The Home Team experience should prioritize belonging over transactions."
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <h3 className="text-xl font-bold text-white mb-10">Fan Stories</h3>
           <div className="grid md:grid-cols-3 gap-6 text-left">
             {[
               { name: "Sarah J.", role: "Founding Member", quote: "Being part of the Home Team means I always have friends at every show. VIP access is just the cherry on top!" },
               { name: "Mike T.", role: "Road Warrior", quote: "The pre-sale tickets saved me so much hassle. I've been to 5 shows so far!" },
               { name: "Emily R.", role: "VIP Insider", quote: "The vault content makes you really appreciate the songwriting process. Worth every penny." },
             ].map((t, i) => (
                <div key={i} className="bg-[#111110] p-6 rounded-xl border border-neutral-900 border-t-amber-500/50">
                  <p className="text-neutral-400 text-sm italic mb-4">"{t.quote}"</p>
                  <div className="text-white font-bold">{t.name}</div>
                  <div className="text-amber-500 text-xs uppercase tracking-widest">{t.role}</div>
                </div>
             ))}
           </div>
        </div>
      </section>

      {/* 10. Newsletter Signup */}
      <section className="py-24 bg-[#111110] border-t border-neutral-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-amber-500/5" />
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Stay in the loop.</h2>
          <p className="text-neutral-400 mb-8 max-w-lg mx-auto">Sign up for the Home Team newsletter to get free updates on tours, releases, and exclusive community news.</p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
             <input type="email" placeholder="Enter your email address" className="flex-1 bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 transition-colors" />
             <button type="button" className="px-6 py-3 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-neutral-200 transition-colors whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="py-24 bg-neutral-950 border-t border-neutral-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
             {[
               { q: 'How does VIP ticketing work?', a: 'VIP tier members get first access to pre-sale codes via email and the dashboard before public on-sale.' },
               { q: 'Can I upgrade my tier later?', a: 'Yes. You can manage your subscription via your Member Dashboard at any time. Stripe will prorate the difference.' },
               { q: 'Is the Vault content downloadable?', a: 'Vault content is stream-only to protect exclusives, but VIP members may occasionally receive digital downloads.' },
             ].map((faq, i) => (
                <div key={i} className="bg-[#111110] border border-neutral-900 p-6 rounded-xl">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-amber-500" /> {faq.q}</h4>
                  <p className="text-neutral-400 text-sm ml-7">{faq.a}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

    </div>
  );
}
