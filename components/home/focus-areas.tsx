"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { TrendingUp, UserCheck, Leaf, Landmark, Activity, ShieldCheck, ArrowRight } from "lucide-react"

const focusAreas = [
  {
    icon: TrendingUp,
    title: "Innovative Investment",
    description: "Retirement income and investment models designed for sustainable wealth preservation.",
  },
  {
    icon: UserCheck,
    title: "Silver Economy",
    description: "Digital inclusion strategies for post-retirement entrepreneurship and economic participation.",
  },
  {
    icon: Leaf,
    title: "Smart Agriculture",
    description: "Agribusiness and agro-allied value chains as retirement income opportunities.",
  },
  {
    icon: Landmark,
    title: "Policy Framework",
    description: "Labour transitions, pension reforms, and Africa's evolving demographic landscape.",
  },
  {
    icon: Activity,
    title: "Health & Wellbeing",
    description: "Health longevity planning, wellness strategies, and sustainable lifestyle management.",
  },
  {
    icon: ShieldCheck,
    title: "Digital Inclusion",
    description: "Technology adoption and digital skills for productive post-retirement engagement.",
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

export function FocusAreas() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            2026 Implementation Focus
          </h2>
          <p className="text-lg text-slate-600 font-mono">
            Moving beyond dialogue to actionable outcomes. The 2026 Summit prioritizes execution, measurable impact, and real investment pathways.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {focusAreas.map((area, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-lg shadow-black/5 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              style={{ willChange: 'opacity, transform' }}
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-700 transition-all">
                <area.icon className="w-7 h-7 text-emerald-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{area.title}</h3>
              <p className="text-slate-600">{area.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-12 text-center"
        >
          <Link
            href="/program"
            className="inline-flex items-center gap-2 font-bold text-emerald-700 hover:text-emerald-800 transition-colors border-b-2 border-emerald-700 pb-1 group"
          >
            View Detailed 2026 Program
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
