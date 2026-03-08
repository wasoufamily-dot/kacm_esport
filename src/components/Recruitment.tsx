"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { UserPlus, ArrowRight } from 'lucide-react';
import { useLanguage } from "@/context/LanguageContext";
import { toast } from "sonner";

const Recruitment = () => {
  const { t } = useLanguage();

  const handleApply = () => {
    toast.success(t('toast.apply_success'));
  };

  return (
    <section id="join" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-gray-900 dark:bg-black rounded-[3rem] overflow-hidden p-10 md:p-20 text-center">
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-3xl text-white mb-4 rotate-3"><UserPlus size={40} /></div>
            <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter">
              {t('join.title').split(' ')[0]} <span className="text-red-600 underline decoration-white/20 underline-offset-8">{t('join.title').split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed">{t('join.desc')}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button onClick={handleApply} className="bg-red-600 hover:bg-red-700 text-white px-10 py-8 rounded-2xl text-xl font-black uppercase tracking-widest w-full sm:w-auto">
                {t('join.apply')} <ArrowRight className="ml-2" />
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/10 px-10 py-8 rounded-2xl text-xl font-bold w-full sm:w-auto">{t('join.more')}</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recruitment;