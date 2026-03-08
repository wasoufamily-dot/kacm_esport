"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { UserPlus, ArrowRight } from 'lucide-react';

const Recruitment = () => {
  return (
    <section id="join" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-gray-900 rounded-[3rem] overflow-hidden p-10 md:p-20 text-center">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-3xl text-white mb-4 rotate-3">
              <UserPlus size={40} />
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter">
              REJOIGNEZ <span className="text-red-600 underline decoration-white/20 underline-offset-8">L'ÉLITE</span>
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed">
              Vous avez du talent ? Vous voulez représenter Marrakech ? Le club ouvre régulièrement ses portes à de nouveaux joueurs pour ses futures équipes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-10 py-8 rounded-2xl text-xl font-black uppercase tracking-widest w-full sm:w-auto">
                Postuler Maintenant
                <ArrowRight className="ml-2" />
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/10 px-10 py-8 rounded-2xl text-xl font-bold w-full sm:w-auto">
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recruitment;