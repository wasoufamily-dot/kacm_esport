"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingCart, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Maillot Officiel KACM",
      price: "Exclusif",
      image: "https://i.top4top.io/p_3713tfx0i1.jpeg",
      desc: "Maillot officiel KACM Esports réservé exclusivement aux membres du club.",
      badge: "Membres"
    },
    {
      id: 2,
      name: "Hoodie Officiel KACM",
      price: "350 DH",
      image: "https://e.top4top.io/p_3713vo24n1.jpeg",
      desc: "Hoodie officiel KACM Esports de haute qualité pour tous nos supporters.",
      badge: "Best Seller"
    }
  ];

  return (
    <section id="shop" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">SHOP <span className="text-red-600">OFFICIEL</span></h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl">Portez les couleurs de votre équipe préférée. Produits officiels de haute qualité.</p>
          </div>
          <Button asChild variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full px-8">
            <Link to="/commande">Voir tout le shop</Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-gray-50 dark:bg-gray-800 rounded-[2rem] overflow-hidden flex flex-col lg:flex-row border border-transparent hover:border-red-600/20 transition-all">
              <div className="lg:w-1/2 aspect-square lg:aspect-auto overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-red-600 font-bold text-xs uppercase tracking-widest mb-4">
                  <Tag size={14} />
                  {product.badge}
                </div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3 italic uppercase">{product.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 leading-relaxed">{product.desc}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-black text-red-600">{product.price}</span>
                  <Button asChild className="bg-black dark:bg-red-600 hover:bg-red-600 dark:hover:bg-red-700 text-white rounded-xl px-6 transition-colors">
                    <Link to="/commande">
                      <ShoppingCart size={18} className="mr-2" />
                      Acheter
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;