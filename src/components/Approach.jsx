import { lazy, Suspense } from 'react'
import { Compass } from 'lucide-react'
import { Reveal } from './motion.jsx'
import { methodology, capabilities } from '../data.js'

const CostCurve = lazy(() => import('./Charts.jsx'))

function ChartSkeleton() {
  return <div className="chart-skeleton" aria-hidden="true" />
}

export default function Approach() {
  return (
    <section className="section" id="approach">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="section-eyebrow"><Compass size={13} /> How I work</span>
            <h2 className="section-title">Most of the cost is decided early</h2>
            <p className="section-sub">
              By the time a design is finished, 70 to 80% of a product’s cost is already locked in.
              Most cost reviews happen later, when there’s far less you can change. I try to get
              involved early, while there’s still room to make a real difference.
            </p>
          </Reveal>
        </div>

        <div className="approach-grid">
          <Reveal className="panel curve-card">
            <div className="curve-head">
              <h3>The cost-commitment curve</h3>
              <p>Why it pays to get involved early</p>
            </div>
            <Suspense fallback={<ChartSkeleton />}>
              <CostCurve />
            </Suspense>
            <div className="curve-legend">
              <span><i className="curve-dot" style={{ background: '#16395e' }} /> Cost committed</span>
              <span><i className="curve-dot" style={{ background: '#9a6f23' }} /> Ability to influence</span>
            </div>
            <p className="curve-foot">This is a well-known idea in value engineering, not a number of my own. It’s the reason I push to get involved at concept and design.</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="method-list">
              {methodology.map((m, i) => (
                <div className="method-item" key={m.name}>
                  <span className="method-num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <div className="method-name">{m.name}</div>
                    <div className="method-note">{m.note}</div>
                  </div>
                </div>
              ))}
            </div>
            <ul className="caps">
              {capabilities.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
