import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { lazy, Suspense, useEffect } from 'react'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'

const About = lazy(() => import('./pages/About'))
const Projects = lazy(() => import('./pages/Projects'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const Contact = lazy(() => import('./pages/Contact'))
const Experience = lazy(() => import('./pages/Experience'))
const Skills = lazy(() => import('./pages/Skills'))
const Engineering = lazy(() => import('./pages/Engineering'))
const EngineeringTopic = lazy(() => import('./pages/EngineeringTopic'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const Resume = lazy(() => import('./pages/Resume'))
const NotFound = lazy(() => import('./pages/NotFound'))

const siteName = 'Thanuja Sathsara'
const pageTitles = {
  '': 'Software Engineer',
  about: 'About',
  experience: 'Experience',
  projects: 'Projects',
  skills: 'Skills',
  engineering: 'Engineering',
  blog: 'Writing',
  contact: 'Contact',
  resume: 'Resume',
}

function AnimatedRoutes() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    const section = location.pathname.split('/')[1]
    document.title = `${pageTitles[section] ?? 'Page not found'} · ${siteName}`
  }, [location.pathname])

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div className="min-h-[60vh]" aria-busy="true" />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/engineering/:topic" element={<EngineeringTopic />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AnimatedRoutes />
      </Layout>
      <ScrollToTop />
    </BrowserRouter>
  )
}

export default App
