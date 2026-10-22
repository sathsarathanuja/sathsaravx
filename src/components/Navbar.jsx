import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import {
  ArrowDownToLine,
  ArrowRight,
  ChevronDown,
  Command,
  ExternalLink,
  Menu,
  Search,
  Terminal,
  X,
} from 'lucide-react'
import { allProjects, blogPosts } from '../data/portfolioData'
import { engineeringTopics } from '../data/engineeringData'
import ThemeToggle from './ThemeToggle'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

const githubUrl = import.meta.env.VITE_GITHUB_URL || 'https://github.com/Kudaliyanage-Sathsara'
const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/thanuja-sathsara-677a1a298/'

const engineeringLinks = [
  { label: 'System Design', hash: 'system-design' },
  { label: 'Architecture', hash: 'architecture' },
  { label: 'API Design', hash: 'api-design' },
  { label: 'Database Design', hash: 'database-design' },
  { label: 'Security', hash: 'security' },
  { label: 'Performance', hash: 'performance' },
  { label: 'Testing', hash: 'testing' },
  { label: 'Programming', hash: 'programming' },
  { label: 'Cloud / DevOps', hash: 'cloud-devops' },
  { label: 'Observability', hash: 'observability' },
]

const mainLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects', menu: true },
  { label: 'Skills', to: '/skills' },
  { label: 'Engineering', to: '/engineering', menu: true },
  { label: 'Contact', to: '/contact' },
]

function Logo() {
  return (
    <Link to="/" className="navbar-logo" aria-label="Sathsara VX home">
      <span className="navbar-logo-mark">&lt;ST&gt;</span>
      <span className="navbar-logo-copy"><strong>Sathsara VX</strong><small>Senior Software Engineer</small></span>
    </Link>
  )
}

function ProjectsMenu({ closeMenus }) {
  return (
    <div className="navbar-mega-menu">
      <div className="mega-heading"><span>Selected work</span><Link to="/projects" onClick={closeMenus}>View all <ArrowRight size={14} /></Link></div>
      <div className="mega-grid">
        {allProjects.slice(0, 4).map((project) => (
          <Link key={project.id} to={`/projects/${project.id}`} className="mega-project" onClick={closeMenus}>
            <span className="mega-icon"><Terminal size={15} /></span>
            <span><strong>{project.title}</strong><small>{project.tech.slice(0, 2).join(' · ')}</small></span>
          </Link>
        ))}
      </div>
    </div>
  )
}

function EngineeringMenu({ closeMenus }) {
  return (
    <div className="navbar-popover engineering-popover">
      {engineeringLinks.map((item) => <Link key={item.hash} to={`/engineering/${item.hash}`} className="navbar-menu-item" onClick={closeMenus}>{item.label}<ArrowRight size={13} className="menu-arrow" /></Link>)}
    </div>
  )
}

function CommandPalette({ onClose }) {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(0)
  const inputRef = useRef(null)
  const navigate = useNavigate()
  const actions = [
    ['Go to Home', 'home', () => navigate('/')],
    ['Go to About', 'about', () => navigate('/about')],
    ['Go to Skills', 'skills', () => navigate('/skills')],
    ['Go to Engineering', 'engineering', () => navigate('/engineering')],
    ['Go to Projects', 'projects', () => navigate('/projects')],
    ['Go to Experience', 'experience', () => navigate('/experience')],
    ['Go to Blog', 'blog', () => navigate('/blog')],
    ['View Resume', 'resume', () => navigate('/resume')],
    ['GitHub', 'github', () => window.open(githubUrl, '_blank', 'noopener,noreferrer')],
    ['LinkedIn', 'linkedin', () => window.open(linkedinUrl, '_blank', 'noopener,noreferrer')],
    ['Contact', 'contact', () => navigate('/contact')],
    ...allProjects.map((project) => [`Project: ${project.title}`, `project-${project.id}`, () => navigate(`/projects/${project.id}`)]),
    ...engineeringTopics.map((topic) => [`Engineering: ${topic.title}`, `topic-${topic.slug}`, () => navigate(`/engineering/${topic.slug}`)]),
    ...blogPosts.map((post) => [`Article: ${post.title}`, `post-${post.id}`, () => navigate(`/blog/${post.id}`)]),
  ]
  const filtered = actions.filter(([label]) => label.toLowerCase().includes(query.toLowerCase()))

  useEffect(() => { inputRef.current?.focus() }, [])
  useEffect(() => setSelected(0), [query])
  useEffect(() => { document.querySelector('.command-result.is-selected')?.scrollIntoView({ block: 'nearest' }) }, [selected])

  const run = (action) => { action(); onClose() }
  const handleKeyDown = (event) => {
    if (filtered.length && event.key === 'ArrowDown') { event.preventDefault(); setSelected((value) => (value + 1) % filtered.length) }
    if (filtered.length && event.key === 'ArrowUp') { event.preventDefault(); setSelected((value) => (value - 1 + filtered.length) % filtered.length) }
    if (event.key === 'Enter' && filtered[selected]) run(filtered[selected][2])
    if (event.key === 'Escape') onClose()
  }

  return (
    <div className="command-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="command-palette" role="dialog" aria-modal="true" aria-label="Command palette">
        <div className="command-search"><Search size={18} /><input ref={inputRef} value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={handleKeyDown} placeholder="Search portfolio..." aria-label="Search portfolio" /><kbd>ESC</kbd></div>
        <div className="command-results">
          {filtered.length ? filtered.map(([label, key], index) => <button type="button" key={key} className={`command-result ${index === selected ? 'is-selected' : ''}`} onMouseEnter={() => setSelected(index)} onClick={() => run(actions.find((item) => item[1] === key)[2])}><ArrowRight size={15} />{label}<span>↵</span></button>) : <p className="command-empty">No matching actions</p>}
        </div>
        <div className="command-footer"><span><kbd>↑↓</kbd> Navigate</span><span><kbd>↵</kbd> Select</span><span><kbd>ESC</kbd> Close</span></div>
      </div>
    </div>
  )
}

