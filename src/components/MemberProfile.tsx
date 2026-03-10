"use client";

import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { Camera, LogOut, ShieldCheck, Gamepad2, User as UserIcon, Trophy, Target, Zap } from 'lucide-react';
import { toast } from "sonner";

const MemberProfile = () => {
  const { currentMember, logout, updatePhoto } = useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!currentMember) return null;

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type === "image/jpeg" || file.type === "image/png") {
        const reader = new FileReader();
        reader.onloadend = () => {
          updatePhoto(reader.result as string);
          toast.success("Photo mise à jour !");
        };
        reader.readAsDataURL(file);
      } else {
        toast.error("Veuillez utiliser un format JPG ou PNG.");
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Welcome Header */}
      <div className="bg-red-600 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="relative group">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/30 overflow-hidden bg-black/20 flex items-center justify-center shadow-xl">
              {currentMember.photo ? (
                <img src={currentMember.photo} alt={currentMember.name} className="w-full h-full object-cover" />
              ) : (
                <UserIcon size={64} className="text-white/50" />
              )}
            </div>
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="absolute bottom-0 right-0 w-10 h-10 bg-white text-red-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            >
              <Camera size={20} />
            </button>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handlePhotoUpload} 
              className="hidden" 
              accept="image/jpeg,image/png"
            />
          </div>
          <div className="text-center md:text-left flex-1">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-2">
              🎉 Bienvenue {currentMember.name}
            </h2>
            <p className="text-red-100 text-lg opacity-90">Dans l’espace membre de KACM Esports !</p>
          </div>
          <Button 
            onClick={logout} 
            variant="outline" 
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 rounded-xl"
          >
            <LogOut className="mr-2" size={18} /> Déconnexion
          </Button>
        </div>
      </div>

      {/* Profile Details */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-900 rounded-[2rem] p-8 shadow-xl border border-gray-100 dark:border-gray-800">
            <h3 className="text-xl font-black uppercase italic text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <UserIcon className="text-red-600" /> Profil du joueur
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-1">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Nom du membre</p>
                <p className="text-lg font-bold text-gray-900 dark:text-white">{currentMember.name}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Pseudo gaming</p>
                <p className="text-lg font-bold text-red-600 italic">{currentMember.pseudo}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Jeu principal</p>
                <p className="text-lg font-bold text-gray-900 dark:text-white">{currentMember.mainGame}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Rôle dans l’équipe</p>
                <p className="text-lg font-bold text-gray-900 dark:text-white">{currentMember.role}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Statut dans le club</p>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="text-green-500" size={18} />
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{currentMember.status}</p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Code Membre</p>
                <p className="text-lg font-mono font-bold text-gray-500">{currentMember.code}</p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          {currentMember.stats && (
            <div className="bg-white dark:bg-gray-900 rounded-[2rem] p-8 shadow-xl border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-black uppercase italic text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                <Trophy className="text-red-600" /> Historique de combat
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center text-red-600">
                    <Target size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Kills</p>
                    <p className="text-2xl font-black text-gray-900 dark:text-white">{currentMember.stats.kills}</p>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center text-red-600">
                    <Zap size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Damage</p>
                    <p className="text-2xl font-black text-gray-900 dark:text-white">{currentMember.stats.damage}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-black rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <Gamepad2 size={120} />
            </div>
            <h3 className="text-lg font-black uppercase italic mb-6 flex items-center gap-3">
              <Gamepad2 className="text-red-600" /> Équipe
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Jeu principal de l’équipe</p>
                <p className="text-2xl font-black text-red-600 italic">FREE FIRE</p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs text-gray-400 italic">Vous faites partie de l'élite de Marrakech.</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-[2rem] p-8 shadow-xl border border-gray-100 dark:border-gray-800">
            <h3 className="text-lg font-black uppercase italic text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <Trophy className="text-red-600" /> Actions
            </h3>
            <Button 
              onClick={() => fileInputRef.current?.click()}
              className="w-full bg-gray-100 dark:bg-gray-800 hover:bg-red-600 hover:text-white text-gray-900 dark:text-white rounded-xl py-6 transition-all"
            >
              <Camera className="mr-2" size={18} /> Ajouter une photo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;