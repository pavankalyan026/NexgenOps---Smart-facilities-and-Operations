import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, UserCheck, Calendar } from 'lucide-react';
import { NexgenOpsLogo } from './NexgenOpsLogo';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenFounderModal: () => void;
  onOpenDemoForm: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenFounderModal, onOpenDemoForm }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Platform', href: '#platform' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Features', href: '#features' },
    { label: 'AI', href: '#ai-copilot' },
    { label: 'Workflow', href: '#workflow' },
    { label: 'Analytics', href: '#analytics' },
    { label: 'Talk to Founder', href: '#talk-to-founder' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-200/90 dark:border-slate-800/80 py-3 shadow-sm dark:shadow-lg dark:shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Wordmark */}
        <a 
          href="#" 
          id="navbar-brand-logo"
          className="focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg"
          aria-label="NexgenOps Home"
        >
          <NexgenOpsLogo size="md" showTagline={false} />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Theme Switcher Toggle */}
          <ThemeToggle />

          {/* Talk to Founder Button */}
          <button
            id="nav-talk-to-founder-btn"
            onClick={onOpenFounderModal}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/90 dark:hover:bg-slate-800 border border-slate-300/80 dark:border-slate-700/80 hover:border-cyan-500/50 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 cursor-pointer"
          >
            <UserCheck className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>Talk to Founder</span>
          </button>

          {/* Book a Demo CTA */}
          <button
            id="nav-book-demo-btn"
            onClick={onOpenDemoForm}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 rounded-xl transition-all shadow-md shadow-cyan-950/20 hover:shadow-cyan-400/30 focus:outline-none focus:ring-2 focus:ring-cyan-300 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book a Demo</span>
          </button>
        </div>

        {/* Mobile Actions Button */}
        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggle />
          <button
            id="nav-mobile-founder-btn"
            onClick={onOpenFounderModal}
            className="p-2 text-xs text-cyan-600 dark:text-cyan-400 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg"
            aria-label="Talk to Founder"
          >
            <UserCheck className="w-4 h-4" />
          </button>
          
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-navigation-drawer"
          className="sm:hidden px-4 pt-4 pb-6 bg-white/95 dark:bg-slate-950/95 border-b border-slate-200 dark:border-slate-800 backdrop-blur-xl animate-fadeIn"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-base font-semibold text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900/60 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2.5">
              <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Color Theme</span>
                <ThemeToggle showLabel={true} />
              </div>

              <button
                id="mobile-talk-founder-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenFounderModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700"
              >
                <UserCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Talk to Founder</span>
              </button>

              <button
                id="mobile-book-demo-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemoForm();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Demo</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
