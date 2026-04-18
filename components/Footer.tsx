'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Footer() {
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
    <footer className="border-t border-muted/20 py-16 px-6 bg-bg" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
        >
          <motion.p variants={itemVariants} className="text-sm text-muted">
            © 2026 Ambitious Riff Raff. New York.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex gap-6"
          >
            {[
              { label: 'LinkedIn', href: 'https://linkedin.com/in/iamcraigbland' },
              { label: 'Reddit', href: 'https://reddit.com/r/AIToolsForSMB' },
              { label: 'AlignAI', href: 'https://alignai.business' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm text-muted hover:text-accent transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}