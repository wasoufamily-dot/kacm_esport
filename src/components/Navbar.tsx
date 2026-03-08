"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Trophy, Users, ShoppingBag, Tv, UserPlus, User, Globe, Moon, Sun } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { toast } from "sonner";
import { useLanguage } from "@/context/LanguageContext";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '/', isExternal: false },
    { name: t('nav.club'), href: '/#about', isExternal: false },
    { name: t('nav.teams'), href: '/#teams', isExternal: false },
    { name: t('nav.shop'), href: '/#shop', isExternal: false },
    { name: t('nav.live'), href: '/#live', isExternal: false },
    { name: t('nav.join'), href: '/recrutement', isExternal: false },
  ];

  const toggleLanguage = () => {
    const newLang = language === 'fr' ? 'ar' : 'fr';
    setLanguage(newLang);
    toast.success(t('toast.lang_switched'));
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="https://a.top4top.io/p_3712vqtj61.png" alt="KACM Logo" className="h-10 w-auto" />
          <span className={cn("font-bold text-xl tracking-tighter", isScrolled ? "text-red-600" : "text-white")}>
            KACM <span className={cn(isScrolled ? "text-black dark:text-white" : "text-white/80")}>ESPORTS</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-8 mr-4">
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <a key={link.name} href={link.href} className={cn("text-sm font-medium transition-colors hover:text-red-500", isScrolled ? "text-gray-800 dark:text-gray-200" : "text-white")}>
                  {link.name}
                </a>
              ) : (
                <Link key={link.name} to={link.href} className={cn("text-sm font-medium transition-colors hover:text-red-500", isScrolled ? "text-gray-800 dark:text-gray-200" : "text-white")}>
                  {link.name}
                </Link>
              )
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link to="/espace-membre" className={cn("w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all hover:scale-110", isScrolled ? "border-red-600 text-red-600" : "border-white text-white")}>
              <User size={20} />
            </Link>
            <button onClick={toggleLanguage} className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white transition-all hover:scale-110 shadow-lg shadow-red-600/20">
              <Globe size={20} />
            </button>
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white transition-all hover:scale-110 shadow-lg shadow-red-600/20">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-6 ml-2">{t('nav.follow')}</Button>
        </div>

        <button className="md:hidden text-red-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? "text-red-600" : "text-white"} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-xl p-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            link.href.startsWith('/#') ? (
              <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-red-600">
                {link.name}
              </a>
            ) : (
              <Link key={link.name} to={link.href} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-red-600">
                {link.name}
              </Link>
            )
          ))}
          <Link to="/espace-membre" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 text-lg font-semibold text-red-600">
            <User size={24} /> Espace Membre
          </Link>
          <div className="flex items-center gap-4 py-4 border-t border-gray-100 dark:border-gray-800">
            <button onClick={toggleLanguage} className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center text-white"><Globe size={24} /></button>
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center text-white">
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;