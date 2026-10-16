import { motion } from 'framer-motion'
import { Layers } from 'lucide-react'
import { Reveal } from './motion.jsx'
import { caseStudies } from '../data.js'

export default function CaseStudies() {
  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="section-eyebrow"><Layers size={13} /> Selected Work</span>
            <h2 className="section-title">Cost-out programmes, end to end</h2>
            <p className="section-sub">
              A look at how I run value-engineering work — the problem, the method applied, and the
              outcome delivered to engineering leadership.
            </p>
          </Reveal>
        </div>

        <div className="work-grid">
          {caseStudies.map((c, i) => (
            <motion.article
              key={c.title}
              className="panel work-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -60px 0px' }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="work-left">
                <span className="work-tag">{c.tag}</span>
                <h3 className="work-title">{c.title}</h3>
                <p className="work-block-label" style={{ marginTop: 16 }}>The problem</p>
                <p className="work-problem">{c.problem}</p>
              </div>

              <div className="work-right">
                <div>
                  <p className="work-block-label">Approach</p>
                  <ul className="work-approach">
                    {c.approach.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="work-block-label">Outcome</p>
                  <div className="work-outcome">
                    <p>{c.outcome}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
