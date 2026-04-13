import React, { useState, useEffect } from 'react';
import OrganicBackground from './components/OrganicBackground';
import Logo from './components/Logo';
import WaitlistForm from './components/WaitlistForm';
import { X } from 'lucide-react';

const TermsContent = () => (
  <div className="space-y-6 text-sm text-gray-700 font-sans">
    <h2 className="text-2xl font-light text-gray-900 mb-6 tracking-tight">Legal Information</h2>
    
    <div className="space-y-3">
      <h3 className="text-igdrasil-accent font-mono text-xs uppercase tracking-wider">01. Privacy Policy</h3>
      <p className="font-medium text-gray-900">At Igdrasil AB, we are committed to protecting your personal data.</p>
      <p className="leading-relaxed text-gray-600">This Privacy Policy describes how we collect, use, and handle your information when you use our services.</p>
      
      <div className="pl-4 border-l border-black/10 space-y-3 mt-3">
        <div>
            <strong className="text-gray-900 block text-xs uppercase mb-1">Data Collection</strong>
            <p className="leading-relaxed text-gray-600">We collect information provided directly by you, such as your name, contact details, and financial data required for our accounting and advisory services.</p>
        </div>
        
        <div>
            <strong className="text-gray-900 block text-xs uppercase mb-1">Usage of Data</strong>
            <p className="leading-relaxed text-gray-600">Your data is used solely to provide professional accounting services, maintain compliance with Swedish financial regulations (Bokföringslagen), and improve our client experience. We do not sell your personal data to third parties.</p>
        </div>
      </div>
    </div>

    <div className="space-y-3 pt-6 border-t border-black/5">
      <h3 className="text-igdrasil-accent font-mono text-xs uppercase tracking-wider">02. Terms of Service</h3>
      <p className="leading-relaxed text-gray-600">By engaging Igdrasil AB, you agree to our standard terms of engagement for accounting and financial services in Sweden.</p>
      
      <div className="pl-4 border-l border-black/10 space-y-3 mt-3">
        <div>
            <strong className="text-gray-900 block text-xs uppercase mb-1">Scope of Services</strong>
            <p className="leading-relaxed text-gray-600">The exact scope of bookkeeping, payroll, or advisory services is defined in our specific Service Level Agreement (SLA) with each client.</p>
        </div>

        <div>
            <strong className="text-gray-900 block text-xs uppercase mb-1">Confidentiality</strong>
            <p className="leading-relaxed text-gray-600">As an accounting firm, we adhere to strict professional secrecy. All client financial data is treated with the highest level of confidentiality as required by Swedish law.</p>
        </div>
      </div>
    </div>

    <div className="space-y-3 pt-6 border-t border-black/5">
      <h3 className="text-igdrasil-accent font-mono text-xs uppercase tracking-wider">03. GDPR Compliance</h3>
      <p className="leading-relaxed text-gray-600">Igdrasil AB fully complies with the General Data Protection Regulation (GDPR) and the Swedish Data Protection Act (Dataskyddslagen).</p>
      
       <div className="pl-4 border-l border-black/10 space-y-3 mt-3">
        <div>
            <strong className="text-gray-900 block text-xs uppercase mb-1">Your Rights</strong>
            <p className="leading-relaxed text-gray-600">Under GDPR, you have the right to access, rectify, or erase your personal data. You also have the right to data portability and to object to certain types of processing.</p>
        </div>

        <div>
            <strong className="text-gray-900 block text-xs uppercase mb-1">Data Protection Officer</strong>
            <p className="leading-relaxed text-gray-600">For any inquiries regarding data protection or to exercise your rights, please contact our Data Protection Officer at <a href="mailto:legal@igdrasil.se" className="text-gray-900 hover:text-igdrasil-accent underline decoration-black/20 underline-offset-4">legal@igdrasil.se</a>.</p>
        </div>
      </div>
    </div>
  </div>
);

