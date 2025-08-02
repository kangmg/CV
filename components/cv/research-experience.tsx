import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FlaskConical } from "lucide-react"
import type { ResearchExperience as ResearchExperienceType } from "@/types/cv"

interface ResearchExperienceProps {
  experiences: ResearchExperienceType[]
}

export function ResearchExperience({ experiences }: ResearchExperienceProps) {
  return (
    <Card className="border-border bg-card shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
          <FlaskConical className="h-5 w-5 text-primary" />
          Research Experience
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-3 bg-gradient-to-r from-primary/5 to-transparent rounded-lg border-l-4 border-primary/60"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <h3 className="text-base font-medium text-foreground">{exp.title}</h3>
                <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-0.5 rounded">{exp.duration}</span>
              </div>
              <div className="text-xs text-muted-foreground mb-2">
                <p className="font-medium">
                  {exp.lab} • {exp.advisor}
                </p>
              </div>
              <ul className="list-disc list-inside space-y-0.5 text-muted-foreground text-sm">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
