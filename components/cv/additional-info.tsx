import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Shield, BookOpen } from "lucide-react"
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
  // If no specific section is requested, show all (backward compatibility)
  const showAll = !showOnlyEducation && !showOnlyMilitaryService && !showOnlyAdditionalActivity

  return (
    <div className="space-y-4">
      {(showAll || showOnlyEducation) && (
        <Card className="border-border bg-card shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="border-l-4 border-primary/40 pl-3 bg-gradient-to-r from-primary/5 to-transparent py-2 rounded-lg">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                <h3 className="font-medium text-foreground text-sm">{education.degree}</h3>
                <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-0.5 rounded mt-1 sm:mt-0">
                  {education.duration}
                </span>
              </div>
              <p className="text-muted-foreground text-sm">{education.university}</p>
              <p className="text-xs text-muted-foreground">GPA: {education.gpa}</p>
            </div>
          </CardContent>
        </Card>
      )}

      {(showAll || showOnlyMilitaryService) && (
        <Card className="border-border bg-card shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Military Service
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="border-l-4 border-primary/40 pl-3 bg-gradient-to-r from-primary/5 to-transparent py-2 rounded-lg">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                <h3 className="font-medium text-foreground text-sm">{militaryService.rank}</h3>
                <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-0.5 rounded mt-1 sm:mt-0">
                  {militaryService.duration}
                </span>
              </div>
              <p className="text-muted-foreground text-sm">{militaryService.branch}</p>
            </div>
          </CardContent>
        </Card>
      )}

      {(showAll || showOnlyAdditionalActivity) && (
        <Card className="border-border bg-card shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Additional Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="border-l-4 border-primary/40 pl-3 bg-gradient-to-r from-primary/5 to-transparent py-2 rounded-lg">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                <h3 className="font-medium text-foreground text-sm">{additionalActivity.activity}</h3>
                <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-0.5 rounded mt-1 sm:mt-0">
                  {additionalActivity.duration}
                </span>
              </div>
              <p className="text-muted-foreground text-sm">{additionalActivity.description}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
