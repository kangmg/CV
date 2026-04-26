import type { ProjectHighlight } from "@/types/cv"

interface ProjectGalleryProps {
  projectHighlights: ProjectHighlight[]
}

export function ProjectGallery({ projectHighlights }: ProjectGalleryProps) {
  return (
    <>
      <div className="cv-section-label">Project Gallery</div>
      <div className="cv-gallery-grid">
        {projectHighlights.map((p, i) => (
          <div key={i} className="cv-gallery-card">
            {p.image && (
              <a href={p.image} target="_blank" rel="noopener noreferrer">
                <img src={p.image} alt={p.title} className="cv-gallery-img" />
              </a>
            )}
            <div className="cv-gallery-tag">{p.custom_tag}</div>
            <div className="cv-gallery-title">{p.title}</div>
            <div className="cv-gallery-period">{p.period}</div>
            <ul className="cv-gallery-desc">
              {p.descriptions.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>
            {p.is_team && <div className="cv-gallery-team">Team Project</div>}
          </div>
        ))}
      </div>
    </>
  )
}
