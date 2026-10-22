import { ArrowRight, BookOpen, Filter, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionReveal from '../components/SectionReveal'
import { engineeringNotes, engineeringTopics } from '../data/engineeringData'

const categories = ['All', ...new Set(engineeringTopics.map((topic) => topic.category))]

const capabilityGroups = [
  { title: 'Problem Solving', items: ['Requirements', 'Problem decomposition', 'Trade-offs', 'Complexity', 'Product thinking', 'Decision making'] },
  { title: 'Programming', items: ['Python', 'Data Structures', 'Algorithms', 'OOP / FP', 'Concurrency', 'Async programming', 'Memory / Performance', 'Code quality'] },
  { title: 'System Design', items: ['Architecture', 'Scalability', 'Reliability', 'Availability', 'Fault tolerance', 'Distributed systems', 'System trade-offs'] },
  { title: 'Databases', items: ['SQL', 'PostgreSQL', 'Indexes', 'Transactions', 'Query optimization', 'Replication', 'Caching'] },
  { title: 'API & Services', items: ['REST', 'GraphQL', 'API versioning', 'Validation', 'Rate limiting', 'WebSockets', 'Service integration'] },
  { title: 'Security', items: ['Authentication', 'Authorization', 'OWASP', 'Encryption', 'Secrets', 'Secure coding', 'Threat modeling'] },
]

const qualityGroups = [
  ['Testing', ['Unit', 'Integration', 'E2E', 'TDD', 'CI tests']],
  ['Reliability', ['Failure', 'Recovery', 'Resilience', 'SLO / SLA']],
  ['Maintainability', ['Refactoring', 'Documentation', 'Technical debt', 'Code review', 'Standards']],
]

const practiceGroups = [
  ['Git', ['Branching', 'Commits', 'Collaboration']],
  ['Code Review', ['Feedback', 'Design review', 'Standards']],
  ['Agile', ['Planning', 'Estimation', 'Delivery']],
]

const leadershipGroups = [
  ['Technical communication', ['Writing', 'Documentation', 'Presenting']],
  ['Mentoring others', ['Teaching', 'Feedback', 'Leadership']],
  ['Stakeholder communication', ['Product', 'Business', 'Decisions']],
]

const learningGroups = [
  ['Computer Science', ['OS', 'Networks', 'Algorithms', 'Distributed systems']],
  ['New tools & technology', ['Frameworks', 'Cloud', 'AI']],
  ['Domain knowledge', ['Business', 'Users', 'Industry']],
]

function BrowseTopics({ categories, category, setCategory }) {
  return <SectionReveal><section className="rounded-[2rem] border border-line bg-surface p-5 sm:p-8"><div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.25em] text-subtle">Browse topics</p><p className="mt-2 text-sm text-muted">Follow a topic to see the scenario, decisions, metrics, and trade-offs.</p></div><div className="flex items-center gap-2 text-xs text-subtle"><Filter size={14} /> Filter</div></div><div className="mt-5 flex flex-wrap gap-2">{categories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${category === item ? 'border-accent bg-accent-solid text-white' : 'border-line bg-surface-2 text-muted hover:border-line-strong hover:text-fg'}`}>{item}</button>)}</div></section></SectionReveal>
}

