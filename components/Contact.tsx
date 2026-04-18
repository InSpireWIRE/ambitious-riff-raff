'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Contact() {
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
    <section id="contact" className="py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-16"
        >
          <motion.h2
            variants={itemVariants}
            className="font-serif font-semibold text-5xl lg:text-6xl leading-tight tracking-tight"
          >
            Let's make something.
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <h3 className="text-sm font-light tracking-wider uppercase text-muted">
                Representation
              </h3>

              <div className="space-y-3">
                <p className="text-lg">Creative Arts Management, Inc.</p>
                <div className="space-y-1">
                  <p>
                    Fabian —{' '}
                    <a
                      href="mailto:fabian@creativeartsmgmt.com"
                      className="text-accent hover:text-fg transition-colors duration-200"
                    >
                      fabian@creativeartsmgmt.com
                    </a>
                  </p>
                  <p className="text-muted">310.500.5659</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <h3 className="text-sm font-light tracking-wider uppercase text-muted">
                Studio
              </h3>

              <div className="space-y-3">
                <div className="space-y-1">
                  <p>650 W 42nd Street</p>
                  <p>New York, NY 10036</p>
                </div>
                <p>
                  <a
                    href="https://linkedin.com/in/iamcraigbland"
                    className="text-accent hover:text-fg transition-colors duration-200"
                  >
                    LinkedIn → Craig Bland
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}