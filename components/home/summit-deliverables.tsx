"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight } from "lucide-react"

const pillars = [
  {
    title: "Policy Engagement",
    description: "Strategic dialogues with government, regulators, and labour representatives on pension sustainability.",
    points: [
      "Whitepaper releases",
      "Regulatory roundtables",
      "Compliance workshops",
    ],
  },
  {
    title: "Technical Sessions",
    description: "Hands-on training in financial planning, entrepreneurship, and post-retirement wealth strategies.",
    points: [
      "Asset allocation models",
      "Inflation hedging",
      "Demographic analytics",
    ],
  },
  {
    title: "Innovative Hub",
    description: "Interactive marketplace showcasing retirement-focused solutions, products, and business opportunities.",
    points: [
      "Fintech demonstrations",
      "Digital identity solutions",
      "Health-tech integration",
    ],
  },
]

export function SummitDeliverables() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-3xl mx-auto mb-16"
          style={{ willChange: 'opacity, transform' }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Summit Deliverables
          </h2>
          <p className="text-lg text-slate-600 font-mono">
            The National Pre-Retirement Summit delivers value through a holistic, practical, and impact-driven three-pillar structure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-3xl p-8 border-t-4 border-emerald-600 shadow-xl shadow-black/5"
              style={{ willChange: 'opacity, transform' }}
            >
              <h3 className="text-2xl font-black text-slate-900 mb-4">{pillar.title}</h3>
              <p className="text-slate-600 mb-6 min-h-[80px]">{pillar.description}</p>
              <ul className="space-y-3">
                {pillar.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="flex items-center gap-3 text-slate-800 font-medium"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 font-bold text-emerald-700 hover:text-emerald-800 transition-colors border-b-2 border-emerald-700 pb-1 group"
          >
            Learn More About What We Deliver
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
