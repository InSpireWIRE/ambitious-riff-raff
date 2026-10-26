'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const PRESS = [
  {
    outlet: 'Deadline',
    title: '“Killer” True Crime Series Set',
    href: 'https://deadline.com/2023/12/killer-portland-true-crime-series-1235658058/',
  },
  {
    outlet: 'Ad Age',
    title: 'McCann Names Curt Detweiler EVP, Executive Creative Director',
    href: 'https://adage.com/article/people-players/mccann-names-curt-detweiler-exec-vp-exec-creative-director/139519/',
  },
  {
    outlet: 'Variety',
    title: 'Jesse James Keitel Trans Docuseries “T-Town”',
    href: 'https://variety.com/2021/film/news/jesse-james-keitel-trans-docuseries-t-town-1235114474/',
  },
  {
    outlet: 'Shoot',
    title: 'Craig Bland to Head BuzzMedia Talent Services Division',
    href: 'https://www.shootonline.com/spw/buzzmedia-launches-talent-services-division-connect-musicians-and-celebrities-sponsored-online/',
  },
  {
    outlet: 'IMDb',
    title: 'Industry News',
    href: 'https://www.imdb.com/news/ni63468213/',
  },
  {
    outlet: 'IMDb',
    title: 'Executive Producer — “Getting Real with the Kardashians”',
    href: 'https://www.imdb.com/title/tt12493694/',
  },
  {
    outlet: 'IMDb',
    title: 'Executive Producer — “Get Your Glam On” with Kim Kardashian',
    href: 'https://www.imdb.com/title/tt12496070/',
  },
  {
    outlet: 'IMDb',
    title: 'Executive Producer — “Style Rules” with Rachel Zoe',
    href: 'https://www.imdb.com/title/tt12492922/',
  },
  {
    outlet: 'IMDb',
    title: 'Executive Producer — “Summer Sessions” with Leighton Meester',
    href: 'https://www.imdb.com/title/tt12493580/',
  },
  {
    outlet: 'Deadline',
    title: 'Project Purple for Democracy',
    href: 'https://deadline.com/2019/11/trump-thanksgiving-purple-project-1202795004/',
  },
  {
    outlet: 'The Advocate',
    title: 'Young Queer Influencers Talk Why Democracy Matters',
    href: 'https://www.advocate.com/politics/2019/12/06/young-queer-influencers-talk-why-democracy-matters',
  },
]

export default function Press() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="press" className="py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.p
            variants={itemVariants}
            className="text-accent text-sm font-semibold tracking-widest uppercase"
          >
            Press
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="mt-6 font-serif font-semibold text-5xl lg:text-6xl leading-tight tracking-tight max-w-3xl"
          >
            In the press.
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-muted/15 border border-muted/15 rounded-lg overflow-hidden"
          >
            {PRESS.map(({ outlet, title, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-surface p-8 transition-colors duration-200 hover:bg-bg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3">
                    <span className="text-accent text-xs font-semibold tracking-widest uppercase">
                      {outlet}
                    </span>
                    <p className="font-serif text-xl leading-snug text-fg">
                      {title}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="text-muted group-hover:text-accent transition-colors duration-200 shrink-0"
                  >
                    &#8599;
                  </span>
                </div>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
