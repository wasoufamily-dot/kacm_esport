"use client";

import React from 'react';
import { Target, Trophy, Users, Zap } from 'lucide-react';
import { useLanguage } from "@/context/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const features = [
    { icon: Zap, title: "Entraînements", desc: "Sessions intensives." },
    { icon: Trophy, title: "Compétitions", desc: "Tournois nationaux." },
    { icon: Users, title: "Recrutement", desc: "Formation des talents." },
    { icon: Target, title: "Développement", desc: "Expansion continue." },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-full text-sm font-bold uppercase tracking-wider">{t('about.tag')}</div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight">{t('about.title')}</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{t('about.desc')}</p>
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-50 dark:bg-red-900/20 rounded-xl flex items-center justify-center text-red-600"><f.icon size={24} /></div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{f.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img src="https://d.top4top.io/p_3719kl1tu1.jpeg" alt="KACM Team" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;