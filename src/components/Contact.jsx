import { Mail, Linkedin, MapPin, ArrowUpRight, Send } from 'lucide-react'
import { Reveal } from './motion.jsx'
import { profile } from '../data.js'

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal className="contact-card">
          <span className="section-eyebrow"><Send size={13} /> Contact</span>
          <h2 className="contact-title">Let’s engineer more value together</h2>
          <p className="contact-copy">
            Open to senior value & cost engineering roles and collaboration on AI-driven cost
            intelligence across the automotive industry.
          </p>
          <div className="contact-actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              <Mail size={16} /> {profile.email}
            </a>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin size={16} /> Connect on LinkedIn <ArrowUpRight size={14} />
            </a>
          </div>
          <p className="contact-loc">
            <MapPin size={15} /> {profile.location}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
