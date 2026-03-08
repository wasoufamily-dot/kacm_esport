"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Trophy, Users, ShoppingBag, Tv, UserPlus, User, Globe, Moon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home', icon: null },
    { name: 'Le Club', href: '#about', icon: Trophy },
    { name: 'Équipes', href: '#teams', icon: Users },
    { name: 'Shop', href: '#shop', icon: ShoppingBag },
    { name: 'Live', href: '#live', icon: Tv },
    { name: 'Recrutement', href: '#join', icon: UserPlus },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="https://a.top4top.io/p_3712vqtj61.png" 
            alt="KACM Logo" 
            className="h-10 w-auto"
          />
          <span className={cn(
            "font-bold text-xl tracking-tighter",
            isScrolled ? "text-red-600" : "text-white"
          )}>
            KACM <span className={isScrolled ? "text-black" : "text-white/80"}>ESPORTS</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-8 mr-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-red-500",
                  isScrolled ? "text-gray-800" : "text-white"
                )}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-3">
            <button className={cn(
              "w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all hover:scale-110",
              isScrolled ? "border-red-600 text-red-600" : "border-white text-white"
            )}>
              <User size={20} />
            </button>
            <button className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white transition-all hover:scale-110 shadow-lg shadow-red-600/20">
              <Globe size={20} />
            </button>
            <button className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white transition-all hover:scale-110 shadow-lg shadow-red-600/20">
              <Moon size={20} />
            </button>
          </div>

          <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-6 ml-2">
            Suivre
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-red-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? "text-red-600" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-6 flex flex-col gap-4 md:hidden animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 text-lg font-semibold text-gray-800 hover:text-red-600"
            >
              {link.icon && <link.icon size={20} className="text-red-600" />}
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4 py-4 border-t border-gray-100">
            <button className="w-12 h-12 rounded-full border-2 border-red-600 flex items-center justify-center text-red-600">
              <User size={24} />
            </button>
            <button className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center text-white">
              <Globe size={24} />
            </button>
            <button className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center text-white">
              <Moon size={24} />
            </button>
          </div>
          <Button className="bg-red-600 hover:bg-red-700 text-white w-full py-6 text-lg">
            Suivre
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;