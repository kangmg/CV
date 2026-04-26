interface SkillsProps {
  skills: {
    Computational_Chemistry: string[]
    Scientific_Skills: string[]
    Development_Skills: string[]
  }
}

export function Skills({ skills }: SkillsProps) {
  const categories = [
    { title: "Computational Chemistry", items: skills.Computational_Chemistry },
    { title: "Scientific Skills", items: skills.Scientific_Skills },
    { title: "Development Skills", items: skills.Development_Skills },
  ]

  return (
    <>
      <div className="cv-section-label">Technical Skills</div>
      <div className="cv-skills-grid">
        {categories.map((cat) => (
          <div key={cat.title}>
            <div className="cv-skill-group-title">{cat.title}</div>
            <ul className="cv-skill-list">
              {cat.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}
