import { useState } from 'react'
import { ArrowRight, CheckCircle2, Copy, Globe, Mail, MapPin, Send } from 'lucide-react'
import SectionReveal from '../components/SectionReveal'
import { socialLinks } from '../data/portfolioData'

const emailAddress = 'sathsaravx@gmail.com'
const contactReasons = ['A new web application', 'Backend or API work', 'System design discussion', 'Something else']

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [copied, setCopied] = useState(false)

  const updateField = (field, value) => {
    setFormData((current) => ({ ...current, [field]: value }))
    if (errors[field]) setErrors((current) => ({ ...current, [field]: '' }))
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress)
    } catch {
      return
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  const validate = () => {
    const nextErrors = {}
    if (!formData.name.trim()) nextErrors.name = 'Please add your name.'
    if (!formData.email.trim()) nextErrors.email = 'Please add your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) nextErrors.email = 'Use a valid email address.'
    if (!formData.subject.trim()) nextErrors.subject = 'Please add a subject.'
    if (!formData.message.trim()) nextErrors.message = 'Please tell me a little about the work.'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!validate()) return
    const { name, email, subject, message } = formData
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`
    setSent(true)
  }

  return <div className="contact-page space-y-8">
    <SectionReveal><section className="contact-hero rounded-[2rem] border border-accent-line bg-accent-soft p-6 sm:p-10"><div className="max-w-3xl"><p className="section-kicker text-accent">Contact / 01</p><h1 className="mt-4 text-3xl font-semibold leading-tight text-fg sm:text-5xl">Let’s make the next useful thing.</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-fg-soft">Have a product idea, a system that needs untangling, or a small build with a lot of care behind it? Send the context and I’ll meet you there.</p></div><div className="contact-availability"><span className="home-status-dot" /> Currently open to selected conversations</div></section></SectionReveal>
    <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
      <SectionReveal><aside className="contact-sidebar"><div><p className="section-kicker">Start here</p><h2 className="mt-3 text-2xl font-semibold text-fg">A clear brief is a good beginning.</h2><p className="mt-4 text-sm leading-7 text-muted">Tell me what you are building, where it is stuck, and what a useful result would look like.</p></div><div className="mt-8 space-y-3"><a href={`mailto:${emailAddress}`} className="contact-detail"><span><Mail size={17} /></span><div><small>Email</small><strong>{emailAddress}</strong></div></a><button type="button" onClick={copyEmail} className="contact-copy" aria-label="Copy email address"><Copy size={14} /> {copied ? 'Copied' : 'Copy email'}</button><div className="contact-detail"><span><MapPin size={17} /></span><div><small>Based in</small><strong>Dankotuwa, Sri Lanka</strong></div></div></div><div className="mt-8 border-t border-line pt-6"><p className="section-kicker">Good fit for</p><div className="mt-4 flex flex-wrap gap-2">{contactReasons.map((reason) => <span key={reason} className="contact-tag">{reason}</span>)}</div></div><div className="mt-8 border-t border-line pt-6"><p className="section-kicker">Elsewhere</p><div className="mt-4 flex flex-wrap gap-2">{socialLinks.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="contact-social"><Globe size={14} /> {link.label}</a>)}</div></div></aside></SectionReveal>
      <SectionReveal><form onSubmit={handleSubmit} className="contact-form"><div className="flex items-start justify-between gap-4"><div><p className="section-kicker">Start a conversation / 02</p><h2 className="mt-3 text-2xl font-semibold text-fg">Send a message</h2></div><span className="contact-required">Required fields</span></div><div className="mt-8 grid gap-5 sm:grid-cols-2"><Field id="contact-name" label="Name" value={formData.name} error={errors.name} onChange={(value) => updateField('name', value)} placeholder="Your name" /><Field id="contact-email" label="Email" type="email" value={formData.email} error={errors.email} onChange={(value) => updateField('email', value)} placeholder="you@example.com" /></div><div className="mt-5"><Field id="contact-subject" label="Subject" value={formData.subject} error={errors.subject} onChange={(value) => updateField('subject', value)} placeholder="What would you like to discuss?" /></div><div className="mt-5"><label htmlFor="contact-message" className="contact-label">Message</label><textarea id="contact-message" name="message" rows="7" value={formData.message} onChange={(event) => updateField('message', event.target.value)} placeholder="A little context helps me give you a useful reply." className={`contact-input resize-y ${errors.message ? 'contact-input-error' : ''}`} />{errors.message && <p className="contact-error">{errors.message}</p>}</div><div className="mt-7 flex flex-wrap items-center justify-between gap-4"><p className="text-xs text-faint">Your email app will open with the message prepared.</p><button type="submit" className="inline-flex items-center gap-2 rounded-full bg-accent-solid px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-solid-hover"><Send size={15} /> Send message <ArrowRight size={15} /></button></div>{sent && <p className="mt-4 flex items-center gap-2 text-sm text-success"><CheckCircle2 size={15} /> Message prepared in your email app.</p>}</form></SectionReveal>
    </div>
  </div>
}

function Field({ id, label, type = 'text', value, error, onChange, placeholder }) {
  return <div><label htmlFor={id} className="contact-label">{label}</label><input id={id} name={id.replace('contact-', '')} type={type} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className={`contact-input ${error ? 'contact-input-error' : ''}`} />{error && <p className="contact-error">{error}</p>}</div>
}
