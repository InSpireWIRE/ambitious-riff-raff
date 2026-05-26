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
              AI Visual Recreations
            </motion.p>

            <motion.h2
              variants={itemVariants}
              className="font-serif font-semibold text-5xl lg:text-6xl leading-tight tracking-tight"
            >
              !nSpireWIRE. Scenes that never existed — brought to the screen.
            </motion.h2>

            <div className="space-y-4">
              <motion.p
                variants={itemVariants}
                className="text-muted leading-[1.65] max-w-2xl"
              >
                Platform-agnostic AI-powered recreations for documentary and true crime. We work with filmmakers to identify what the story needs, then assemble the best combination of AI technology and human artistry to make it real. No single tool does it all. We do.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-muted leading-[1.65] max-w-2xl"
              >
                Three tiers of output — from{' '}
                <span className="bg-[#F5F0E8] text-fg rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide">Stylized & Animated</span>
                {' to '}
                <span className="bg-[#F5F0E8] text-fg rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide">Cinematic & Atmospheric</span>
                {' to '}
                <span className="bg-[#F5F0E8] text-fg rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide">Photorealistic</span>
                {' — at 60–80% less than traditional recreation budgets.'}
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-accent text-xs font-medium tracking-widest uppercase">
                Capabilities
              </p>
              <p className="text-muted leading-[1.65] max-w-2xl">
                Scene generation from script descriptions. Character consistency across episodes. Location reconstruction from reference photos and satellite imagery. Controlled cinematography. Integrated audio design. Identity protection for anonymous participants.
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
              Why It Matters
            </motion.p>

            <motion.h3
              variants={itemVariants}
              className="font-serif font-semibold text-3xl lg:text-4xl leading-tight tracking-tight"
            >
              The budget killed the scene. We bring it back.
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed"
            >
              True crime and documentary productions spend $15–50K per episode on traditional recreations — actors, sets, B-unit crews. AI recreations deliver broadcast-quality output in days, not weeks, at a fraction of the cost. Built by producers, for producers.
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
