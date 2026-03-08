"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Banner */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://d.top4top.io/p_3719kl1tu1.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center animate-in fade-in zoom-in duration-1000">
        <img 
          src="https://a.top4top.io/p_3712vqtj61.png" 
          alt="KACM Logo" 
          className="w-48 md:w-64 lg:w-80 drop-shadow-[0_0_30px_rgba(220,38,38,0.5)] mb-8"
        />
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tighter uppercase italic">
          KACM <span className="text-red-600">ESPORTS</span>
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8 font-medium">
          L'organisation esports de référence à Marrakech.
        </p>
        <Button className="bg-red-600 hover:bg-red-700 text-white text-lg px-10 py-7 rounded-full font-bold uppercase tracking-widest transition-transform hover:scale-105 shadow-lg shadow-red-600/20">
          Suivre
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;