import React, { useState, useEffect } from 'react';
import OrganicBackground from './components/OrganicBackground';
import Logo from './components/Logo';
import WaitlistForm from './components/WaitlistForm';
import { Lock, Shield, Zap, X } from 'lucide-react';

const TermsContent = () => (
  <div className="space-y-6 text-sm text-gray-300 font-sans">
    <h2 className="text-2xl font-light text-white mb-6 tracking-tight">Legal Information</h2>
    
    <div className="space-y-3">
      <h3 className="text-igdrasil-accent font-mono text-xs uppercase tracking-wider">01. Privacy Policy</h3>
      <p className="font-medium text-white">At Igdrasil AB, we are committed to protecting your personal data.</p>
      <p className="leading-relaxed text-gray-400">This Privacy Policy describes how we collect, use, and handle your information when you use our services.</p>
      
      <div className="pl-4 border-l border-white/10 space-y-3 mt-3">
        <div>
            <strong className="text-white block text-xs uppercase mb-1">Data Collection</strong>
            <p className="leading-relaxed text-gray-400">We collect information provided directly by you, such as your name, contact details, and financial data required for our accounting and advisory services.</p>
        </div>
        
        <div>
            <strong className="text-white block text-xs uppercase mb-1">Usage of Data</strong>
            <p className="leading-relaxed text-gray-400">Your data is used solely to provide professional accounting services, maintain compliance with Swedish financial regulations (Bokföringslagen), and improve our client experience. We do not sell your personal data to third parties.</p>
        </div>
      </div>
    </div>

    <div className="space-y-3 pt-6 border-t border-white/5">
      <h3 className="text-igdrasil-accent font-mono text-xs uppercase tracking-wider">02. Terms of Service</h3>
      <p className="leading-relaxed text-gray-400">By engaging Igdrasil AB, you agree to our standard terms of engagement for accounting and financial services in Sweden.</p>
      
      <div className="pl-4 border-l border-white/10 space-y-3 mt-3">
        <div>
            <strong className="text-white block text-xs uppercase mb-1">Scope of Services</strong>
            <p className="leading-relaxed text-gray-400">The exact scope of bookkeeping, payroll, or advisory services is defined in our specific Service Level Agreement (SLA) with each client.</p>
        </div>

        <div>
            <strong className="text-white block text-xs uppercase mb-1">Confidentiality</strong>
            <p className="leading-relaxed text-gray-400">As an accounting firm, we adhere to strict professional secrecy. All client financial data is treated with the highest level of confidentiality as required by Swedish law.</p>
        </div>
      </div>
    </div>

    <div className="space-y-3 pt-6 border-t border-white/5">
      <h3 className="text-igdrasil-accent font-mono text-xs uppercase tracking-wider">03. GDPR Compliance</h3>
      <p className="leading-relaxed text-gray-400">Igdrasil AB fully complies with the General Data Protection Regulation (GDPR) and the Swedish Data Protection Act (Dataskyddslagen).</p>
      
       <div className="pl-4 border-l border-white/10 space-y-3 mt-3">
        <div>
            <strong className="text-white block text-xs uppercase mb-1">Your Rights</strong>
            <p className="leading-relaxed text-gray-400">Under GDPR, you have the right to access, rectify, or erase your personal data. You also have the right to data portability and to object to certain types of processing.</p>
        </div>

        <div>
            <strong className="text-white block text-xs uppercase mb-1">Data Protection Officer</strong>
            <p className="leading-relaxed text-gray-400">For any inquiries regarding data protection or to exercise your rights, please contact our Data Protection Officer at <a href="mailto:legal@igdrasil.se" className="text-white hover:text-igdrasil-accent underline decoration-white/20 underline-offset-4">legal@igdrasil.se</a>.</p>
        </div>
      </div>
    </div>
  </div>
);

