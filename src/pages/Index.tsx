"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import History from '@/components/History';
import Teams from '@/components/Teams';
import Shop from '@/components/Shop';
import Live from '@/components/Live';
import Recruitment from '@/components/Recruitment';
import Footer from '@/components/Footer';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-red-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <History />
        <Teams />
        <Shop />
        <Live />
        <Recruitment />
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;