export default function Navbar() {
  const location = useLocation()
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const lastScroll = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY
      setScrolled(current > 20)
      setHidden(current > 120 && current > lastScroll.current)
      lastScroll.current = current
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (location.pathname !== '/') return undefined
    const sections = document.querySelectorAll('[data-nav-section]')
    if (!sections.length) return undefined
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActiveSection(visible.target.dataset.navSection)
    }, { rootMargin: '-18% 0px -62% 0px', threshold: [0.1, 0.35, 0.7] })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [location.pathname])

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); setPaletteOpen(true) }
      if (event.key === 'Escape') { setMobileOpen(false); setOpenMenu(null) }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => { setMobileOpen(false); setOpenMenu(null) }, [location.pathname, location.hash])

  const closeMenus = () => { setOpenMenu(null); setMobileOpen(false) }
  const toggleMenu = (menu) => setOpenMenu((value) => value === menu ? null : menu)

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${hidden ? 'is-hidden' : ''}`}>
        <div className="site-header-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {mainLinks.map((item) => item.menu ? (
              <div key={item.label} className="nav-menu-wrap">
                <NavLink to={item.to} className="nav-link" onClick={closeMenus}>{item.label}<ChevronDown size={13} className={openMenu === item.label ? 'rotate-chevron' : ''} /></NavLink>
                <button type="button" className="nav-menu-trigger" aria-label={`Open ${item.label} menu`} aria-expanded={openMenu === item.label} onClick={() => toggleMenu(item.label)} />
                {openMenu === item.label && (item.label === 'Projects' ? <ProjectsMenu closeMenus={closeMenus} /> : <EngineeringMenu closeMenus={closeMenus} />)}
              </div>
            ) : <NavLink key={item.label} to={item.to} className={({ isActive }) => `nav-link ${isActive || (location.pathname === '/' && activeSection === item.label.toLowerCase()) ? 'is-active' : ''}`} onClick={closeMenus}>{item.label}</NavLink>)}
          </nav>
          <div className="navbar-actions">
            <span className="availability" title="Available for software engineering opportunities"><i /> Available</span>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub"><GithubIcon size={15} /></a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><LinkedinIcon size={15} /></a>
            <ThemeToggle />
            <Link to="/contact" className="contact-cta" onClick={closeMenus}>Let's talk <ArrowRight size={14} /></Link>
            <Link to="/resume" className="resume-link" aria-label="View resume" onClick={closeMenus}><ArrowDownToLine size={15} /> <span>Resume</span></Link>
            <button type="button" className="navbar-icon-button mobile-menu-button" aria-controls="mobile-navigation" aria-expanded={mobileOpen} aria-label={mobileOpen ? 'Close menu' : 'Open menu'} onClick={() => setMobileOpen((value) => !value)}>{mobileOpen ? <X size={20} /> : <Menu size={20} />}</button>
          </div>
        </div>
      </header>
      {mobileOpen && <div className="mobile-panel" id="mobile-navigation"><div className="mobile-panel-links">{[...mainLinks.slice(0, -1), { label: 'Blog', to: '/blog' }, mainLinks.at(-1)].map((item) => <Link key={item.label} to={item.to} onClick={closeMenus}>{item.label}<ArrowRight size={15} /></Link>)}<span className="mobile-divider" /><a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub <ExternalLink size={14} /></a><a href={linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn <ExternalLink size={14} /></a><Link to="/resume" onClick={closeMenus}>Resume <ArrowDownToLine size={14} /></Link></div></div>}
      <button type="button" className="command-launcher" onClick={() => setPaletteOpen(true)} aria-label="Open command palette"><Command size={14} /><kbd>⌘K</kbd></button>
      {paletteOpen && <CommandPalette onClose={() => setPaletteOpen(false)} />}
    </>
  )
}