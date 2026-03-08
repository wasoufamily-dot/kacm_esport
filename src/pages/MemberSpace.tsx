"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MemberLogin from '@/components/MemberLogin';
import MemberProfile from '@/components/MemberProfile';
import { useAuth } from '@/context/AuthContext';
import { MadeWithDyad } from "@/components/made-with-dyad";

const MemberSpace = () => {
  const { currentMember } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 selection:bg-red-600 selection:text-white">
      <Navbar />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {!currentMember ? (
            <div className="py-12">
              <div className="text-center mb-12">
                <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter uppercase italic">
                  ESPACE <span className="text-red-600">MEMBRE</span>
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-xl max-w-2xl mx-auto">
                  Connectez-vous pour accéder à votre profil de joueur officiel.
                </p>
              </div>
              <MemberLogin />
            </div>
          ) : (
            <MemberProfile />
          )}
        </div>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default MemberSpace;