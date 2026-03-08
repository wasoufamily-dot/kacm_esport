"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/context/LanguageContext";
import { toast } from "sonner";
import { User, MapPin, ShoppingBag, CreditCard, Send, Loader2 } from 'lucide-react';

const OrderForm = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formSchema = z.object({
    fullName: z.string().min(2, "Nom requis"),
    location: z.string().min(2, "Ville / Pays requis"),
    address: z.string().min(5, "Adresse complète requise"),
    phone: z.string().min(10, "Numéro valide requis"),
    email: z.string().email("Email invalide"),
    product: z.string().min(1, "Produit requis"),
    size: z.string().min(1, "Taille requise"),
    paymentMethod: z.string().default("cod"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      location: "",
      address: "",
      phone: "",
      email: "",
      product: "",
      size: "",
      paymentMethod: "cod",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const subject = encodeURIComponent(`Nouvelle Commande KACM - ${values.fullName}`);
      const body = encodeURIComponent(
        `Détails de la commande :\n\n` +
        `Produit : ${values.product}\n` +
        `Taille : ${values.size}\n` +
        `Mode de paiement : ${values.paymentMethod === 'cod' ? 'Paiement à la livraison' : values.paymentMethod}\n\n` +
        `Informations client :\n` +
        `Nom complet : ${values.fullName}\n` +
        `Ville/Pays : ${values.location}\n` +
        `Adresse : ${values.address}\n` +
        `Téléphone : ${values.phone}\n` +
        `Email : ${values.email}`
      );

      const mailtoUrl = `mailto:off.kacmesport@gmail.com?subject=${subject}&body=${body}`;
      
      // فتح تطبيق البريد
      window.location.href = mailtoUrl;
      
      toast.success("Redirection vers votre application de messagerie...");
      form.reset();
    } catch (error) {
      toast.error("Une erreur est survenue.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const products = [
    { id: "maillot", name: "Maillot officiel KACM", price: "Exclusif Membres", image: "https://i.top4top.io/p_3713tfx0i1.jpeg" },
    { id: "hoodie", name: "Hoodie officiel KACM", price: "350 DH", image: "https://e.top4top.io/p_3713vo24n1.jpeg" }
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
      <div className="bg-red-600 p-8 text-white text-center">
        <h2 className="text-3xl font-black uppercase italic tracking-tighter">{t('order.title')}</h2>
        <p className="text-red-100 mt-2 opacity-80">Portez les couleurs de Marrakech</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-8 md:p-12 space-y-12">
          {/* Section 1: Client Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-red-600 border-b border-red-100 dark:border-red-900/30 pb-2">
              <User size={24} />
              <h3 className="text-xl font-bold uppercase italic">{t('order.clientInfo')}</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <FormField control={form.control} name="fullName" render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('form.fullName')}</FormLabel>
                  <FormControl><Input placeholder="Ex: Ahmed Alami" {...field} className="rounded-xl" /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="location" render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('form.location')}</FormLabel>
                  <FormControl><Input placeholder="Ex: Marrakech, Maroc" {...field} className="rounded-xl" /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="phone" render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('form.phone')}</FormLabel>
                  <FormControl><Input placeholder="Ex: +212 6 00 00 00 00" {...field} className="rounded-xl" /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('order.email')}</FormLabel>
                  <FormControl><Input type="email" placeholder="Ex: contact@email.com" {...field} className="rounded-xl" /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="address" render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>{t('order.address')}</FormLabel>
                  <FormControl><Textarea placeholder="Votre adresse complète pour la livraison..." {...field} className="rounded-xl min-h-[80px]" /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>
          </div>

          {/* Section 2: Product Selection */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-red-600 border-b border-red-100 dark:border-red-900/30 pb-2">
              <ShoppingBag size={24} />
              <h3 className="text-xl font-bold uppercase italic">{t('order.product')}</h3>
            </div>
            <FormField control={form.control} name="product" render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="grid md:grid-cols-2 gap-6">
                    {products.map((product) => (
                      <div key={product.id} className="relative">
                        <RadioGroupItem value={product.name} id={product.id} className="peer sr-only" />
                        <Label
                          htmlFor={product.id}
                          className="flex flex-col items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border-2 border-transparent peer-data-[state=checked]:border-red-600 peer-data-[state=checked]:bg-red-50 dark:peer-data-[state=checked]:bg-red-900/20 cursor-pointer transition-all hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <img src={product.image} alt={product.name} className="w-full aspect-square object-cover rounded-xl shadow-md" />
                          <div className="text-center">
                            <div className="font-black uppercase italic text-sm">{product.name}</div>
                            <div className="text-red-600 font-bold">{product.price}</div>
                          </div>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          {/* Section 3: Size Selection */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-red-600 border-b border-red-100 dark:border-red-900/30 pb-2">
              <MapPin size={24} />
              <h3 className="text-xl font-bold uppercase italic">{t('order.size')}</h3>
            </div>
            <FormField control={form.control} name="size" render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="rounded-xl py-6">
                      <SelectValue placeholder="Sélectionnez votre taille" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                      <SelectItem key={size} value={size}>{size}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          {/* Section 4: Payment Method */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-red-600 border-b border-red-100 dark:border-red-900/30 pb-2">
              <CreditCard size={24} />
              <h3 className="text-xl font-bold uppercase italic">{t('order.payment')}</h3>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border-2 border-red-600/20 flex items-center gap-4">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white">
                <CreditCard size={20} />
              </div>
              <div>
                <div className="font-bold text-gray-900 dark:text-white">{t('order.cod')}</div>
                <div className="text-sm text-gray-500">Payez en espèces lors de la réception de votre colis.</div>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-8 rounded-2xl text-xl font-black uppercase tracking-widest shadow-xl shadow-red-600/20 transition-all hover:scale-[1.02]"
            >
              {isSubmitting ? <Loader2 className="mr-2 animate-spin" /> : <Send className="mr-2" />}
              {t('order.submit')}
            </Button>
            <p className="text-center text-gray-500 text-sm mt-6 italic">
              En cliquant sur envoyer, votre application de messagerie s'ouvrira pour finaliser l'envoi.
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default OrderForm;