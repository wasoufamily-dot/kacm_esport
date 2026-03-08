"use client";

import React from 'react';
import { Instagram, Twitter, Facebook, Youtube, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img 
                src="https://a.top4top.io/p_3712vqtj61.png" 
                alt="KACM Logo" 
                className="h-12 w-auto"
              />
              <span className="font-black text-2xl tracking-tighter text-gray-900">
                KACM <span className="text-red-600">ESPORTS</span>
              </span>
            </div>
            <p className="text-gray-500 leading-relaxed">
              L'organisation esports leader à Marrakech, dédiée à l'excellence compétitive et au développement des talents marocains.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-gray-400 hover:text-red-600 hover:border-red-100 transition-all shadow-sm">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-gray-900 uppercase tracking-widest mb-6 italic">Navigation</h4>
            <ul className="space-y-4">
              {['Accueil', 'Le Club', 'Équipes', 'Shop', 'Live', 'Recrutement'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-500 hover:text-red-600 transition-colors font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-gray-900 uppercase tracking-widest mb-6 italic">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-500">
                <MapPin size={20} className="text-red-600 flex-shrink-0 mt-1" />
                <span>Marrakech, Maroc</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500">
                <Mail size={20} className="text-red-600 flex-shrink-0" />
                <span>contact@kacmesports.ma</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-gray-900 uppercase tracking-widest mb-6 italic">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-4">Inscrivez-vous pour recevoir les dernières news et exclusivités.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="bg-white border border-gray-200 rounded-xl px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all"
              />
              <button className="bg-red-600 text-white p-3 rounded-xl hover:bg-red-700 transition-colors">
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} KACM Esports. Tous droits réservés.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-red-600 transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-red-600 transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;