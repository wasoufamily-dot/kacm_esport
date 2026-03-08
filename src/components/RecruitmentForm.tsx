"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/context/LanguageContext";
import { toast } from "sonner";
import { User, Gamepad2, Trophy, Send } from 'lucide-react';

const RecruitmentForm = () => {
  const { t } = useLanguage();

  const formSchema = z.object({
    fullName: z.string().min(2, "Nom requis"),
    pseudo: z.string().min(2, "Pseudo requis"),
    age: z.string().min(1, "Âge requis"),
    location: z.string().min(2, "Localisation requise"),
    phone: z.string().min(10, "Numéro valide requis"),
    mainGame: z.string().min(2, "Jeu requis"),
    rank: z.string().min(1, "Niveau requis"),
    role: z.string().min(2, "Rôle requis"),
    experienceYears: z.string().min(1, "Expérience requise"),
    platform: z.string().min(1, "Plateforme requise"),
    previousTeams: z.string().optional(),
    tournaments: z.string().optional(),
    achievements: z.string().optional(),
    motivation: z.string().min(10, "Motivation requise"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      pseudo: "",
      age: "",
      location: "",
      phone: "",
      mainGame: "",
      rank: "",
      role: "",
      experienceYears: "",
      platform: "",
      previousTeams: "",
      tournaments: "",
      achievements: "",
      motivation: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted to off.kacmesport@gmail.com:", values);
    toast.success(t('form.success'));
    form.reset();
  };

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
      <div className="bg-red-600 p-8 text-white text-center">
        <h2 className="text-3xl font-black uppercase italic tracking-tighter">{t('form.title')}</h2>
        <p className="text-red-100 mt-2 opacity-80">Rejoignez l'aventure KACM Esports</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-8 md:p-12 space-y-12">
          {/* Section 1: Personal Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-red-600 border-b border-red-100 dark:border-red-900/30 pb-2">
              <User size={24} />
              <h3 className="text-xl font-bold uppercase italic">{t('form.personal')}</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <FormField control={form.control} name="fullName" render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('form.fullName')}</FormLabel>
                  <FormControl><Input placeholder="Ex: Ahmed Alami" {...field} className="rounded-xl" /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="pseudo" render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('form.pseudo')}</FormLabel>
                  <FormControl><Input placeholder="Ex: KACM_ProPlayer" {...field} className="rounded-xl" /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="age" render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('form.age')}</FormLabel>
                  <FormControl><Input type="number" placeholder="Ex: 19" {...field} className="rounded-xl" /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="location" render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('form.location')}</FormLabel>
                  <FormControl><Input placeholder="Ex: Maroc / Marrakech" {...field} className="rounded-xl" /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="phone" render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>{t('form.phone')}</FormLabel>
                  <FormControl><Input placeholder="Ex: +212 6 00 00 00 00" {...field} className="rounded-xl" /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>
          </div>

          {/* Section 2: Gaming Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-red-600 border-b border-red-100 dark:border-red-900/30 pb-2">
              <Gamepad2 size={24} />
              <h3 className="text-xl font-bold uppercase italic">{t('form.gaming')}</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <FormField control={form.control} name="mainGame" render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('form.mainGame')}</FormLabel>
                  <FormControl><Input placeholder="Ex: Free Fire, Valorant..." {...field} className="rounded-xl" /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="rank" render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('form.rank')}</FormLabel>
                  <FormControl><Input placeholder="Ex: Grandmaster, Radiant..." {...field} className="rounded-xl" /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="role" render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('form.role')}</FormLabel>
                  <FormControl><Input placeholder="Ex: IGL, Sniper, Entry..." {...field} className="rounded-xl" /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="experienceYears" render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('form.expYears')}</FormLabel>
                  <FormControl><Input placeholder="Ex: 3 ans" {...field} className="rounded-xl" /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="platform" render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>{t('form.platform')}</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Sélectionnez votre plateforme" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="PC">PC</SelectItem>
                      <SelectItem value="Mobile">Mobile</SelectItem>
                      <SelectItem value="Console">Console (PS/Xbox)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )} />
            </div>
          </div>

          {/* Section 3: Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-red-600 border-b border-red-100 dark:border-red-900/30 pb-2">
              <Trophy size={24} />
              <h3 className="text-xl font-bold uppercase italic">{t('form.experience')}</h3>
            </div>
            <div className="space-y-6">
              <FormField control={form.control} name="previousTeams" render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('form.prevTeams')}</FormLabel>
                  <FormControl><Textarea placeholder="Listez vos anciennes équipes..." {...field} className="rounded-xl min-h-[100px]" /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="tournaments" render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('form.tournaments')}</FormLabel>
                  <FormControl><Textarea placeholder="Quels tournois avez-vous joués ?" {...field} className="rounded-xl min-h-[100px]" /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="achievements" render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('form.achievements')}</FormLabel>
                  <FormControl><Textarea placeholder="Vos plus grandes victoires..." {...field} className="rounded-xl min-h-[100px]" /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>
          </div>

          {/* Section 4: Motivation */}
          <div className="space-y-6">
            <FormField control={form.control} name="motivation" render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-bold text-red-600 uppercase italic">{t('form.motivation')}</FormLabel>
                <FormControl><Textarea placeholder="Dites-nous pourquoi vous êtes le candidat idéal..." {...field} className="rounded-xl min-h-[150px]" /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <div className="pt-6">
            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-8 rounded-2xl text-xl font-black uppercase tracking-widest shadow-xl shadow-red-600/20 transition-all hover:scale-[1.02]">
              <Send className="mr-2" />
              {t('form.submit')}
            </Button>
            <p className="text-center text-gray-500 text-sm mt-6 italic">
              L'équipe KACM examine chaque demande avec attention. Nous vous contacterons si votre profil correspond à nos besoins.
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default RecruitmentForm;