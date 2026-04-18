'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AlignAI() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="alignai" className="py-32 px-6 bg-surface" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start"
        >
          <div className="space-y-10">
            <motion.p
              variants={itemVariants}
              className="text-accent text-sm font-semibold tracking-widest uppercase"
            >
              What's Next
            </motion.p>

            <motion.h2
              variants={itemVariants}
              className="font-serif font-semibold text-5xl lg:text-6xl leading-tight tracking-tight"
            >
              AlignAI. Honest reviews for AI tools, scored by NLP, paid by no one.
            </motion.h2>

            <div className="space-y-4">
              <motion.p
                variants={itemVariants}
                className="text-muted leading-[1.65] max-w-2xl"
              >
                After two years studying the AI industry while developing a true-crime docu-series, I went looking for tools to speed up production. I couldn't find what I needed. Every 'best AI tools' list I read turned out to be paid for by the vendors. So I started building my own tools to solve real production problems — and built AlignAI to find the honest ones.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-muted leading-[1.65] max-w-2xl"
              >
                AlignAI uses a proprietary 5-Layer Community Intelligence system — not simple star ratings. Our NLP engine analyzes every review for specificity, business context, implementation depth, and sentiment. Reviews are weighted by source credibility, recency, and detail — a 6-month production review counts far more than a vague launch-day comment.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-muted leading-[1.65] max-w-2xl"
              >
                The result: a score from 0 to 100 with a community verdict —{' '}
                <span className="bg-[#E8F4E4] text-[#2F5F1D] rounded-full px-2 py-0.5 text-xs font-semibold uppercase tracking-wide">WORKED</span>
                {' (75+), '}
                <span className="bg-[#FCF0DC] text-[#8A5A11] rounded-full px-2 py-0.5 text-xs font-semibold uppercase tracking-wide">MIXED</span>
                {' (50–74), or '}
                <span className="bg-[#FCE8E4] text-[#8A2F1D] rounded-full px-2 py-0.5 text-xs font-semibold uppercase tracking-wide">FAILED</span>
                {' (below 50) — plus a confidence band. Zero affiliate links. Zero sponsored placements.'}
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-accent text-xs font-medium tracking-widest uppercase">
                Also Inside AlignAI
              </p>
              <h3 className="font-serif text-2xl text-fg">
                Their prompts go stale. Ours stay fresh.
              </h3>
              <p className="text-muted leading-[1.65] max-w-2xl">
                Field-tested AI prompts for small business — optimized to get the right answer on the first try. Across{' '}
                <span className="bg-[#F5F0E8] text-fg rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide">Claude</span>
                {', '}
                <span className="bg-[#F5F0E8] text-fg rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide">ChatGPT</span>
                {', '}
                <span className="bg-[#F5F0E8] text-fg rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide">Gemini</span>
                {', and '}
                <span className="bg-[#F5F0E8] text-fg rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide">Copilot</span>
                {'. Free to copy. Re-verified April 2026.'}
              </p>
            </motion.div>

            <motion.a
              variants={itemVariants}
              href="https://alignai.business"
              className="inline-flex items-center gap-2 text-accent hover:text-fg transition-colors duration-200 font-medium"
            >
              <span>Visit AlignAI.business</span>
              <span aria-hidden="true">→</span>
            </motion.a>
          </div>

          <div className="space-y-10">
            <motion.p
              variants={itemVariants}
              className="text-accent text-sm font-semibold tracking-widest uppercase"
            >
              Community
            </motion.p>

            <motion.h3
              variants={itemVariants}
              className="font-serif font-semibold text-3xl lg:text-4xl leading-tight tracking-tight"
            >
              r/AIToolsForSMB
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed"
            >
              Where I post what doesn't fit on the platform — the rants, the weird tool of the week, the questions worth asking.
            </motion.p>

            <motion.a
              variants={itemVariants}
              href="https://reddit.com/r/AIToolsForSMB"
              className="inline-flex items-center gap-2 text-accent hover:text-fg transition-colors duration-200 font-medium"
            >
              <span>reddit.com/r/AIToolsForSMB</span>
              <span aria-hidden="true">→</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}