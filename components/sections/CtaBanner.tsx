'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface CtaBannerProps {
  title?: string
  subtitle?: string
}

export default function CtaBanner({
  title = 'אהבת מה שראית?',
  subtitle = 'בואי להכיר את הסטודיו ולמצוא את שמלת חלומותייך',
}: CtaBannerProps) {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', marketing: false })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-black">
      <motion.div
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-xl mx-auto text-center"
      >
        <h2 className="font-display text-4xl md:text-5xl font-light text-white tracking-[0.08em] leading-tight mb-4">
          {title}
        </h2>
        <span className="block w-45 h-px bg-gold mx-auto mb-6" />
        <p className="font-body text-base text-white/60 mb-10 leading-relaxed">
          {subtitle}
        </p>

        {sent ? (
          <p className="font-body text-gold tracking-[0.15em] text-sm">
            תודה! נחזור אלייך בהקדם.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-right">
            <input
              type="text"
              name="name"
              placeholder="שם מלא"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full bg-transparent border border-white/20 text-white text-right font-body text-sm tracking-widest px-5 py-4 placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors"
            />
            <input
              type="tel"
              name="phone"
              placeholder="מספר טלפון"
              required
              value={form.phone}
              onChange={handleChange}
              className="w-full bg-transparent border border-white/20 text-white text-right font-body text-sm tracking-widest px-5 py-4 placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="כתובת מייל"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full bg-transparent border border-white/20 text-white text-right font-body text-sm tracking-widest px-5 py-4 placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors"
            />
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative shrink-0">
                <input
                  type="checkbox"
                  name="marketing"
                  checked={form.marketing}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div className={`w-4 h-4 border transition-colors ${form.marketing ? 'bg-gold border-gold' : 'border-white/30 group-hover:border-gold/60'}`}>
                  {form.marketing && (
                    <svg viewBox="0 0 10 10" className="w-full h-full text-black" fill="none">
                      <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              </div>
              <span className="font-body text-xs text-white/50 tracking-[0.05em]">
                אני מעוניינת לקבל עדכונים ומבצעים במייל
              </span>
            </label>
            <button
              type="submit"
              className="w-full bg-gold text-black font-body text-sm tracking-[0.2em] px-12 py-5 hover:opacity-90 transition-opacity mt-2"
            >
              השאירי פרטים
            </button>
          </form>
        )}
      </motion.div>
    </section>
  )
}
