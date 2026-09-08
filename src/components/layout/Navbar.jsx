import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Sparkles, PhoneCall } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import Button from '../ui/Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3.5 shadow-2xl'
          : 'bg-brand-navy/60 backdrop-blur-md py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-teal via-brand-mint to-brand-purple p-0.5 shadow-glow-teal group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-brand-navy rounded-[10px] flex items-center justify-center">
                <span className="text-white font-extrabold text-lg tracking-tighter">
                  A<span className="text-brand-mint">3</span>S
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-brand-mint transition-colors">
                A3S Digital
              </span>
              <span className="text-[10px] tracking-widest text-brand-muted uppercase font-medium">
                Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {siteConfig.navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-brand-mint bg-brand-teal/10 font-semibold border border-brand-teal/20'
                      : 'text-brand-muted hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-brand-mint bg-brand-teal/10 font-semibold border border-brand-teal/20'
                    : 'text-brand-muted hover:text-white hover:bg-white/5'
                }`
              }
            >
              FAQ
            </NavLink>
          </nav>

          {/* Right CTA Button & Phone preview */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:07010646001"
              className="flex items-center gap-2 text-xs font-semibold text-brand-muted hover:text-brand-mint transition-colors"
              title="Call A3S Office"
            >
              <PhoneCall className="w-3.5 h-3.5 text-brand-teal" />
              <span>070106 46001</span>
            </a>
            <Button
              to="/contact"
              variant="primary"
              size="sm"
              icon={ArrowRight}
              className="shadow-glow-teal"
            >
              Get a Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-white hover:text-brand-mint hover:bg-white/5 focus:outline-none transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[500px] border-b border-white/10 opacity-100 bg-brand-navy-light/95 backdrop-blur-2xl' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pt-3 pb-6 space-y-2">
          {siteConfig.navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? 'text-brand-mint bg-brand-teal/15 font-semibold'
                    : 'text-brand-muted hover:text-white hover:bg-white/5'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              `block px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                isActive
                  ? 'text-brand-mint bg-brand-teal/15 font-semibold'
                  : 'text-brand-muted hover:text-white hover:bg-white/5'
              }`
            }
          >
            FAQ
          </NavLink>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <a
              href="tel:07010646001"
              className="flex items-center gap-2 text-sm text-brand-muted hover:text-brand-mint px-2"
            >
              <PhoneCall className="w-4 h-4 text-brand-teal" />
              <span>Direct Support: 070106 46001</span>
            </a>
            <Button
              to="/contact"
              variant="primary"
              size="md"
              icon={ArrowRight}
              className="w-full"
            >
              Get a Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
