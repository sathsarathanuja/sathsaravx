import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionReveal from '../components/SectionReveal'

export default function NotFound() {
  return <SectionReveal><section className="rounded-[2rem] border border-line bg-surface p-8 sm:p-12"><p className="section-kicker">Error / 404</p><h1 className="mt-4 text-3xl font-semibold text-fg sm:text-5xl">This page doesn’t exist.</h1><p className="mt-5 max-w-xl text-lg leading-8 text-muted">The link may be broken or the page may have moved. Try the home page, or press Ctrl+K to search.</p><Link to="/" className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent-solid px-5 py-3 text-sm font-semibold text-white hover:bg-accent-solid-hover"><ArrowLeft size={16} /> Back home</Link></section></SectionReveal>
}
