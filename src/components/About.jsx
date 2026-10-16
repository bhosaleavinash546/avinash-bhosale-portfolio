import { BadgeCheck, GraduationCap, Award, UserRound } from 'lucide-react'
import { Reveal } from './motion.jsx'
import { profile, stats, certifications, education, awards } from '../data.js'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        {/* Qualitative headline facts */}
        <Reveal>
          <div className="stats-band">
            {stats.map((s) => (
              <div className="stat-cell" key={s.label}>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="section-head" style={{ marginTop: 'clamp(44px,6vw,76px)' }}>
          <Reveal>
            <span className="section-eyebrow"><UserRound size={13} /> About</span>
            <h2 className="section-title">How I think about cost</h2>
          </Reveal>
        </div>

        <div className="about-grid">
          <Reveal className="about-body">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>

          <div className="about-side">
            <Reveal className="panel about-card" delay={0.05}>
              <h3 className="about-card-title"><BadgeCheck size={17} className="accent" /> Certifications</h3>
              <ul className="cert-list">
                {certifications.map((c) => (
                  <li key={c}><span className="cert-tick">✓</span>{c}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="panel about-card" delay={0.1}>
              <h3 className="about-card-title"><GraduationCap size={18} className="accent" /> Education</h3>
              <ul className="edu-list">
                {education.map((e) => (
                  <li key={e.degree}>
                    <strong>{e.degree}</strong>
                    {e.school && <span>{e.school}</span>}
                    <em>{e.period}</em>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="panel about-card" delay={0.15}>
              <h3 className="about-card-title"><Award size={17} className="accent" /> Honours &amp; Awards</h3>
              <ul className="cert-list">
                {awards.map((a) => (
                  <li key={a}><span className="cert-tick">★</span>{a}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
