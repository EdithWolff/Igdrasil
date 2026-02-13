import React, { useState } from 'react';
import { ArrowRight, Check, Loader2 } from 'lucide-react';

const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const response = await fetch('https://formspree.io/f/xjgeypgo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('idle');
        alert('Something went wrong. Please try again.');
      }
    } catch {
      setStatus('idle');
      alert('Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="w-full max-w-md mx-auto p-6 bg-igdrasil-accent/10 border border-igdrasil-accent/20 rounded-xl backdrop-blur-sm animate-float">
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-igdrasil-accent/20 flex items-center justify-center text-igdrasil-accent mb-2">
            <Check size={24} />
          </div>
          <h3 className="text-xl font-light text-white">You are on the list.</h3>
          <p className="text-sm text-gray-400">Keep an eye on your inbox. The roots are spreading.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-igdrasil-accent/0 via-igdrasil-accent/30 to-igdrasil-accent/0 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        <form onSubmit={handleSubmit} className="relative flex items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter your email signature"
            className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-l-lg py-4 px-6 focus:outline-none focus:border-igdrasil-accent/50 focus:bg-white/10 transition-all text-sm tracking-wide backdrop-blur-sm"
            disabled={status === 'loading'}
            required
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-white text-black font-medium py-4 px-6 rounded-r-lg hover:bg-gray-200 transition-colors flex items-center justify-center min-w-[120px] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>
                <span className="mr-2 text-sm tracking-wide">REQUEST</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>
        <p className="text-center text-[10px] text-gray-600 uppercase tracking-widest mt-4">
          Limited spots available for batch #01
        </p>
    </div>
  );
};

export default WaitlistForm;
