import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'About',
    href: '#about'
  }, {
    name: 'Skills',
    href: '#skills'
  }, {
    name: 'Experience',
    href: '#experience'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0f172a]/95 backdrop-blur-md border-b border-slate-800/50 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter">
          <span className="text-gradient">MH</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => <li key={link.name}>
              <a href={link.href} className="text-slate-400 hover:text-[#00d4ff] text-sm font-medium transition-colors duration-300">
                {link.name}
              </a>
            </li>)}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-slate-300 hover:text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-[#0f172a] border-b border-slate-800 p-6 animate-in slide-in-from-top-5">
          <ul className="flex flex-col gap-4">
            {navLinks.map(link => <li key={link.name}>
                <a href={link.href} className="block text-slate-400 hover:text-[#00d4ff] text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </a>
              </li>)}
          </ul>
        </div>}
    </nav>;
}