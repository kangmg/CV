interface ResearchInterestProps {
  content: string
  keywords?: string[]
}

export function ResearchInterest({ content, keywords }: ResearchInterestProps) {
  return (
    <>
      <div className="cv-section-label">Research Interest</div>
      <p className="cv-research-text">{content}</p>
      {keywords && keywords.length > 0 && (
        <div className="cv-keywords">
          {keywords.map((k) => (
            <span key={k} className="cv-keyword">{k}</span>
          ))}
        </div>
      )}
    </>
  )
}
