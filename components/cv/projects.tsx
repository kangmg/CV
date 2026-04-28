import type { Project as ProjectType } from "@/types/cv"

interface ProjectsProps {
  projects: ProjectType[]
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <>
      <div className="cv-section-label">Selected Projects</div>
      <div>
        {projects.map((proj, i) => (
          <div key={i} className="cv-project-item">
            <div className="cv-project-header">
              <span className="cv-project-title">{proj.title}</span>
              {proj.duration && (
                <span className="cv-exp-duration">{proj.duration}</span>
              )}
            </div>
            {proj.extra && proj.extra.length > 0 && (
              <div className="cv-project-tags">
                {proj.extra.map((tag, j) => (
                  <span key={j} className="cv-project-tag">{tag}</span>
                ))}
              </div>
            )}
            <ul className="cv-exp-achievements">
              {proj.achievements.map((a, j) => (
                <li key={j}>{a}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}
