import { motion } from 'framer-motion'
import { BrainCircuit, ScanSearch, Gauge, Cpu, FileInput, Sparkles, FileOutput } from 'lucide-react'
import { Reveal } from './motion.jsx'
import { aiTools } from '../data.js'

const icons = [BrainCircuit, ScanSearch, Gauge]

export default function AITools() {
  return (
    <section className="section section-paper" id="ai-tools">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="section-eyebrow"><Cpu size={13} /> AI Cost-Intelligence Tools</span>
            <h2 className="section-title">Platforms I’ve designed and built</h2>
            <p className="section-sub">
              Self-built AI platforms and multi-agent systems that convert engineering data — images,
              CAD, drawings, PCB layouts, quotations and cost data — into actionable cost and value
              insight in a fraction of the traditional time.
            </p>
          </Reveal>
        </div>

        <Reveal className="ai-pipeline">
          <span className="ai-pipe-step"><FileInput size={16} /> Engineering inputs</span>
          <span className="ai-pipe-arrow">→</span>
          <span className="ai-pipe-step"><Sparkles size={16} /> Multi-agent AI engine</span>
          <span className="ai-pipe-arrow">→</span>
          <span className="ai-pipe-step"><FileOutput size={16} /> Cost &amp; value insight</span>
        </Reveal>

        <div className="ai-grid">
          {aiTools.map((t, i) => {
            const Icon = icons[i % icons.length]
            return (
              <motion.article
                key={t.name}
                className={`panel ai-card ${t.featured ? 'featured' : ''}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -60px 0px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
              >
                <div className="ai-card-top">
                  <span className="ai-icon"><Icon size={22} /></span>
                  {t.featured && <span className="ai-badge">&lt; 60 s should-cost</span>}
                </div>
                <h3 className="ai-name">{t.name}</h3>
                <p className="ai-kind">{t.kind}</p>
                <p className="ai-summary">{t.summary}</p>

                <div className="ai-io">
                  <div className="ai-io-row">
                    <span className="ai-io-k">Inputs</span>
                    <span className="ai-io-v">{t.inputs.map((x) => <span key={x}>{x}</span>)}</span>
                  </div>
                  <div className="ai-io-row">
                    <span className="ai-io-k">Outputs</span>
                    <span className="ai-io-v">{t.outputs.map((x) => <span key={x}>{x}</span>)}</span>
                  </div>
                </div>
                <p className="ai-method">{t.method}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
