"use client";

import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Teams = () => {
  const ffPlayers = [
    "Y. BARKAMBIRI",
    "A. LAGMIHI",
    "A. FAJRR",
    "M. ROUHI SARHANE"
  ];

  const futureGames = [
    "Valorant",
    "FC / FIFA",
    "PUBG Mobile",
    "Call of Duty",
    "League of Legends"
  ];

  return (
    <section id="teams" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">NOS <span className="text-red-600">ÉQUIPES</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Découvrez les talents qui portent haut les couleurs de KACM Esports sur la scène compétitive.</p>
        </div>

        {/* Current Team: Free Fire */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gray-200" />
            <Badge className="bg-red-600 text-white px-6 py-1 text-lg font-bold">FREE FIRE</Badge>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ffPlayers.map((player, i) => (
              <Card key={i} className="group overflow-hidden border-none shadow-lg hover:shadow-red-600/10 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="aspect-[3/4] bg-gray-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="text-red-500 font-bold text-xs uppercase tracking-widest mb-1">Pro Player</div>
                      <div className="text-white font-black text-xl italic">{player}</div>
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
            <h3 className="text-2xl font-bold text-gray-900 italic uppercase tracking-tighter">Prochainement</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {futureGames.map((game, i) => (
              <div 
                key={i} 
                className="px-8 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-red-200 hover:text-red-600 transition-all font-bold text-gray-700 cursor-default"
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