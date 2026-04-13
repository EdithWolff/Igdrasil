import React, { useState } from 'react';
import { ArrowRight, Check, Loader2 } from 'lucide-react';

const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="w-full max-w-md mx-auto p-6 bg-white border border-black/10 rounded-xl shadow-sm animate-float">
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-igdrasil-accent/20 flex items-center justify-center text-igdrasil-accent mb-2">
            <Check size={24} />
          </div>
          <h3 className="text-xl font-light text-gray-900 tracking-tight">You are on the list.</h3>
          <p className="text-sm font-light text-gray-600">Keep an eye on your inbox. The roots are spreading.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto relative group">
        {/* Glow Effect behind form */}
        <div className="absolute -inset-1 bg-gradient-to-r from-igdrasil-accent/0 via-igdrasil-accent/20 to-igdrasil-accent/0 rounded-lg blur opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
        
        <form onSubmit={handleSubmit} className="relative flex items-center shadow-sm rounded-lg">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email signature*"
            className="w-full bg-white border border-black/10 text-gray-900 placeholder-gray-400 rounded-l-lg py-4 px-6 focus:outline-none focus:border-igdrasil-accent/50 focus:ring-1 focus:ring-igdrasil-accent/50 transition-all text-sm font-light tracking-wide"
            disabled={status === 'loading'}
            required
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-gray-900 text-white font-medium py-4 px-6 rounded-r-lg hover:bg-gray-800 transition-colors flex items-center justify-center min-w-[120px] disabled:opacity-70 disabled:cursor-not-allowed border border-gray-900"
          >
            {status === 'loading' ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>
                <span className="mr-2 text-xs font-medium uppercase tracking-widest">REQUEST</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>
    </div>
  );
};

export default WaitlistForm;