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

      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-gray-500">Nom du membre</Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              id="name"
              placeholder="Ex: Y. BARKAMBIRI" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="pl-10 rounded-xl h-12"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="code" className="text-sm font-bold uppercase tracking-wider text-gray-500">Code membre</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              id="code"
              type="password"
              placeholder="KACM-FF-XXX" 
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="pl-10 rounded-xl h-12"
              required
            />
          </div>
        </div>

        <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-7 rounded-xl text-lg font-black uppercase tracking-widest shadow-lg shadow-red-600/20 transition-all hover:scale-[1.02]">
          Accéder à l’espace membre
        </Button>
        
        <p className="text-center text-xs text-gray-400 italic">
          Le code membre est fourni par l'administrateur du club.
        </p>
      </form>
    </div>
  );
};

export default MemberLogin;