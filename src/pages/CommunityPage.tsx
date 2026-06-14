import { useAuth } from '../lib/AuthContext';
import { Link } from 'react-router-dom';
import { MessageSquare, Heart, ShieldCheck } from 'lucide-react';

export default function CommunityPage() {
  const { profile } = useAuth();
  
  const hasAccess = profile?.membershipTier === 'vip' || profile?.membershipTier === 'gold' || profile?.membershipTier === 'silver';

  const posts = [
    {
      id: 1,
      author: 'Sarah Jenkins',
      badge: 'VIP Member',
      time: '2 hours ago',
      content: 'Just got my tickets for the Nashville show! Who else is going to be in the pit?',
      likes: 24,
      comments: 8,
    },
    {
      id: 2,
      author: 'Mike R.',
      badge: 'Gold Member',
      time: '5 hours ago',
      content: 'That acoustic version of "Die a Happy Man" on the exclusive tab is unbelievable. TR sounding better than ever!',
      likes: 45,
      comments: 12,
    },
    {
      id: 3,
      author: 'Thomas Rhett Official',
      badge: 'Admin',
      time: '1 day ago',
      content: 'Hey Home Team! Dropping some new merch tomorrow specifically for VIP/Gold members. Keep an eye out. 🙏',
      likes: 890,
      comments: 124,
      isAdmin: true,
    }
  ];

  if (!hasAccess) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 w-full">
        <h1 className="text-3xl font-bold text-white mb-2">Community</h1>
        <p className="text-neutral-400 mb-8">Connect with other Thomas Rhett fans.</p>
        
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 text-center flex flex-col items-center justify-center min-h-[400px]">
          <ShieldCheck className="w-12 h-12 text-amber-500 mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Members Only Area</h2>
          <p className="text-neutral-400 max-w-md mx-auto mb-6">
            The Home Team community board is an exclusive, secure space for verified members. Upgrade your membership to join the conversation without scammers or bots.
          </p>
          <Link to="/membership" className="py-3 px-8 bg-amber-600 hover:bg-amber-500 text-white rounded-lg font-medium transition-colors shadow-lg">
            Upgrade Membership
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 w-full">
      <div className="flex justify-between items-end mb-8 border-b border-neutral-800 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Home Team Board</h1>
          <p className="text-neutral-400">Exclusive community for verified members.</p>
        </div>
      </div>

      {/* Create Post */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 mb-8">
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold shrink-0">
            {profile?.fullName?.charAt(0) || 'F'}
          </div>
          <input 
            type="text" 
            placeholder="Share something with the community..." 
            className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 focus:outline-none focus:border-amber-500 text-white transition-colors"
          />
        </div>
        <div className="flex justify-end mt-4">
          <button className="py-1.5 px-4 bg-amber-600 hover:bg-amber-500 text-white rounded-lg font-medium transition-colors text-sm">
            Post
          </button>
        </div>
      </div>

      {/* Feed */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className={`bg-neutral-900 border ${post.isAdmin ? 'border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.05)]' : 'border-neutral-800'} rounded-xl p-5`}>
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-3 items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${post.isAdmin ? 'bg-amber-500' : 'bg-neutral-700'}`}>
                   {post.author.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">{post.author}</span>
                    <span className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded text-black ${post.isAdmin ? 'bg-amber-500' : 'bg-neutral-400'}`}>
                      {post.badge}
                    </span>
                  </div>
                  <div className="text-xs text-neutral-500 mt-0.5">{post.time}</div>
                </div>
              </div>
            </div>
            
            <p className="text-neutral-300 whitespace-pre-line mb-4">
              {post.content}
            </p>
            
            <div className="flex items-center gap-6 pt-4 border-t border-neutral-800/50 text-neutral-500">
              <button className="flex items-center gap-1.5 hover:text-amber-500 transition-colors text-sm">
                <Heart className="w-4 h-4" /> {post.likes}
              </button>
              <button className="flex items-center gap-1.5 hover:text-amber-500 transition-colors text-sm">
                <MessageSquare className="w-4 h-4" /> {post.comments} Comment{post.comments !== 1 && 's'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
