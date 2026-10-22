import { useEffect, useState } from 'react'
import { ArrowRight, CheckCircle2, Clock3, ExternalLink, GraduationCap, MapPin, Quote, UserRound, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionReveal from '../components/SectionReveal'
import { education } from '../data/portfolioData'
import profileAvatar from '../assets/profile.jpeg'

// Place the certificate image at public/certificate.jpg
const certificateImage = '/certificate.jpg'
const credentialItem = education.find((item) => item.credential)

const facts = [
  ['Based in', 'Dankotuwa, Sri Lanka', MapPin],
  ['Studying', 'Software Engineering', GraduationCap],
  ['Working style', 'Remote and collaborative', UserRound],
]

const certifications = [
  { title: 'Gemini Certified Educator', issuer: 'Google for Education', date: '08.23.2026', url: 'https://edu.google.accredible.com/5a6260f3-9316-4fc1-9645-be8a441d8d5b#acc.yacHvq4p' },
  { title: 'Get Started with Databricks for Data Engineering', issuer: 'Simplilearn SkillUp', url: 'https://simpli-web.app.link/e/3rWScIZKK6b' },
  { title: 'Embedded Systems', issuer: 'Simplilearn SkillUp', url: 'https://simpli-web.app.link/e/8KrT58lDK6b' },
]

export default function About() {
  const [certificateOpen, setCertificateOpen] = useState(false)
  const movePortrait = (event) => {
    const portrait = event.currentTarget
    const bounds = portrait.getBoundingClientRect()
    const horizontalOffset = ((event.clientX - bounds.left) / bounds.width - 0.5) * -14
    const verticalOffset = ((event.clientY - bounds.top) / bounds.height - 0.5) * -14
    portrait.style.setProperty('--portrait-shift-x', `${horizontalOffset.toFixed(1)}px`)
    portrait.style.setProperty('--portrait-shift-y', `${verticalOffset.toFixed(1)}px`)
  }
  const resetPortrait = (event) => {
    event.currentTarget.style.setProperty('--portrait-shift-x', '0px')
    event.currentTarget.style.setProperty('--portrait-shift-y', '0px')
  }

  useEffect(() => {
    if (!certificateOpen) return undefined
    const closeOnEscape = (event) => { if (event.key === 'Escape') setCertificateOpen(false) }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [certificateOpen])

  return <div className="about-page space-y-8">
    <SectionReveal><section className="about-intro rounded-[2rem] border border-line bg-surface p-6 sm:p-10"><div className="grid gap-10 lg:grid-cols-[1fr_280px] lg:items-center"><div><p className="section-kicker">About / 01</p><h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-fg sm:text-5xl">I care about the thinking behind the interface.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-muted">I’m Thanuja Sathsara, an undergraduate software engineering student at IIT, affiliated with the University of Westminster. I build dependable software with an interest in backend systems, databases, and clear product experiences.</p><div className="mt-7 flex flex-wrap gap-3"><Link to="/projects" className="inline-flex items-center gap-2 rounded-full bg-accent-solid px-5 py-3 text-sm font-semibold text-white hover:bg-accent-solid-hover">See my work <ArrowRight size={16} /></Link><Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-sm font-semibold text-fg-soft hover:border-fg hover:text-fg">Get in touch <ArrowRight size={16} /></Link></div></div><div className="about-portrait" onMouseMove={movePortrait} onMouseLeave={resetPortrait}><img src={profileAvatar} alt="Portrait of Thanuja Sathsara" /><span className="about-portrait-name">THANUJA<br />SATHSARA</span></div></div><div className="mt-10 grid gap-3 border-t border-line pt-6 sm:grid-cols-3">{facts.map(([label, value, Icon]) => <div key={label} className="about-fact-block"><Icon size={16} /><div><p>{label}</p><strong>{value}</strong></div></div>)}</div></section></SectionReveal>

    <SectionReveal><section className="about-section"><div className="about-section-heading"><div><p className="section-kicker">About / 02</p><h2 className="section-title">A foundation in progress.</h2></div><p className="section-copy">Education is where I practise the fundamentals, and every project is where those fundamentals meet real constraints.</p></div><div className={`mt-8 grid gap-4 ${education.length > 1 ? 'lg:grid-cols-2' : ''}`}>{education.map((item, index) => <article key={`${item.school}-${item.degree}`} className="about-timeline-item"><span className="about-timeline-index">0{index + 1}</span><div><p className="text-xs uppercase tracking-[0.16em] text-accent">{item.period}</p><h3 className="mt-2 text-lg font-semibold text-fg">{item.degree}</h3><p className="mt-2 text-sm leading-6 text-muted">{item.school}</p>{item.description && <p className="mt-3 border-t border-line pt-3 text-sm leading-6 text-subtle">{item.description}</p>}{item.credential && <button type="button" onClick={() => setCertificateOpen(true)} className="about-credential-button mt-4 inline-flex items-center gap-2 rounded-full border border-accent-line bg-accent-soft px-3 py-1.5 text-xs font-semibold text-accent">{item.credential}<ExternalLink size={13} /></button>}</div></article>)}</div></section></SectionReveal>

    <SectionReveal><section className="about-section grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="section-kicker">About / 04</p><h2 className="section-title">Credentials and curiosity.</h2><p className="section-copy">A small selection of learning milestones. The content is kept editable so verified credentials can be added as the portfolio grows.</p></div><div className="space-y-3">{certifications.map((cert) => <a key={cert.title} href={cert.url} target="_blank" rel="noopener noreferrer" className="about-cert-row"><span className="grid h-8 w-8 place-items-center rounded-lg bg-accent-soft text-accent"><CheckCircle2 size={16} /></span><span><strong>{cert.title}</strong><small>{cert.date ? `${cert.issuer} · ${cert.date}` : cert.issuer}</small></span><ExternalLink size={14} /></a>)}</div></section></SectionReveal>

    <SectionReveal><section className="about-quote rounded-[2rem] border border-warning-line bg-warning-soft p-7 sm:p-10"><Quote className="text-warning" size={24} /><p className="mt-5 max-w-3xl text-2xl font-semibold leading-tight text-fg sm:text-3xl">“Build with enough care that the next person can understand why it works.”</p><p className="mt-5 text-sm text-subtle">A working principle, not a finished destination.</p></section></SectionReveal>
    {certificateOpen && <div className="certificate-modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setCertificateOpen(false)}><div className="certificate-modal" role="dialog" aria-modal="true" aria-labelledby="certificate-title"><div className="flex items-center justify-between gap-4 border-b border-line p-4"><div><p className="section-kicker">University of Westminster</p><h2 id="certificate-title" className="mt-1 text-lg font-semibold text-fg">Degree e-certificate</h2></div><button type="button" onClick={() => setCertificateOpen(false)} className="navbar-icon-button text-fg" aria-label="Close degree e-certificate"><X size={18} /></button></div><div className="certificate-viewer">{credentialItem?.credentialPending ? <div className="certificate-pending"><span><Clock3 size={20} /></span><h3>Certificate pending</h3><p>This degree is currently in progress ({credentialItem.period}). The e-certificate will be added here once it has been awarded.</p></div> : <><img src={certificateImage} alt="BEng degree e-certificate" onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.nextElementSibling.style.display = 'block' }} /><p className="certificate-unavailable">Certificate preview unavailable.</p></>}</div></div></div>}
  </div>
}
