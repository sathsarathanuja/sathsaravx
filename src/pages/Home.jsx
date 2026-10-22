import { ArrowDownRight, ArrowRight, CheckCircle2, Code2, Database, Layers3, Lightbulb, Terminal } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionReveal from '../components/SectionReveal'

const principles = [
  ['01', 'Clarity before code', 'Turn an unclear request into a shared picture of the user, the constraint, and the desired result.'],
  ['02', 'Small useful releases', 'Keep feedback close by shipping focused slices that are easy to inspect, test, and improve.'],
  ['03', 'Systems that age well', 'Prefer understandable boundaries, reliable defaults, and documentation that helps the next person.'],
]

const services = [
  { icon: Code2, number: '01', title: 'Full-stack development', text: 'Build responsive React applications with clean component boundaries and dependable user flows.' },
  { icon: Database, number: '02', title: 'Backend and APIs', text: 'Design data models, REST APIs, validation, and service logic that keep systems consistent.' },
  { icon: Layers3, number: '03', title: 'Software architecture', text: 'Make practical decisions about structure, scalability, testing, and maintainability.' },
]

const process = [
  ['Discover', 'Map the problem', 'Questions, user flows, constraints, and a definition of done.'],
  ['Shape', 'Choose the approach', 'A focused technical direction with visible trade-offs.'],
  ['Deliver', 'Make it dependable', 'Small releases, useful feedback, and quality built into the loop.'],
]

const focusAreas = ['JavaScript', 'React', 'Node.js', 'Python', 'SQL databases', 'REST APIs', 'System design', 'Testing']

export default function Home() {
  return <div className="space-y-8">
    <section id="home" data-nav-section="home" className="home-hero relative overflow-hidden rounded-[1.5rem] border border-line bg-surface p-6 text-fg sm:p-8 lg:p-10">
      <div className="home-hero-grid" />
      <div className="relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div className="max-w-3xl"><motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent"><span className="home-status-dot" /> Software engineer</motion.div><motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }} className="mt-5 max-w-3xl text-3xl font-semibold leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl">I build reliable software with a clear purpose.</motion.h1><motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }} className="mt-5 max-w-xl text-base leading-7 text-muted">I’m Thanuja Sathsara, a software engineer focused on full-stack development, backend systems, databases, and useful web applications.</motion.p><div className="mt-7 flex flex-wrap gap-3"><Link to="/about" className="inline-flex items-center gap-2 rounded-full bg-accent-solid px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-solid-hover">About me <ArrowRight size={16} /></Link><Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-sm font-semibold text-fg-soft transition hover:border-fg hover:text-fg">Let’s talk <ArrowDownRight size={16} /></Link></div><div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-xs text-subtle"><span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-success" /> Open to opportunities</span><span className="flex items-center gap-2"><Terminal size={14} className="text-accent" /> System design · APIs · Full-stack development</span></div></div>
        <div className="home-command-panel rounded-2xl border border-line bg-surface-2 p-5 font-mono text-xs text-muted"><div className="flex items-center justify-between border-b border-line pb-4"><span className="text-subtle">/working-style</span><span className="text-success">ready</span></div><div className="space-y-4 pt-5"><p><span className="text-accent">const</span> principles = [</p><p className="pl-5 text-fg-soft">“make it understandable”,</p><p className="pl-5 text-fg-soft">“measure what matters”,</p><p className="pl-5 text-fg-soft">“leave room to grow”</p><p>]</p></div><div className="mt-8 border-t border-line pt-4 text-subtle">Mode <span className="text-fg-soft">thoughtful delivery</span></div></div>
      </div>
    </section>

    <SectionReveal><section id="skills" data-nav-section="skills" className="home-section grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="section-kicker">01 / Point of view</p><h2 className="section-title">Good software reduces cognitive load.</h2><p className="section-copy">The interface, the API, and the architecture all tell the same story. My job is to make that story easier for people to use, maintain, and trust.</p><Link to="/engineering" className="section-link">Read my engineering notes <ArrowRight size={15} /></Link></div><div className="grid gap-3">{principles.map(([number, title, text]) => <div key={number} className="home-principle"><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></section></SectionReveal>

    <SectionReveal><section className="home-section"><div className="section-heading"><div><p className="section-kicker">02 / What I bring</p><h2 className="section-title">A balanced engineering range.</h2></div><span className="section-meta">Core capabilities</span></div><div className="mt-8 grid gap-4 md:grid-cols-3">{services.map(({ icon: Icon, number, title, text }) => <article key={title} className="home-capability"><div className="flex items-center justify-between"><Icon size={21} className="text-accent" /><span className="font-mono text-xs text-faint">{number}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div></section></SectionReveal>

    <SectionReveal><section className="home-section"><div className="section-heading"><div><p className="section-kicker">03 / Working rhythm</p><h2 className="section-title">From a rough question to a reliable result.</h2></div><Lightbulb className="text-warning" size={22} /></div><div className="mt-8 grid gap-4 md:grid-cols-3">{process.map(([label, title, text], index) => <article key={label} className="home-process"><span className="home-process-number">0{index + 1}</span><p className="home-process-label">{label}</p><h3>{title}</h3><p>{text}</p></article>)}</div></section></SectionReveal>

    <SectionReveal><section className="home-section grid gap-8 lg:grid-cols-[1fr_0.8fr]"><div><p className="section-kicker">04 / Current focus</p><h2 className="section-title">Building practical software, one system at a time.</h2><p className="section-copy">I’m deepening my skills across application development, backend engineering, data, and the engineering practices that make software easier to trust.</p><div className="mt-7 flex flex-wrap gap-2">{focusAreas.map((item) => <span key={item} className="home-skill">{item}</span>)}</div></div><div className="home-now"><p className="section-kicker">Engineering principle</p><p className="mt-5 text-2xl font-semibold leading-tight text-fg">“The best technical decision is the one the whole team can explain.”</p><p className="mt-6 text-sm leading-6 text-subtle">Clarity · Reliability · Continuous improvement</p></div></section></SectionReveal>

    <SectionReveal><section id="contact" className="home-cta rounded-[2rem] border border-accent-line bg-accent-soft p-7 sm:p-10"><div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><div><p className="section-kicker text-accent">05 / Next step</p><h2 className="mt-3 max-w-2xl text-3xl font-semibold text-fg sm:text-4xl">Have a useful problem to think through?</h2><p className="mt-3 max-w-xl text-muted">Share the context, the constraints, and what success looks like. We can start there.</p></div><Link to="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-semibold text-background transition hover:opacity-90">Start a conversation <ArrowRight size={16} /></Link></div></section></SectionReveal>
  </div>
}
