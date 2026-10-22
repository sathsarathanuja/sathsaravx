import { Building2 } from 'lucide-react'

// Shows the project image, or a themed placeholder until a screenshot is added.
export default function ProjectCover({ project, className = '' }) {
  if (project.image) return <img src={project.image} alt={project.title} loading="lazy" className={`w-full object-cover ${className}`} />
  return (
    <div className={`project-cover-fallback ${className}`} role="img" aria-label={project.title}>
      <span><Building2 size={22} /></span>
      <strong>{project.title}</strong>
    </div>
  )
}
