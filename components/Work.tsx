'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import WorkIcon from './WorkIcon'

const credits = [
  { project: 'The Kardashians', role: 'Multi-year content partnership', icon: 'the-kardashians' },
  { project: 'Project Runway', role: 'Original content & brand integration', icon: 'project-runway' },
  { project: 'Lucy Hale', role: 'Original content with Alloy Entertainment', icon: 'lucy-hale' },
  { project: 'Britney Spears', role: 'Original digital social strategy and content', icon: 'britney-spears' },
  { project: 'Aaron Paul', role: 'Original concept & limited partnership', icon: 'aaron-paul' },
  { project: 'Coca-Cola', role: 'Original content & brand integration', icon: 'coca-cola' },
  { project: 'Rachel Zoe', role: 'Multi-year content partnership', icon: 'rachel-zoe' },
  { project: 'Dating Rules from My Future Self', role: 'Original content & production with Alloy Entertainment', icon: 'dating-rules' },
]

export default function Work() {
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
    <section id="work" className="py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-16"
        >
          <div className="space-y-6">
            <motion.h2
              variants={itemVariants}
              className="font-serif font-semibold text-5xl lg:text-6xl leading-tight tracking-tight"
            >
              Selected work.
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-muted text-xl"
            >
              A partial list. The rest over coffee.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credits.map((credit, index) => (
              <motion.div
                key={credit.project}
                variants={itemVariants}
                className="group bg-surface rounded-2xl border border-muted/20 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-square bg-[#F5F0E8] rounded-2xl flex items-center justify-center group-hover:bg-[#F8EDE8] transition-colors duration-300">
                  <WorkIcon
                    name={credit.icon}
                    className="text-[#8A8680] group-hover:text-[#C85A3A] transition-colors duration-300"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-serif font-semibold text-xl leading-tight">
                    {credit.project}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {credit.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}