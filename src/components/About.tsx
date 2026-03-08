"use client";

import React from 'react';
import { Target, Trophy, Users, Zap } from 'lucide-react';

const About = () => {
  const features = [
    { icon: Zap, title: "Entraînements", desc: "Sessions intensives pour atteindre le sommet." },
    { icon: Trophy, title: "Compétitions", desc: "Participation aux tournois nationaux et internationaux." },
    { icon: Users, title: "Recrutement", desc: "Détection et formation des futurs talents." },
    { icon: Target, title: "Développement", desc: "Expansion continue vers de nouveaux horizons gaming." },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-bold uppercase tracking-wider">
              Présentation du club
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              L'ESPORT À <span className="text-red-600">MARRAKECH</span> REPREND SES DROITS
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              KACM Esports est une organisation qui vise à développer l'esport à Marrakech et au Maroc. 
              Nous construisons un écosystème professionnel pour permettre aux joueurs de s'épanouir 
              et de représenter fièrement les couleurs de la ville ocre.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600">
                    <f.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{f.title}</h4>
                    <p className="text-sm text-gray-500">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://d.top4top.io/p_3719kl1tu1.jpeg" 
                alt="KACM Team" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-8 rounded-2xl shadow-xl hidden md:block">
              <div className="text-4xl font-black">100%</div>
              <div className="text-sm font-bold uppercase tracking-wider opacity-80">Marrakech Spirit</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;