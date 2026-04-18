'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Collaborators() {
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
    <section id="collaborators" className="py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-16"
        >
          <motion.p
            variants={itemVariants}
            className="text-accent text-sm font-semibold tracking-widest uppercase text-center"
          >
            Collaborators
          </motion.p>

          <div className="space-y-12">
            <motion.div
              variants={itemVariants}
              className="bg-surface rounded-2xl border border-muted/20 p-12 shadow-sm"
            >
              <h3 className="text-muted text-base font-medium mb-8 text-center">
                Developed & produced with
              </h3>
              <div className="flex flex-wrap justify-center items-center" style={{ gap: 'clamp(16px, 2.5vw, 40px)' }}>
                {['Warner Bros.', 'Netflix', 'CBS', 'Nexstar', 'Alloy Entertainment', 'BuzzMedia +'].map((network) => (
                  <span
                    key={network}
                    className="font-serif text-muted font-medium whitespace-nowrap"
                    style={{ fontSize: 'clamp(14px, 1.4vw, 20px)' }}
                  >
                    {network}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-surface rounded-2xl border border-muted/20 p-12 shadow-sm"
            >
              <h3 className="text-muted text-base font-medium mb-8 text-center">
                Branded content for
              </h3>
              <div className="flex flex-wrap justify-center items-center" style={{ gap: 'clamp(16px, 2.5vw, 40px)' }}>
                {['Ford', 'Coca-Cola', 'LG', 'Pepsi', 'Disney', 'Sony', 'GM', 'DreamWorks +'].map((brand) => (
                  <span
                    key={brand}
                    className="font-serif text-muted font-medium whitespace-nowrap"
                    style={{ fontSize: 'clamp(14px, 1.4vw, 20px)' }}
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}