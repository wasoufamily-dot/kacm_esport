"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Member {
  name: string;
  pseudo: string;
  mainGame: string;
  role: string;
  status: string;
  code: string;
  photo?: string;
  stats?: {
    kills: number;
    damage: number;
  };
}

interface AuthContextType {
  currentMember: Member | null;
  login: (name: string, code: string) => boolean;
  logout: () => void;
  updatePhoto: (photoUrl: string) => void;
}

const OFFICIAL_MEMBERS: Member[] = [
  {
    name: "Y. BARKAMBIRI",
    pseudo: "BARKA",
    mainGame: "Free Fire",
    role: "co-owner / capitain",
    status: "Joueur officiel",
    code: "KACM-FF-001"
  },
  {
    name: "A. LAGMIHI",
    pseudo: "LAGMIHI",
    mainGame: "Free Fire",
    role: "Support",
    status: "Joueur officiel",
    code: "KACM-FF-002"
  },
  {
    name: "A. FAJRR",
    pseudo: "N! SoN!cX",
    mainGame: "Free Fire",
    role: "Sniper",
    status: "Joueur officiel",
    code: "KACM-FF-003",
    stats: {
      kills: 15,
      damage: 8
    }
  },
  {
    name: "M. ROUHI SARHANE",
    pseudo: "SARHANE",
    mainGame: "Free Fire",
    role: "Leader / IGL",
    status: "Capitaine",
    code: "KACM-FF-004"
  }
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentMember, setCurrentMember] = useState<Member | null>(null);

  useEffect(() => {
    const savedMember = localStorage.getItem('kacm_member');
    if (savedMember) {
      setCurrentMember(JSON.parse(savedMember));
    }
  }, []);

  const login = (name: string, code: string) => {
    const member = OFFICIAL_MEMBERS.find(
      m => m.name.toLowerCase() === name.toLowerCase() && m.code === code
    );
    
    if (member) {
      const savedPhoto = localStorage.getItem(`photo_${member.code}`);
      const memberWithPhoto = savedPhoto ? { ...member, photo: savedPhoto } : member;
      
      setCurrentMember(memberWithPhoto);
      localStorage.setItem('kacm_member', JSON.stringify(memberWithPhoto));
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentMember(null);
    localStorage.removeItem('kacm_member');
  };

  const updatePhoto = (photoUrl: string) => {
    if (currentMember) {
      const updated = { ...currentMember, photo: photoUrl };
      setCurrentMember(updated);
      localStorage.setItem('kacm_member', JSON.stringify(updated));
      localStorage.setItem(`photo_${currentMember.code}`, photoUrl);
    }
  };

  return (
    <AuthContext.Provider value={{ currentMember, login, logout, updatePhoto }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};