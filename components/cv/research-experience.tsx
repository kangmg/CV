import type { ResearchExperience as ResearchExperienceType } from "@/types/cv"

interface ResearchExperienceProps {
  experiences: ResearchExperienceType[]
}

export function ResearchExperience({ experiences }: ResearchExperienceProps) {
  return (
    <>
      <div className="cv-section-label">Research Experience</div>
      <div className="cv-timeline">
        {experiences.map((exp, i) => (
          <div key={i} className="cv-timeline-item">
            <div className="cv-timeline-dot" />
            <div className="cv-exp-header">
              <span className="cv-exp-title">{exp.title}</span>
              <span className="cv-exp-duration">{exp.duration}</span>
            </div>
            <div className="cv-exp-lab">{exp.lab} · {exp.advisor}</div>
            <ul className="cv-exp-achievements">
              {exp.achievements.map((a, j) => (
                <li key={j}>{a}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}
