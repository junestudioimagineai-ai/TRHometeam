import { Lock, PlayCircle, ShieldCheck, Music } from 'lucide-react';
import { useAuth } from '../lib/AuthContext';
import { Link } from 'react-router-dom';

export default function ExclusivePage() {
  const { profile } = useAuth();
  const isLocked = !profile || profile.membershipTier === 'free';

  const exclusiveVideos = [
    { id: 1, title: 'Studio Sessions: Track 1 Vocals', desc: 'Watch Thomas record the lead vocals for the upcoming single.', tier: 'silver' },
    { id: 2, title: 'Tour Bus Tour 2026', desc: 'An exclusive look inside the new tour bus before we hit the road.', tier: 'gold' },
    { id: 3, title: 'Acoustic Demo: Unreleased Song', desc: 'Listen to a raw acoustic demo of an unreleased track written last night.', tier: 'vip' },
  ];

  const discography = [
    { year: '2024', title: 'About a Woman', albumCoverUrl: '' },
    { year: '2022', title: 'Where We Started', albumCoverUrl: '' },
    { year: '2021', title: 'Country Again: Side A', albumCoverUrl: '' },
    { year: '2019', title: 'Center Point Road', albumCoverUrl: '' },
    { year: '2017', title: 'Life Changes', albumCoverUrl: '' },
    { year: '2015', title: 'Tangled Up', albumCoverUrl: '' },
    { year: '2013', title: 'It Goes Like This', albumCoverUrl: '' },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 w-full space-y-16">
      
      {/* The Vault Section */}
      <section>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">The Vault</h1>
            <p className="text-neutral-400">Unreleased tracks, behind-the-scenes videos, and exclusive Home Team access.</p>
          </div>
          <div className="flex items-center gap-2 bg-amber-500/10 text-amber-500 px-3 py-1.5 rounded-lg border border-amber-500/20 text-sm font-medium h-fit">
            <ShieldCheck className="w-4 h-4" />
            Member Secure Area
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exclusiveVideos.map((video) => (
            <div key={video.id} className="group relative bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden transition-all hover:border-neutral-700">
              <div className="aspect-video bg-neutral-800 relative flex items-center justify-center">
                {/* Image Background placeholder */}
                <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?q=80&w=3549&auto=format&fit=crop')] bg-cover bg-center" />
                
                {isLocked ? (
                  <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center p-4 text-center">
                    <div className="bg-neutral-900 p-3 rounded-full mb-3 border border-neutral-800 shadow-xl">
                      <Lock className="w-6 h-6 text-amber-500" />
                    </div>
                    <span className="text-white font-bold text-sm">Members Only</span>
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-black/20 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <PlayCircle className="w-12 h-12 text-white" />
                  </div>
                )}
              </div>

              <div className="p-5 relative z-20">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-xs text-amber-500 font-medium tracking-wider uppercase">• {video.tier} TIER</div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">{video.title}</h3>
                <p className="text-sm text-neutral-400 line-clamp-2">{video.desc}</p>
              </div>

              {isLocked && (
                <div className="absolute inset-0 z-30 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link to="/membership" className="w-full py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-lg text-sm font-medium text-center transition-colors shadow-lg">
                    Upgrade to Unlock
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Discography Section */}
      <section>
        <div className="mb-8 border-b border-neutral-800 pb-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <Music className="w-6 h-6 text-amber-500" /> Official Discography
          </h2>
          <p className="text-neutral-400 mt-2">Explore the albums and connect with the community.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 gap-y-10">
          {discography.map((album, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="aspect-square bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden mb-4 relative shadow-lg transition-transform group-hover:-translate-y-2">
                {album.albumCoverUrl ? (
                  <img src={album.albumCoverUrl} alt={album.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center opacity-50">
                     <Music className="w-12 h-12 text-neutral-700" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10" />
              </div>
              <h3 className="text-white font-bold text-sm sm:text-base leading-tight mb-1 group-hover:text-amber-500 transition-colors">{album.title}</h3>
              <p className="text-neutral-500 text-xs sm:text-sm font-medium">{album.year}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
