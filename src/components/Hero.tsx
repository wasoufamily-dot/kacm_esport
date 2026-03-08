"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section id="home" className="relative min-h-[80vh] w-full flex flex-col items-center pt-32 pb-20 px-6 bg-background dark:bg-gray-950">
      <div className="relative w-full max-w-6xl aspect-[3/1] md:aspect-[4/1] rounded-[2rem] overflow-visible shadow-2xl">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-[2rem]" style={{ backgroundImage: `url('https://d.top4top.io/p_3719kl1tu1.jpeg')` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 rounded-[2rem]" />
        </div>
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-32 h-32 md:w-48 md:h-48 bg-white dark:bg-gray-800 rounded-full p-2 shadow-xl z-20 flex items-center justify-center">
          <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-white dark:bg-gray-800">
            <img src="https://a.top4top.io/p_3712vqtj61.png" alt="KACM Logo" className="w-[85%] h-auto object-contain" />
          </div>
        </div>
      </div>

      <div className="mt-24 text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-4 tracking-tighter uppercase italic">
          KACM <span className="text-red-600">ESPORTS</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl mb-8 font-medium">{t('hero.subtitle')}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-red-600 hover:bg-red-700 text-white text-lg px-10 py-7 rounded-full font-bold uppercase tracking-widest shadow-lg shadow-red-600/20">{t('nav.follow')}</Button>
          <Button variant="outline" className="border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 text-lg px-10 py-7 rounded-full font-bold uppercase tracking-widest hover:bg-gray-50 dark:hover:bg-gray-900">{t('hero.discover')}</Button>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-gray-300"><ChevronDown size={32} /></div>
    </section>
  );
};

export default Hero;