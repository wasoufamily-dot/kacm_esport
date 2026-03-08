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
    "form.title": "Formulaire de Candidature",
    "form.personal": "Informations personnelles",
    "form.gaming": "Informations gaming",
    "form.experience": "Expérience",
    "form.motivation": "Pourquoi voulez-vous rejoindre KACM Esports ?",
    "form.fullName": "Nom complet",
    "form.pseudo": "Pseudo gaming",
    "form.age": "Âge",
    "form.location": "Pays / Ville",
    "form.phone": "Numéro de téléphone",
    "form.mainGame": "Jeu principal",
    "form.rank": "Rank / Niveau",
    "form.role": "Rôle dans l'équipe",
    "form.expYears": "Années d'expérience",
    "form.platform": "Plateforme",
    "form.prevTeams": "Anciennes équipes",
    "form.tournaments": "Tournois joués",
    "form.achievements": "Réalisations ou victoires",
    "form.submit": "Envoyer la candidature",
    "form.success": "Candidature envoyée ! L'équipe KACM examinera votre demande.",
    "order.title": "Formulaire de Commande",
    "order.clientInfo": "Informations client",
    "order.address": "Adresse complète",
    "order.email": "Adresse email",
    "order.product": "Produit à commander",
    "order.size": "Taille du produit",
    "order.payment": "Mode de paiement",
    "order.cod": "Paiement à la livraison",
    "order.submit": "Envoyer la commande",
    "order.success": "Commande envoyée ! Nous vous contacterons pour confirmer la livraison.",
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
    "form.title": "نموذج طلب الانضمام",
    "form.personal": "المعلومات الشخصية",
    "form.gaming": "معلومات الألعاب",
    "form.experience": "الخبرة",
    "form.motivation": "لماذا تريد الانضمام إلى KACM Esports؟",
    "form.fullName": "الاسم الكامل",
    "form.pseudo": "الاسم المستعار (Pseudo)",
    "form.age": "العمر",
    "form.location": "البلد / المدينة",
    "form.phone": "رقم الهاتف",
    "form.mainGame": "اللعبة الأساسية",
    "form.rank": "المستوى / الرتبة",
    "form.role": "الدور في الفريق",
    "form.expYears": "سنوات الخبرة",
    "form.platform": "المنصة",
    "form.prevTeams": "الفرق السابقة",
    "form.tournaments": "البطولات التي لعبتها",
    "form.achievements": "الإنجازات أو الانتصارات",
    "form.submit": "إرسال الطلب",
    "form.success": "تم إرسال الطلب! سيقوم فريق KACM بمراجعة طلبك.",
    "order.title": "نموذج الطلب",
    "order.clientInfo": "معلومات العميل",
    "order.address": "العنوان الكامل",
    "order.email": "البريد الإلكتروني",
    "order.product": "المنتج المطلوب",
    "order.size": "المقاس",
    "order.payment": "طريقة الدفع",
    "order.cod": "الدفع عند الاستلام",
    "order.submit": "إرسال الطلب",
    "order.success": "تم إرسال الطلب! سنتصل بك لتأكيد التوصيل.",
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