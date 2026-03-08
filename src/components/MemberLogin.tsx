"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";
import { Lock, User } from 'lucide-react';

const MemberLogin = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(name, code);
    if (success) {
      toast.success("Connexion réussie !");
    } else {
      toast.error("Nom ou code incorrect. Veuillez contacter l'administrateur.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
      <div className="bg-black p-8 text-white text-center">
        <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 rotate-3">
          <Lock size={32} />
        </div>
        <h2 className="text-2xl font-black uppercase italic tracking-tighter">Espace Membre</h2>
        <p className="text-gray-400 mt-2 text-sm">Zone réservée aux joueurs officiels</p>
      </div>

      <form onSubmit={handleSubmit} className="p-8 space-y-8">
        <div className="space-y-3">
          <Label htmlFor="name" className="text-[13px] font-black uppercase tracking-wider text-slate-500 block">
            Nom du membre
          </Label>
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-red-600 transition-colors">
              <User size={20} />
            </div>
            <Input 
              id="name"
              placeholder="Nom du membre" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="pl-12 pr-4 py-7 rounded-2xl border-2 border-slate-100 focus:border-red-600 focus:ring-0 transition-all text-lg font-medium placeholder:text-slate-300"
              required
            />
          </div>
        </div>

        <div className="space-y-3">
          <Label htmlFor="code" className="text-[13px] font-black uppercase tracking-wider text-slate-500 block">
            Code membre
          </Label>
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-red-600 transition-colors">
              <Lock size={20} />
            </div>
            <Input 
              id="code"
              type="password"
              placeholder="Code membre" 
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="pl-12 pr-4 py-7 rounded-2xl border-2 border-slate-100 focus:border-red-600 focus:ring-0 transition-all text-lg font-medium placeholder:text-slate-300"
              required
            />
          </div>
        </div>

        <div className="pt-2">
          <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-8 rounded-2xl text-xl font-black uppercase tracking-widest shadow-xl shadow-red-600/20 transition-all hover:scale-[1.02] active:scale-95">
            Accéder à l’espace membre
          </Button>
        </div>
        
        <p className="text-center text-xs text-slate-400 italic font-medium">
          Le code membre est fourni par l'administrateur du club.
        </p>
      </form>
    </div>
  );
};

export default MemberLogin;