import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { profile } from '../data.js'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } }
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p className="hero-eyebrow" variants={item}>
            {profile.eyebrow}
          </motion.p>

          <motion.h1 className="hero-headline" variants={item}>
            {profile.headline}
          </motion.h1>

          <motion.div className="hero-whoami" variants={item}>
            <span className="hero-name">{profile.name}</span>
            <span className="hero-role">
              {profile.role} · {profile.company}
            </span>
          </motion.div>

          <motion.p className="hero-lead" variants={item}>
            {profile.lead}
          </motion.p>

          <motion.p className="hero-belief" variants={item}>
            “{profile.belief}”
          </motion.p>

          <motion.div className="hero-actions" variants={item}>
            <a className="btn btn-primary" href="#work">
              View selected work <ArrowUpRight size={16} />
            </a>
            <a className="btn btn-ghost" href="#ai-tools">
              See the AI tools
            </a>
          </motion.div>

          <motion.ul className="hero-creds" variants={item} aria-label="Credentials">
            {profile.credentials.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          className="hero-figure"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {profile.photo ? (
            <img
              className="hero-photo"
              src={profile.photo}
              alt={`${profile.name}, ${profile.role}`}
              width="320"
              height="320"
              fetchpriority="high"
            />
          ) : (
            <div className="hero-photo-fallback">{profile.initials}</div>
          )}
          <div className="hero-nowcard">
            <span className="now-dot" />
            <div>
              <strong>Now at {profile.company}</strong>
              <p>Propulsion cost, Gaydon UK</p>
            </div>
          </div>
          <span className="hero-availability">Open to senior VAVE &amp; cost-engineering roles</span>
        </motion.div>
      </div>
    </section>
  )
}
