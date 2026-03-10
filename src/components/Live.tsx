"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Youtube, ExternalLink } from 'lucide-react';

const Live = () => {
  const youtubeUrl = "https://www.youtube.com/@KACM-ESPORT";

  return (
    <section id="live" className="py-24 bg-red-600 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-black/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-black rounded-[3rem] p-8 md:p-16 shadow-2xl flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <div className="flex items-center gap-3 text-red-500 font-bold uppercase tracking-widest">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              En Direct
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter">
              SUIVEZ NOS <span className="text-red-600">MATCHS</span> SUR YOUTUBE
            </h2>
            <p className="text-gray-400 text-lg">
              Ne manquez aucun moment fort. Regardez nos entraînements, nos compétitions et nos événements spéciaux en direct sur notre chaîne officielle.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                asChild
                className="bg-[#FF0000] hover:bg-[#cc0000] text-white px-8 py-6 rounded-2xl text-lg font-bold"
              >
                <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
                  <Youtube className="mr-2" />
                  Regarder sur YouTube
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-2xl text-lg font-bold"
              >
                Planning des lives
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden border-4 border-white/5 shadow-2xl group relative">
              <img 
                src="https://d.top4top.io/p_3719kl1tu1.jpeg" 
                alt="YouTube Preview" 
                className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white shadow-xl shadow-red-600/40 group-hover:scale-110 transition-transform">
                  <ExternalLink size={32} />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <div className="text-white font-bold">@KACM-ESPORT</div>
                <div className="text-gray-400 text-xs">Dernière vidéo: Match contre Atlas Legend</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Live;