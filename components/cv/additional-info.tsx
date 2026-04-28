import type { Education, MilitaryService, AdditionalActivity } from "@/types/cv"

interface AdditionalInfoProps {
  education: Education[]
  militaryService: MilitaryService
  additionalActivity: AdditionalActivity
  showOnlyEducation?: boolean
  showOnlyMilitaryService?: boolean
  showOnlyAdditionalActivity?: boolean
}

export function AdditionalInfo({
  education,
  militaryService,
  additionalActivity,
  showOnlyEducation = false,
  showOnlyMilitaryService = false,
  showOnlyAdditionalActivity = false,
}: AdditionalInfoProps) {
  const showAll = !showOnlyEducation && !showOnlyMilitaryService && !showOnlyAdditionalActivity

  return (
    <>
      {(showAll || showOnlyEducation) && (
        <>
          <div className="cv-section-label">Education</div>
          {education.map((item, i) => (
            <div key={`${item.institution}-${item.duration}`} className="cv-education-item">
              <div className="cv-info-block">
                <span className="cv-info-label">Institution</span>
                <span className="cv-info-value"><strong>{item.institution}</strong></span>
                <span className="cv-info-label">Period</span>
                <span className="cv-info-value">{item.duration}</span>
                <span className="cv-info-label">Degree</span>
                <span className="cv-info-value">{item.degree}</span>
                {item.department && (
                  <>
                    <span className="cv-info-label">Department</span>
                    <span className="cv-info-value">{item.department}</span>
                  </>
                )}
                {item.advisor && (
                  <>
                    <span className="cv-info-label">Advisor</span>
                    <span className="cv-info-value">{item.advisor}</span>
                  </>
                )}
                {item.gpa && (
                  <>
                    <span className="cv-info-label">GPA</span>
                    <span className="cv-info-value"><strong>{item.gpa}</strong></span>
                  </>
                )}
              </div>
              {i < education.length - 1 && <div className="cv-info-divider" />}
            </div>
          ))}
        </>
      )}

      {(showAll || showOnlyMilitaryService) && (
        <>
          <div className="cv-section-label">Military Service</div>
          <div className="cv-info-block">
            <span className="cv-info-label">Branch</span>
            <span className="cv-info-value"><strong>{militaryService.branch}</strong></span>
            <span className="cv-info-label">Rank</span>
            <span className="cv-info-value">{militaryService.rank}</span>
            <span className="cv-info-label">Period</span>
            <span className="cv-info-value">{militaryService.duration}</span>
          </div>
        </>
      )}

      {(showAll || showOnlyAdditionalActivity) && (
        <>
          <div className="cv-section-label">Additional Activity</div>
          <div className="cv-info-block">
            <span className="cv-info-label">Program</span>
            <span className="cv-info-value"><strong>{additionalActivity.activity}</strong></span>
            <span className="cv-info-label">Period</span>
            <span className="cv-info-value">{additionalActivity.duration}</span>
            <span className="cv-info-label">Description</span>
            <span className="cv-info-value">{additionalActivity.description}</span>
          </div>
        </>
      )}
    </>
  )
}
