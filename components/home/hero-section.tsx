"use client"

import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{
      background: `linear-gradient(135deg, #016633 0%, #CC3300 100%)`,
    }}>
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
        alt=""
        fill
        className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-overlay"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        quality={75}
      />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">
          <div className="max-w-4xl flex-1">
          {/* Date/Location Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-4 px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white font-mono text-sm mb-8 backdrop-blur-sm"
            style={{ willChange: 'opacity, transform' }}
          >
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              15-16 July 2026
            </span>
            <span className="w-1 h-1 rounded-full bg-white/50" />
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Abuja, Nigeria
            </span>
          </motion.div>



          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            style={{ willChange: 'opacity, transform' }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter mb-6">
              <span className="text-gray-400">Own Your</span> <br />
              <span className="text-white">
                Retirement.
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-200 font-medium max-w-2xl mb-10 leading-relaxed font-mono"
            style={{ willChange: 'opacity, transform' }}
          >
            From Planning to Action. Join Africa&apos;s premier platform for retirement readiness, financial security, and post-career productivity.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col sm:flex-row gap-4"
            style={{ willChange: 'opacity, transform' }}
          >
            <a
              href="https://retirementsummit.xemgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-white/90 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg text-center shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2 group"
            >
              Register Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/program"
              className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/30 px-8 py-4 rounded-xl font-bold text-lg text-center transition-all hover:-translate-y-1"
            >
              View Program
            </Link>
          </motion.div>
          </div>

          {/* Right Side: NPS 2026 Logo and Year */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex flex-col items-center"
          >
            <h2 className="text-6xl md:text-7xl font-black text-amber-300 leading-none">2026</h2>
            <div
              className="w-96 h-96 mx-auto bg-cover bg-center"
              style={{
                backgroundImage: `url('https://pulocfsnftbohjbwqbhv.supabase.co/storage/v1/object/public/images/npslogo.png')`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
