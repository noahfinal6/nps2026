"use client"

import { Landmark, Building2, Users, Shield, Banknote, Globe } from "lucide-react"

const partners = [
  { name: "OSGF", icon: Landmark, color: "text-slate-700" },
  { name: "OHCSF", icon: Building2, color: "text-slate-700" },
  { name: "NLC", icon: Users, color: "text-emerald-700" },
  { name: "NSITF", icon: Shield, color: "text-orange-600" },
  { name: "BPSR", icon: Landmark, color: "text-slate-700" },
  { name: "Galaxy Backbone", icon: Globe, color: "text-emerald-700" },
  { name: "Trustfund Pensions", icon: Banknote, color: "text-orange-600" },
  { name: "ECOWAS Commission", icon: Globe, color: "text-emerald-700" },
]

export function PartnersMarquee() {
  return (
    <section className="py-12 bg-white border-b border-gray-200 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center font-mono text-sm font-bold text-slate-500 uppercase tracking-widest">
          Strategic Partners & Sponsors
        </p>
      </div>

      <div className="relative flex max-w-[100vw] overflow-hidden group">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Marquee */}
        <div className="animate-marquee flex items-center gap-16 py-4" style={{ willChange: 'transform' }}>
          {/* First Set */}
          {partners.map((partner, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default shrink-0"
            >
              <partner.icon className={`w-8 h-8 ${partner.color}`} />
              <span className="font-black text-2xl text-slate-800 tracking-tighter whitespace-nowrap">
                {partner.name}
              </span>
            </div>
          ))}
          {/* Duplicate Set for Seamless Loop */}
          {partners.map((partner, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default shrink-0"
            >
              <partner.icon className={`w-8 h-8 ${partner.color}`} />
              <span className="font-black text-2xl text-slate-800 tracking-tighter whitespace-nowrap">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 text-center">
        <a
          href="/partners"
          className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
        >
          View All Partners & Sponsorship Tiers
        </a>
      </div>
    </section>
  )
}
