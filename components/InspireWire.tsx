'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function InspireWire() {
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
    <section id="inspirewire" className="py-32 px-6" ref={ref}>
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
              Lucid Dreaming™
            </motion.p>

            <motion.h2
              variants={itemVariants}
              className="font-serif font-semibold text-5xl lg:text-6xl leading-tight tracking-tight"
            >
              How does an art form rooted in human truth embrace technology built on artificial intelligence?
            </motion.h2>

            <div className="space-y-4">
              <motion.p
                variants={itemVariants}
                className="text-muted leading-[1.65] max-w-2xl"
              >
                By treating AI not as the storyteller — but as the tool. LUCID DREAMING™ blends human creativity, editorial judgment, and custom AI workflows to reconstruct memory, testimony, evidence, and uncertainty.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-muted leading-[1.65] max-w-2xl"
              >
                Built for true crime, documentary, and premium non-fiction storytelling, our process transforms fragmented source material into emotionally powerful, broadcast-ready recreations designed to live inside real stories — not compete with them.
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-accent text-xs font-medium tracking-widest uppercase">
                The Framework
              </p>
              <p className="text-muted leading-[1.65] max-w-2xl">
                Every recreation is categorized by narrative intent and evidentiary status:{' '}
                <span className="bg-[#F5F0E8] text-fg rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide">Factual</span>
                {', '}
                <span className="bg-[#F5F0E8] text-fg rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide">Memory / Subjective</span>
                {', or '}
                <span className="bg-[#F5F0E8] text-fg rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide">Speculative</span>
                {'. Because in true crime and non-scripted storytelling: how you recreate matters.'}
              </p>
            </motion.div>

            <motion.a
              variants={itemVariants}
              href="https://inspirewire.me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-fg transition-colors duration-200 font-medium"
            >
              <span>Visit inspirewire.me</span>
              <span aria-hidden="true">→</span>
            </motion.a>
          </div>

          <div className="space-y-10">
            <motion.p
              variants={itemVariants}
              className="text-accent text-sm font-semibold tracking-widest uppercase"
            >
              Innovation + Integrity
            </motion.p>

            <motion.h3
              variants={itemVariants}
              className="font-serif font-semibold text-3xl lg:text-4xl leading-tight tracking-tight"
            >
              Innovation means nothing if the integrity of the art is left behind.
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed"
            >
              Platform-agnostic. Technology-agnostic. We assemble the best AI tools and human artistry for each project — at 60–80% less than traditional recreation budgets. No actors. No sets. No B-unit crews. Just broadcast-ready scenes, delivered in days.
            </motion.p>

            <motion.a
              variants={itemVariants}
              href="mailto:craig@inspirewire.me"
              className="inline-flex items-center gap-2 text-accent hover:text-fg transition-colors duration-200 font-medium"
            >
              <span>craig@inspirewire.me</span>
              <span aria-hidden="true">→</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
