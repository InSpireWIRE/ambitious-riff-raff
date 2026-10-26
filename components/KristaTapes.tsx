'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function KristaTapes() {
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
    <section id="krista-tapes" className="py-32 px-6 bg-surface" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start"
        >
          <div className="space-y-10">
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">
                The Krista Tapes
              </span>
              <span className="inline-block rounded-full border border-accent/40 px-3 py-1 text-xs font-medium tracking-widest uppercase text-accent">
                In Development
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="font-serif font-semibold text-5xl lg:text-6xl leading-tight tracking-tight"
            >
              She said he couldn&rsquo;t hurt a fly. Hear what she says now.
            </motion.h2>

            <div className="space-y-4">
              <motion.p
                variants={itemVariants}
                className="text-muted leading-[1.65] max-w-2xl"
              >
                A podcast and multimedia project. Krista Sinor lived with Jesse Lee Calhoun until the day he was taken into custody. The news got minutes with her. We got three years &mdash; calls, interviews, photos, texts, videos and the letters he wrote her from jail. Three years in which denial gave way to doubt, and doubt gave way to the unthinkable.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-muted leading-[1.65] max-w-2xl"
              >
                How does the man she described as someone who &ldquo;couldn&rsquo;t hurt a fly&rdquo; end up charged in connection with six deaths? Season One is in development now.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-muted/70 text-sm leading-[1.65] max-w-2xl"
              >
                Jesse Lee Calhoun is charged, not convicted. He has pleaded not guilty. Every charge is an allegation until proven in court.
              </motion.p>
            </div>

            <motion.a
              variants={itemVariants}
              href="https://www.thekristatapes.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-fg transition-colors duration-200 font-medium"
            >
              <span>Visit thekristatapes.com</span>
              <span aria-hidden="true">&rarr;</span>
            </motion.a>
          </div>

          <div className="space-y-10">
            <motion.p
              variants={itemVariants}
              className="text-accent text-sm font-semibold tracking-widest uppercase"
            >
              The Format
            </motion.p>

            <motion.h3
              variants={itemVariants}
              className="font-serif font-semibold text-3xl lg:text-4xl leading-tight tracking-tight"
            >
              Three years of access, told as it was lived.
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed"
            >
              Built as a narrative true-crime podcast with a companion multimedia experience &mdash; audio, archive, and the primary-source record of a relationship that ended in the back of a patrol car. Audio arrives with the premiere.
            </motion.p>

            <motion.a
              variants={itemVariants}
              href="https://www.thekristatapes.com/get-the-story-first"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-fg transition-colors duration-200 font-medium"
            >
              <span>Get the story first</span>
              <span aria-hidden="true">&rarr;</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
