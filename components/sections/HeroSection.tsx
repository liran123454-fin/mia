'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

interface HeroSectionProps {
  videoSrc?: string
}

export default function HeroSection({ videoSrc }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Background video */}
      {videoSrc && (
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      )}

      {/* Dark overlay — מבטיח קריאות הטקסט */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-xs text-gold tracking-[0.3em] mb-6 uppercase"
        >
          Bridal House
        </motion.p>

        <motion.h1
          initial={{ y: 30 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-display text-7xl md:text-8xl lg:text-9xl font-light text-white tracking-[0.12em] leading-none mb-6"
        >
          MIA
        </motion.h1>

        <motion.p
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="font-display text-xl md:text-2xl font-light text-white/85 tracking-[0.06em] mb-12 italic"
        >
          כי הרגע הזה מגיע פעם אחת
        </motion.p>

        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <Button href="#contact" size="lg" className="tracking-[0.2em] text-xs">
            לתיאום פגישה
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{}}
        animate={{}}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-xs text-white/40 tracking-widest">גללי</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-px h-8 bg-white/30"
        />
      </motion.div>
    </section>
  )
}
