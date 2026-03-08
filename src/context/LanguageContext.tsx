"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    "nav.home": "Accueil",
    "nav.club": "Le Club",
    "nav.teams": "Équipes",
    "nav.shop": "Shop",
    "nav.live": "Live",
    "nav.join": "Recrutement",
    "nav.follow": "Suivre",
    "hero.title": "KACM ESPORTS",
    "hero.subtitle": "L'organisation esports de référence à Marrakech. Rejoignez l'élite du gaming marocain.",
    "hero.discover": "Découvrir",
    "about.tag": "Présentation du club",
    "about.title": "L'ESPORT À MARRAKECH REPREND SES DROITS",
    "about.desc": "KACM Esports est une organisation qui vise à développer l'esport à Marrakech et au Maroc. Nous construisons un écosystème professionnel pour permettre aux joueurs de s'épanouir.",
    "join.title": "REJOIGNEZ L'ÉLITE",
    "join.desc": "Vous avez du talent ? Vous voulez représenter Marrakech ? Le club ouvre régulièrement ses portes.",
    "join.apply": "Postuler Maintenant",
    "join.more": "En savoir plus",
    "toast.apply_success": "Candidature envoyée ! Nous vous contacterons bientôt.",
    "toast.lang_switched": "Langue changée en Français"
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.club": "النادي",
    "nav.teams": "الفرق",
    "nav.shop": "المتجر",
    "nav.live": "مباشر",
    "nav.join": "انضم إلينا",
    "nav.follow": "متابعة",
    "hero.title": "الكوكب المراكشي للرياضات الإلكترونية",
    "hero.subtitle": "منظمة الرياضات الإلكترونية المرجعية في مراكش. انضم إلى نخبة اللاعبين المغاربة.",
    "hero.discover": "اكتشف",
    "about.tag": "تقديم النادي",
    "about.title": "الرياضة الإلكترونية في مراكش تستعيد حقوقها",
    "about.desc": "KACM Esports هي منظمة تهدف إلى تطوير الرياضة الإلكترونية في مراكش والمغرب. نحن نبني نظامًا احترافيًا للسماح للاعبين بالازدهار.",
    "join.title": "انضم إلى النخبة",
    "join.desc": "هل لديك موهبة؟ هل تريد تمثيل مراكش؟ النادي يفتح أبوابه بانتظام.",
    "join.apply": "قدم الآن",
    "join.more": "اقرأ المزيد",
    "toast.apply_success": "تم إرسال الطلب! سنتصل بك قريبًا.",
    "toast.lang_switched": "تم تغيير اللغة إلى العربية"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['fr']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};