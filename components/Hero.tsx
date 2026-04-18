'use client'

import { motion } from 'framer-motion'
import AR2Mark from './AR2Mark'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 flex items-center justify-center lg:justify-start h-full min-h-screen lg:min-h-[70vh]"
        >
          <AR2Mark size={380} className="lg:w-[560px] lg:h-[560px] w-[380px] h-[380px]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.06 }}
          className="lg:col-span-2 space-y-8"
        >
          <div className="space-y-8 max-w-2xl">
            <p className="text-accent text-sm font-medium tracking-widest uppercase">
              Ambitious Riff Raff · New York
            </p>

            <h1 className="font-serif font-semibold text-3xl lg:text-5xl leading-[1.1] tracking-tight">
              Two decades of entertainment, partnerships, and production. Built with the biggest brands, networks, and names in the business.
            </h1>

            <p className="text-muted text-lg leading-relaxed">
              An NYC studio for unscripted, docu-series, and branded content. Now building AI tools for the next generation of producers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="#work"
              className="text-fg hover:text-accent transition-colors duration-200 flex items-center gap-2 font-medium"
            >
              <span>See the work</span>
              <span aria-hidden="true">↓</span>
            </a>
            <a
              href="#alignai"
              className="text-fg hover:text-accent transition-colors duration-200 flex items-center gap-2 font-medium"
            >
              <span>What's next: AlignAI</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}