export default function Engineering() {
  const [category, setCategory] = useState('All')
  const visibleTopics = category === 'All' ? engineeringTopics : engineeringTopics.filter((topic) => topic.category === category)

  return <div className="space-y-8">
    <SectionReveal><section className="rounded-[2rem] border border-line bg-surface p-6 sm:p-10"><div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"><div className="max-w-3xl"><div className="flex items-center gap-2 text-accent"><BookOpen size={17} /><p className="text-sm font-semibold uppercase tracking-[0.3em]">Engineering notebook</p></div><h1 className="mt-4 text-3xl font-semibold text-fg sm:text-5xl">A structured look at how I think about software.</h1><p className="mt-5 text-lg leading-8 text-muted">System design, architecture, programming, data, APIs, security, operations, testing, and observability. Each note walks through a realistic scenario, the decisions I would make first, and the trade-offs behind them.</p></div><div className="flex items-center gap-3 text-sm text-subtle"><Sparkles size={16} className="text-warning" />{engineeringTopics.length} topic notes</div></div></section></SectionReveal>
    <SectionReveal><section className="engineering-scenarios rounded-[2rem] border border-accent-line bg-accent-soft p-6 sm:p-8"><div className="flex items-end justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Engineering capability map</p><h2 className="mt-2 text-2xl font-semibold text-fg">The complete engineering loop.</h2></div><span className="text-xs text-subtle">Learning map</span></div><div className="capability-diagram" aria-label="Software engineer capability map"><div className="capability-root">Software Engineer</div><div className="capability-grid">{capabilityGroups.map((group) => <article key={group.title} className="capability-group"><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div><div className="capability-section"><h3>Software Quality</h3><div className="capability-three-col">{qualityGroups.map(([title, items]) => <article key={title}><strong>{title}</strong><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div><div className="capability-section"><h3>Cloud / DevOps</h3><div className="capability-three-col">{[['Linux', ['Networking', 'Processes', 'Filesystems', 'Shell']], ['Docker', ['Containers', 'Images', 'Compose']], ['CI / CD', ['Build', 'Test', 'Deploy', 'Release']]].map(([title, items]) => <article key={title}><strong>{title}</strong><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div><div className="capability-cloud">Cloud Infrastructure <span>AWS</span><span>Azure</span><span>GCP</span></div></div><div className="capability-section"><h3>Observability</h3><div className="capability-three-col">{['Logging', 'Metrics', 'Tracing'].map((item) => <article key={item}><strong>{item}</strong><p>Signals that help explain system behavior.</p></article>)}</div><div className="capability-end">Monitoring <span>↓</span> Incident Response</div></div><div className="capability-section"><h3>Engineering Practice</h3><div className="capability-three-col">{practiceGroups.map(([title, items]) => <article key={title}><strong>{title}</strong><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div><div className="capability-section"><h3>Communication & Leadership</h3><div className="capability-three-col">{leadershipGroups.map(([title, items]) => <article key={title}><strong>{title}</strong><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div><div className="capability-section"><h3>Continuous Learning</h3><div className="capability-three-col">{learningGroups.map(([title, items]) => <article key={title}><strong>{title}</strong><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div><div className="capability-loop"><strong>Expert Engineering Loop</strong><span>Understand → Design → Build</span><span>Test → Deploy → Observe</span><span>Measure → Debug → Improve</span><b>Repeat</b></div></div></section></SectionReveal>
    <BrowseTopics categories={categories} category={category} setCategory={setCategory} />
    <div className="grid gap-4 md:grid-cols-2">{visibleTopics.map((topic, index) => { const Icon = topic.icon; return <SectionReveal key={topic.slug}><Link to={`/engineering/${topic.slug}`} className="group block h-full rounded-[2rem] border border-line bg-surface p-6 transition hover:-translate-y-1 hover:border-accent sm:p-8"><div className="flex items-start justify-between gap-4"><span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-soft text-accent"><Icon size={19} /></span><span className="font-mono text-xs text-faint">{String(index + 1).padStart(2, '0')}</span></div><p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{topic.category}</p><h2 className="mt-2 text-xl font-semibold text-fg">{topic.title}</h2><p className="mt-3 text-sm leading-7 text-muted">{topic.description}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-fg-soft group-hover:text-accent">Read topic <ArrowRight size={15} className="transition group-hover:translate-x-1" /></span></Link></SectionReveal> })}</div>
    <SectionReveal><section className="rounded-[2rem] border border-line bg-surface p-6 sm:p-8"><div className="flex items-center justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.25em] text-subtle">Short notes</p><h2 className="mt-2 text-2xl font-semibold text-fg">Ideas worth revisiting</h2></div><Link to="/blog" className="text-sm text-accent">All writing <ArrowRight size={14} className="inline" /></Link></div><div className="mt-6 grid gap-3 md:grid-cols-3">{engineeringNotes.map((note) => <article key={note.title} className="rounded-2xl border border-line bg-surface-2 p-5"><p className="text-xs font-mono uppercase tracking-[0.15em] text-accent">{note.tag}</p><h3 className="mt-3 font-semibold text-fg">{note.title}</h3><p className="mt-2 text-sm leading-6 text-subtle">{note.text}</p></article>)}</div></section></SectionReveal>
  </div>
}