const ContactContent = () => (
  <div className="space-y-8 text-sm text-gray-700 font-sans">
    <h2 className="text-2xl font-light text-gray-900 mb-2 tracking-tight">Contact</h2>
    
    <div className="grid gap-8">
        <div>
            <h3 className="text-igdrasil-accent font-mono text-xs uppercase tracking-wider mb-3">Address</h3>
            <div className="text-lg font-light text-gray-900 leading-relaxed">
                <p>Kornhamnstorg 61</p>
                <p className="text-gray-600">111 27 Stockholm</p>
                <p className="text-gray-600">Sweden</p>
            </div>
        </div>

        <div>
            <h3 className="text-igdrasil-accent font-mono text-xs uppercase tracking-wider mb-2">Phone</h3>
            <p className="text-gray-900 text-lg font-light tracking-wide">+46 72 300 76 38</p>
        </div>

        <div>
            <h3 className="text-igdrasil-accent font-mono text-xs uppercase tracking-wider mb-2">Email</h3>
            <a href="mailto:support@igdrasil.se" className="text-gray-900 text-lg font-light hover:text-igdrasil-accent transition-colors underline decoration-black/20 underline-offset-4">support@igdrasil.se</a>
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
    <div className="relative min-h-screen overflow-hidden flex flex-col font-sans text-gray-700 selection:bg-igdrasil-accent selection:text-white">
      <OrganicBackground />

      {/* Header */}
      <header className={`absolute top-0 w-full z-50 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <Logo />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center items-center px-4 relative z-10 pt-20">
        
        {/* Hero Section */}
        <div className={`max-w-4xl w-full mx-auto text-center space-y-10 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-gray-900 leading-[0.9]">
              Accounting that <br/>
              <span className="text-igdrasil-accent font-medium">
                 scales
              </span> with you
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 font-light tracking-tight max-w-xl mx-auto leading-relaxed">
              Focus on building. We'll handle the books.
            </p>

            <div className="pt-2">
              <WaitlistForm />
            </div>
          </div>

          <div className="pt-2 pb-2">
            <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto leading-relaxed">
              If you need help with accounting and finance, we’d love to hear from you. We support our clients hands-on, but if you prefer to do it yourself, you can also sign up as a beta user and get access to our automated workflows.
            </p>
          </div>

          <div className="max-w-2xl mx-auto pt-8 pb-6">
            <p className="text-xs font-mono text-igdrasil-accent uppercase tracking-wider mb-4">We offer</p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-4 py-1.5 bg-white border border-black/10 text-gray-700 rounded-full text-sm font-light shadow-sm">Bookkeeping</span>
              <span className="px-4 py-1.5 bg-white border border-black/10 text-gray-700 rounded-full text-sm font-light shadow-sm">Payroll</span>
              <span className="px-4 py-1.5 bg-white border border-black/10 text-gray-700 rounded-full text-sm font-light shadow-sm">VAT</span>
              <span className="px-4 py-1.5 bg-white border border-black/10 text-gray-700 rounded-full text-sm font-light shadow-sm">Employer Reporting</span>
              <span className="px-4 py-1.5 bg-white border border-black/10 text-gray-700 rounded-full text-sm font-light shadow-sm">Recurring Reports</span>
            </div>
          </div>

          <div className="max-w-2xl mx-auto text-left space-y-6 text-gray-600 font-light text-lg leading-relaxed pt-12 pb-8 border-t border-black/5">
            <h2 className="text-2xl font-light text-gray-900 tracking-tight">About us</h2>
            <p>
              Our vision is bookkeeping on autopilot. Accounting should feel effortless and stress-free. We aim to move beyond the admin and instead proactively use data to generate insights and drive performance.
            </p>
            <p>
              We’re a small, driven team building Igdrasil. Working with leading accounting platforms, we go further by automating and integrating our own workflows to streamline bookkeeping, payroll, VAT, employer reporting, and recurring reports.
            </p>
            <p>
              We’re not a traditional firm. We work closely with our clients, stay accessible, and move fast. We’re there when needed, growing alongside the companies we support.
            </p>
          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="w-full py-8 border-t border-black/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
             <span>&copy; 2026 Igdrasil AB. All rights reserved.</span>
          </div>
          <div className="flex space-x-6">
            <button 
              onClick={() => setActiveModal('terms')}
              className="text-xs font-medium uppercase tracking-widest hover:text-igdrasil-accent transition-colors focus:outline-none"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => setActiveModal('contact')}
              className="text-xs font-medium uppercase tracking-widest hover:text-igdrasil-accent transition-colors focus:outline-none"
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
            className="absolute inset-0 bg-white/80 backdrop-blur-sm transition-opacity"
            onClick={() => setActiveModal(null)}
          ></div>
          <div className="relative bg-[#faf9f6] border border-black/10 rounded-2xl w-full max-w-lg max-h-[85vh] overflow-hidden flex flex-col shadow-2xl animate-float">
            
            {/* Modal Header */}
            <div className="flex justify-end p-4 border-b border-black/5">
                <button 
                    onClick={() => setActiveModal(null)}
                    className="p-2 text-gray-500 hover:text-gray-900 hover:bg-black/5 rounded-full transition-all"
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