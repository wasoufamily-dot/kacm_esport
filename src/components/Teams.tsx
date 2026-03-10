"use client";

import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Zap } from 'lucide-react';

const Teams = () => {
  const ffPlayers = [
    { 
      name: "Y. BARKAMBIRI", 
      pseudo: "BARKA", 
      role: "Capitaine" 
    },
    { 
      name: "A. LAGMIHI", 
      pseudo: "LAGMIHI", 
      role: "Support" 
    },
    { 
      name: "A. FAJRR", 
      pseudo: "N! SoN!cX", 
      role: "Sniper",
      stats: { kills: 15, damage: 8 }
    },
    { 
      name: "M. ROUHI SARHANE", 
      pseudo: "SARHANE", 
      role: "IGL" 
    }
  ];

  const futureGames = [
    "Valorant",
    "FC / FIFA",
    "PUBG Mobile",
    "Call of Duty",
    "League of Legends"
  ];

  return (
    <section id="teams" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 uppercase italic tracking-tighter">
            NOS <span className="text-red-600">ÉQUIPES</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Découvrez les talents qui portent haut les couleurs de KACM Esports sur la scène compétitive.
          </p>
        </div>

        {/* Current Team: Free Fire */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
            <Badge className="bg-red-600 text-white px-8 py-2 text-xl font-black italic tracking-widest">FREE FIRE</Badge>
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ffPlayers.map((player, i) => (
              <Card key={i} className="group overflow-hidden border-none shadow-2xl bg-white dark:bg-gray-900 hover:scale-[1.02] transition-all duration-500">
                <CardContent className="p-0">
                  <div className="aspect-[3/4] bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
                    {/* Placeholder for player image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <div className="text-red-500 font-black text-xs uppercase tracking-[0.2em] mb-1">{player.role}</div>
                      <div className="text-white font-black text-2xl italic uppercase tracking-tighter mb-1">{player.pseudo}</div>
                      <div className="text-gray-400 text-sm font-medium">{player.name}</div>
                      
                      {/* Stats Overlay */}
                      {player.stats && (
                        <div className="mt-4 flex gap-4 pt-4 border-t border-white/10">
                          <div className="flex items-center gap-1.5">
                            <Target size={14} className="text-red-600" />
                            <span className="text-white font-bold text-sm">{player.stats.kills} Kills</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Zap size={14} className="text-red-600" />
                            <span className="text-white font-bold text-sm">{player.stats.damage} Dmg</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Future Games */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-black text-gray-900 dark:text-white italic uppercase tracking-tighter">Prochainement</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {futureGames.map((game, i) => (
              <div 
                key={i} 
                className="px-8 py-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm hover:border-red-600/50 hover:text-red-600 transition-all font-bold text-gray-700 dark:text-gray-300 cursor-default"
              >
                {game}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;