const ContactContent = () => (
  <div className="space-y-8 text-sm text-gray-300 font-sans">
    <h2 className="text-2xl font-light text-white mb-2 tracking-tight">Contact</h2>
    
    <div className="grid gap-8">
        <div>
            <h3 className="text-igdrasil-accent font-mono text-xs uppercase tracking-wider mb-3">Address</h3>
            <div className="text-lg font-light text-white leading-relaxed">
                <p>Kornhamnstorg 61</p>
                <p className="text-gray-400">111 27 Stockholm</p>
                <p className="text-gray-400">Sweden</p>
            </div>
        </div>

        <div>
            <h3 className="text-igdrasil-accent font-mono text-xs uppercase tracking-wider mb-2">Phone</h3>
            <p className="text-white text-lg font-light tracking-wide">+46 72 300 76 38</p>
        </div>

        <div>
            <h3 className="text-igdrasil-accent font-mono text-xs uppercase tracking-wider mb-2">Email</h3>
            <a href="mailto:finance@igdrasil.se" className="text-white text-lg font-light hover:text-igdrasil-accent transition-colors underline decoration-white/20 underline-offset-4">finance@igdrasil.se</a>
        </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [activeModal, setActiveModal] = useState<'terms' | 'contact' | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
        document.body.style.overflow = 'unset';
    }
  }, [activeModal]);

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col font-sans text-gray-300 selection:bg-igdrasil-accent selection:text-black">
      <OrganicBackground />

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <Logo />
          <div className="hidden sm:flex items-center space-x-2 text-xs font-mono text-igdrasil-accent/60 bg-igdrasil-accent/5 px-3 py-1 rounded-full border border-igdrasil-accent/10">
            <span className="w-2 h-2 rounded-full bg-igdrasil-accent animate-pulse"></span>
            <span>SYSTEM STATUS: PRE-LAUNCH</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center items-center px-4 relative z-10 pt-20">
        
        {/* Hero Section */}
        <div className={`max-w-4xl w-full mx-auto text-center space-y-12 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-white leading-[0.9]">
              Accounting that <br/>
              <span className="text-igdrasil-accent font-medium">
                 scales
              </span> with you
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 font-light max-w-xl mx-auto leading-relaxed">
              Focus on building. We'll handle the books.
            </p>
          </div>

          <div className="py-8">
            <WaitlistForm />
          </div>

          {/* Features / Social Proof (Abstract) */}
          <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-white/5">
             <div className="flex flex-col items-center space-y-2 group cursor-default">
               <div className="p-3 rounded-full bg-white/5 text-gray-400 group-hover:text-igdrasil-accent group-hover:bg-igdrasil-accent/10 transition-all duration-300">
                 <Lock size={20} strokeWidth={1.5} />
               </div>
               <span className="text-xs uppercase tracking-widest text-gray-500">Trust</span>
             </div>
             <div className="flex flex-col items-center space-y-2 group cursor-default">
               <div className="p-3 rounded-full bg-white/5 text-gray-400 group-hover:text-igdrasil-accent group-hover:bg-igdrasil-accent/10 transition-all duration-300">
                 <Zap size={20} strokeWidth={1.5} />
               </div>
               <span className="text-xs uppercase tracking-widest text-gray-500">Zero Latency</span>
             </div>
             <div className="flex flex-col items-center space-y-2 group cursor-default">
               <div className="p-3 rounded-full bg-white/5 text-gray-400 group-hover:text-igdrasil-accent group-hover:bg-igdrasil-accent/10 transition-all duration-300">
                 <Shield size={20} strokeWidth={1.5} />
               </div>
               <span className="text-xs uppercase tracking-widest text-gray-500">Compliance</span>
             </div>
          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="w-full py-8 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
             <span>&copy; 2026 Igdrasil AB. All rights reserved.</span>
          </div>
          <div className="flex space-x-6">
            <button 
              onClick={() => setActiveModal('terms')}
              className="hover:text-igdrasil-accent transition-colors focus:outline-none"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => setActiveModal('contact')}
              className="hover:text-igdrasil-accent transition-colors focus:outline-none"
            >
              Contact
            </button>
          </div>
        </div>
      </footer>

      {/* Modal Overlay */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setActiveModal(null)}
          ></div>
          <div className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl w-full max-w-lg max-h-[85vh] overflow-hidden flex flex-col shadow-2xl animate-float">
            
            {/* Modal Header */}
            <div className="flex justify-end p-4 border-b border-white/5">
                <button 
                    onClick={() => setActiveModal(null)}
                    className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all"
                >
                    <X size={20} />
                </button>
            </div>
            
            {/* Modal Content - Scrollable */}
            <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
                {activeModal === 'terms' && <TermsContent />}
                {activeModal === 'contact' && <ContactContent />}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default App;