"use client";

import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Zap, Copy, ExternalLink } from 'lucide-react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import sonixAccount from '@/assets/sonix-account.png';
import barkaAccount from '@/assets/barka-account.png';
import sonixProfile from '@/assets/sonix-profile.png';
import barkaProfile from '@/assets/barka-profile.png';
import reflixProfile from '@/assets/reflix-profile.png';

const Teams = () => {
  const ffPlayers = [
    { 
      name: "Y. BARKAMBIRI", 
      pseudo: "YB7x", 
      uid: "7781484110",
      accountImage: barkaAccount,
      profileImage: barkaProfile,
      stats: { kills: 3, damage: 12 }
    },
    { 
      name: "A. LAGMIHI", 
      pseudo: "sh Reflix",
      profileImage: reflixProfile,
      stats: { kills: 8, damage: 7 }
    },
    { 
      name: "A. FAJRR", 
      pseudo: "N! SoN!cX", 
      stats: { kills: 15, damage: 8 },
      uid: "2894971226",
      accountImage: sonixAccount,
      profileImage: sonixProfile
    },
    { 
      name: "M. ROUHI SARHANE", 
      pseudo: "SARHANE"
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("ID copié dans le presse-papier !");
  };

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
              <Dialog key={i}>
                <DialogTrigger asChild>
                  <Card className={`group overflow-hidden border-none shadow-2xl bg-white dark:bg-gray-900 hover:scale-[1.02] transition-all duration-500 ${player.accountImage || player.profileImage ? 'cursor-pointer' : ''}`}>
                    <CardContent className="p-0">
                      <div className="aspect-[3/4] bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
                        {player.profileImage && (
                          <img 
                            src={player.profileImage} 
                            alt={player.pseudo} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        )}
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                        
                        {player.accountImage && (
                          <div className="absolute top-4 right-4 z-20 bg-red-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                            <ExternalLink size={16} />
                          </div>
                        )}

                        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                          <div className="text-white font-black text-2xl italic uppercase tracking-tighter mb-1">{player.pseudo}</div>
                          <div className="text-gray-400 text-sm font-medium">{player.name}</div>
                          
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
                </DialogTrigger>
                
                {player.accountImage && (
                  <DialogContent className="max-w-3xl bg-gray-900 border-gray-800 text-white p-0 overflow-hidden rounded-[2rem]">
                    <DialogHeader className="p-6 bg-black/50 backdrop-blur-sm border-b border-white/10">
                      <DialogTitle className="text-2xl font-black uppercase italic tracking-tighter flex items-center justify-between">
                        <span>Compte de {player.pseudo}</span>
                        {player.uid && (
                          <Button 
                            onClick={() => copyToClipboard(player.uid!)}
                            variant="outline" 
                            className="bg-red-600 hover:bg-red-700 border-none text-white rounded-xl gap-2"
                          >
                            <Copy size={16} />
                            Copier ID: {player.uid}
                          </Button>
                        )}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="relative aspect-video w-full">
                      <img 
                        src={player.accountImage} 
                        alt={`Compte de ${player.pseudo}`} 
                        className="w-full h-full object-contain bg-black"
                      />
                    </div>
                  </DialogContent>
                )}
              </Dialog>
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