"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  phone: string;
  message: string;
};

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();
  const [sent, setSent] = useState(false);

  const onSubmit = (data: FormValues) => {
    console.log("contact", data);
    setSent(true);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-corp">
      <input className="w-full rounded-lg border border-slate-300 p-3 text-sm outline-none transition focus:border-accent" placeholder="Ad Soyad" {...register("name", { required: true })} />
      {errors.name && <p className="text-sm text-red-600">Ad soyad zorunludur.</p>}
      <input className="w-full rounded-lg border border-slate-300 p-3 text-sm outline-none transition focus:border-accent" placeholder="Telefon" {...register("phone", { required: true, minLength: 10 })} />
      {errors.phone && <p className="text-sm text-red-600">Gecerli telefon giriniz.</p>}
      <textarea className="min-h-28 w-full rounded-lg border border-slate-300 p-3 text-sm outline-none transition focus:border-accent" placeholder="Aracinizin durumu" {...register("message", { required: true })} />
      {errors.message && <p className="text-sm text-red-600">Mesaj alani zorunludur.</p>}
      <button type="submit" className="inline-flex min-h-11 items-center justify-center rounded-lg bg-accent px-5 py-3 font-bold text-white transition hover:bg-accent-hover">Cekici Cagir</button>
      {sent && <p className="text-sm text-green-700">Talebiniz alindi. En kisa surede donuyoruz.</p>}
    </form>
  );
}
