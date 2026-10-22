import { ArrowDownToLine, ExternalLink, FileText } from 'lucide-react'
import SectionReveal from '../components/SectionReveal'

const resumeFile = '/Undergraduate.pdf'

export default function Resume() {
  return <div className="space-y-8">
    <SectionReveal><section className="rounded-[2rem] border border-accent-line bg-accent-soft p-6 sm:p-10"><div className="flex flex-wrap items-end justify-between gap-6"><div className="max-w-2xl"><p className="section-kicker text-accent">Resume / 01</p><h1 className="mt-4 text-3xl font-semibold leading-tight text-fg sm:text-5xl">Resume</h1><p className="mt-5 text-lg leading-8 text-fg-soft">Software Engineering undergraduate at IIT, affiliated with the University of Westminster. Projects, skills, education and references in one page.</p></div><div className="flex flex-wrap gap-3"><a href={resumeFile} download="Undergraduate.pdf" className="inline-flex items-center gap-2 rounded-full bg-accent-solid px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-solid-hover"><ArrowDownToLine size={15} /> Download PDF</a><a href={resumeFile} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-semibold text-fg transition hover:border-accent-line"><ExternalLink size={15} /> Open in new tab</a></div></div></section></SectionReveal>
    <SectionReveal><section className="overflow-hidden rounded-[2rem] border border-line"><object data={resumeFile} type="application/pdf" aria-label="Resume PDF" className="block h-[80vh] min-h-[600px] w-full"><div className="flex flex-col items-center gap-4 p-10 text-center"><FileText size={32} className="text-accent" /><p className="max-w-md text-sm leading-7 text-muted">Your browser can't show the PDF here. Download it or open it in a new tab instead.</p><a href={resumeFile} download="Undergraduate.pdf" className="inline-flex items-center gap-2 rounded-full bg-accent-solid px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-solid-hover"><ArrowDownToLine size={15} /> Download PDF</a></div></object></section></SectionReveal>
  </div>
}
