import { ArrowLeft, ArrowRight, CheckCircle2, Lightbulb, Scale, Target } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import SectionReveal from '../components/SectionReveal'
import { engineeringTopics } from '../data/engineeringData'

export default function EngineeringTopic() {
  const { topic } = useParams()
  const currentIndex = engineeringTopics.findIndex((item) => item.slug === topic)
  const current = engineeringTopics[currentIndex]

  if (!current) return <section className="rounded-[2rem] border border-line bg-surface p-8 text-fg"><h1 className="text-3xl font-semibold">Topic not found</h1><Link to="/engineering" className="mt-5 inline-flex items-center gap-2 text-accent"><ArrowLeft size={16} /> Back to engineering</Link></section>

  const Icon = current.icon
  const next = engineeringTopics[(currentIndex + 1) % engineeringTopics.length]
  return <div className="space-y-8">
    <SectionReveal><section className="rounded-[2rem] border border-line bg-surface p-6 sm:p-10"><Link to="/engineering" className="inline-flex items-center gap-2 text-sm text-subtle transition hover:text-fg"><ArrowLeft size={15} /> Engineering notebook</Link><div className="mt-8 flex items-start gap-4"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent"><Icon size={22} /></span><div><p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">{current.category} / Topic {String(currentIndex + 1).padStart(2, '0')}</p><h1 className="mt-3 text-3xl font-semibold text-fg sm:text-5xl">{current.title}</h1><p className="mt-5 max-w-2xl text-lg text-muted">{current.description}</p></div></div><div className="mt-8 flex items-start gap-3 border-t border-line pt-6"><Lightbulb className="mt-0.5 shrink-0 text-warning" size={18} /><p className="text-sm text-fg-soft"><strong className="text-fg">Key takeaway:</strong> {current.takeaway}</p></div></section></SectionReveal>
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]"><SectionReveal><article className="h-full rounded-[2rem] border border-line bg-surface p-6 sm:p-8"><div className="flex items-center gap-3"><Target className="text-accent" size={19} /><h2 className="text-xl font-semibold text-fg">The scenario</h2></div><p className="mt-5 text-base leading-8 text-muted">{current.context}</p><h3 className="mt-8 border-t border-line pt-6 text-sm font-semibold uppercase tracking-[0.2em] text-subtle">What I would decide first</h3><ul className="mt-4 space-y-3">{current.decisions.map((decision) => <li key={decision} className="flex gap-3 text-sm leading-6 text-fg-soft"><CheckCircle2 className="mt-0.5 shrink-0 text-success" size={16} />{decision}</li>)}</ul></article></SectionReveal><SectionReveal><aside className="h-full rounded-[2rem] border border-line bg-surface p-6 sm:p-8"><div className="flex items-center gap-3"><Scale className="text-accent" size={19} /><h2 className="text-xl font-semibold text-fg">Trade-offs</h2></div><p className="mt-5 text-sm leading-7 text-muted">{current.tradeoffs}</p><div className="mt-8 grid gap-3">{current.metrics.map(([label, value]) => <div key={label} className="flex items-center justify-between border-b border-line pb-3 text-sm"><span className="text-subtle">{label}</span><strong className="font-mono text-fg-soft">{value}</strong></div>)}</div></aside></SectionReveal></div>
    <SectionReveal><Link to={`/engineering/${next.slug}`} className="group flex items-center justify-between rounded-[2rem] border border-accent-line bg-accent-soft p-6 transition hover:bg-accent-soft-strong sm:p-8"><span><span className="block text-xs uppercase tracking-[0.2em] text-accent">Next topic</span><strong className="mt-2 block text-xl text-fg">{next.title}</strong></span><ArrowRight className="text-accent transition group-hover:translate-x-1" /></Link></SectionReveal>
  </div>
}
