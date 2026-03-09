"use client";

import React from 'react';
import { useLanguage } from "@/context/LanguageContext";
import { Calendar, Award, Rocket, Flag, Trophy } from 'lucide-react';
import matchAtlas from '@/assets/match-atlas.png';

const History = () => {
  const { t } = useLanguage();

  const milestones = [
    {
      year: "2022",
      icon: Flag,
      title: t('history.2022.title'),
      desc: t('history.2022.desc')
    },
    {
      year: "2023",
      icon: Award,
      title: t('history.2023.title'),
      desc: t('history.2023.desc')
    },
    {
      year: "2024",
      icon: Rocket,
      title: t('history.2024.title'),
      desc: t('history.2024.desc')
    },
    {
      year: "2025",
      icon: Trophy,
      title: t('history.2025.title'),
      desc: t('history.2025.desc'),
      image: matchAtlas
    }
  ];

  return (
    <section id="history" className="py-24 bg-gray-50 dark:bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-4 uppercase italic tracking-tighter" 
              dangerouslySetInnerHTML={{ __html: t('history.title') }} />
          <p className="text-gray-600 dark:text-gray-400 text-xl max-w-2xl mx-auto">
            {t('history.subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-red-600/10 hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {milestones.map((m, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className="md:w-1/2 w-full">
                  <div className={`bg-white dark:bg-gray-900 p-8 rounded-[2rem] shadow-xl border border-gray-100 dark:border-gray-800 relative group hover:border-red-600/30 transition-all ${i % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                    <div className="text-red-600 font-black text-3xl mb-2 italic">{m.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 uppercase">{m.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{m.desc}</p>
                    {m.image && (
                      <div className="mt-4 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-inner">
                        <img src={m.image} alt={m.title} className="w-full h-auto object-cover" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Icon Circle */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-red-600 rounded-2xl text-white shadow-xl shadow-red-600/20 rotate-3 group-hover:rotate-0 transition-transform">
                  <m.icon size={28} />
                </div>

                {/* Spacer for the other side */}
                <div className="md:w-1/2 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;