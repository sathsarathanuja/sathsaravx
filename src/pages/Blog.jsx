import { useState } from 'react'
import { ArrowRight, CalendarDays, Clock3, FileText, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionReveal from '../components/SectionReveal'
import { blogPosts } from '../data/portfolioData'

export default function Blog() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const categories = ['All', ...new Set(blogPosts.map((post) => post.category))]
  const blogStats = [[String(blogPosts.length).padStart(2, '0'), 'Published notes'], [String(categories.length - 1).padStart(2, '0'), 'Core themes'], ['08 min', 'Typical read']]
  const readingGuide = [
    ['Systems', 'Architecture, reliability, and the trade-offs behind dependable software.'],
    ['Interfaces', 'Patterns for building calm, accessible, and useful product experiences.'],
    ['Practice', 'Notes on collaboration, quality, and learning through the work.'],
  ]
  const featured = blogPosts[0]
  const posts = blogPosts.filter((post) => {
    const content = `${post.title} ${post.excerpt} ${post.category}`.toLowerCase()
    return (category === 'All' || post.category === category) && content.includes(query.toLowerCase())
  })

  return <div className="blog-page space-y-8">
    <SectionReveal><section className="blog-hero rounded-[2rem] border border-line bg-surface p-6 sm:p-10"><div className="max-w-3xl"><div className="flex items-center gap-2 text-accent"><FileText size={17} /><p className="section-kicker">Writing / Notebook</p></div><h1 className="mt-4 text-3xl font-semibold leading-tight text-fg sm:text-5xl">Notes on building software with care.</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-muted">Practical thoughts on reliable systems, backend design, product interfaces, and the decisions that make software easier to use and maintain.</p></div></section></SectionReveal>
    {featured && <SectionReveal><Link to={`/blog/${featured.id}`} className="blog-featured group"><img src={featured.cover} alt="" loading="lazy" /><div className="blog-featured-shade" /><div className="relative flex h-full flex-col justify-end p-6 sm:p-9"><span className="blog-featured-label">Featured note</span><h2 className="mt-3 max-w-3xl text-2xl font-semibold text-white sm:text-4xl">{featured.title}</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-300">{featured.excerpt}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-300">Read article <ArrowRight size={15} className="transition group-hover:translate-x-1" /></span></div></Link></SectionReveal>}
    <SectionReveal><section className="blog-stats">{blogStats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</section></SectionReveal>
    <SectionReveal><section className="blog-toolbar"><div className="relative w-full lg:max-w-sm"><Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-subtle" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search writing" aria-label="Search writing" className="blog-search" /></div><div className="flex flex-wrap gap-2">{categories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} className={`blog-filter ${category === item ? 'is-active' : ''}`}>{item}</button>)}</div></section></SectionReveal>
    <SectionReveal><section className="blog-list-section"><div className="flex items-end justify-between gap-4"><div><p className="section-kicker">All notes</p><h2 className="mt-2 text-2xl font-semibold text-fg">Recent writing</h2></div><span className="text-xs text-subtle">{posts.length} articles</span></div><div className="mt-6">{posts.map((post, index) => <Link key={post.id} to={`/blog/${post.id}`} className="blog-row"><span className="blog-row-number">{String(index + 1).padStart(2, '0')}</span><div className="blog-row-content"><div className="flex flex-wrap items-center gap-3 text-xs text-subtle"><span className="text-accent">{post.category}</span><span className="flex items-center gap-1"><CalendarDays size={13} />{post.date}</span><span className="flex items-center gap-1"><Clock3 size={13} />{post.readTime}</span></div><h3>{post.title}</h3><p>{post.excerpt}</p></div><ArrowRight className="blog-row-arrow" size={17} /></Link>)}</div>{!posts.length && <p className="py-10 text-center text-sm text-subtle">No writing matches that search.</p>}</section></SectionReveal>
    <SectionReveal><section className="blog-guide"><div><p className="section-kicker">A simple reading guide</p><h2 className="mt-2 text-2xl font-semibold text-fg">Follow the thread.</h2></div><div className="blog-guide-grid">{readingGuide.map(([title, text]) => <div key={title}><h3>{title}</h3><p>{text}</p></div>)}</div></section></SectionReveal>
  </div>
}
