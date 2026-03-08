"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OrderForm from '@/components/OrderForm';
import { MadeWithDyad } from "@/components/made-with-dyad";

const OrderPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 selection:bg-red-600 selection:text-white">
      <Navbar />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter uppercase italic">
              SHOP <span className="text-red-600">OFFICIEL</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-xl max-w-2xl mx-auto">
              Commandez vos équipements officiels KACM Esports en quelques clics.
            </p>
          </div>
          <OrderForm />
        </div>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default OrderPage;