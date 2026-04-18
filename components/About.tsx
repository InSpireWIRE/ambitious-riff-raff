'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
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
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-20"
        >
          <div className="lg:col-span-2 space-y-10">
            <motion.h2
              variants={itemVariants}
              className="font-serif font-semibold text-5xl lg:text-6xl leading-tight tracking-tight"
            >
              Twenty years of entertainment people actually watch.
            </motion.h2>

            <div className="space-y-8 text-lg leading-relaxed">
              <motion.p variants={itemVariants}>
                I've spent two decades in entertainment — developing and producing unscripted series, docu-series, branded content for Fortune 500s, and original multi-platform productions with A-list talent. Ambitious Riff Raff is the NYC studio I run to keep doing that work.
              </motion.p>

              <motion.p variants={itemVariants}>
                The industry is changing. Budgets are tighter, timelines are shorter, and the tools are finally catching up. I'm building Ambitious Riff Raff to be cloud-native and AI-augmented from the ground up — so we can move faster without losing the craft.
              </motion.p>

              <motion.p variants={itemVariants}>
                That journey led to a side problem worth solving. More on that below.
              </motion.p>
            </div>
          </div>

          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <h3 className="text-sm font-semibold tracking-widest uppercase text-muted">
              Quick Facts
            </h3>

            <div className="space-y-4 text-base">
              <div className="border-l-4 border-accent pl-6">
                <p className="font-medium">Based in NYC</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <p className="font-medium">20+ years unscripted</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <p className="font-medium">Fortune 500 branded content</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <p className="font-medium">A-list talent & IP</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <a
                  href="https://linkedin.com/in/iamcraigbland"
                  className="text-accent hover:text-fg transition-colors duration-200 font-medium"
                >
                  LinkedIn: /in/iamcraigbland
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}