import type { Education, MilitaryService, AdditionalActivity } from "@/types/cv"

interface AdditionalInfoProps {
  education: Education
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
          <div className="cv-info-block">
            <span className="cv-info-label">University</span>
            <span className="cv-info-value"><strong>{education.university}</strong></span>
            <span className="cv-info-label">Period</span>
            <span className="cv-info-value">{education.duration}</span>
            <span className="cv-info-label">Degree</span>
            <span className="cv-info-value">{education.degree}</span>
            <span className="cv-info-label">GPA</span>
            <span className="cv-info-value"><strong>{education.gpa}</strong></span>
          </div>
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
