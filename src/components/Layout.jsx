import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { socialLinks } from '../data/portfolioData'

const footerLinks = [['Projects', '/projects'], ['Writing', '/blog'], ['Engineering', '/engineering'], ['Contact', '/contact']]
const footerIcons = { GitHub: GithubIcon, LinkedIn: LinkedinIcon }

export default function Layout({ children }) {

  return (
    <div className="theme-shell">
      <div className="min-h-screen bg-background text-fg transition-colors duration-300">
        <Navbar />

        <main className="site-main mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">{children}</main>

        <footer className="border-t border-line px-4 py-8 text-sm text-subtle">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Thanuja Sathsara. Built for thoughtful, modern software.</p>
            <nav className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Footer">
              {footerLinks.map(([label, to]) => <Link key={to} to={to} className="transition hover:text-fg">{label}</Link>)}
              {socialLinks.filter((link) => footerIcons[link.label]).map((link) => {
                const Icon = footerIcons[link.label]
                return <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="transition hover:text-fg"><Icon size={16} /></a>
              })}
            </nav>
          </div>
        </footer>
      </div>
    </div>
  )
}
