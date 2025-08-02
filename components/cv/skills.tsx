import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2 } from "lucide-react"

interface SkillsProps {
  skills: {
    programming_languages: string[]
    scientific_skills: string[]
    code_development: string[]
    large_data_processing: string[]
  }
}

export function Skills({ skills }: SkillsProps) {
  const skillCategories = [
    { title: "Programming Languages", items: skills.programming_languages },
    { title: "Scientific Skills", items: skills.scientific_skills },
    { title: "Code Development", items: skills.code_development },
    { title: "Large Data Processing", items: skills.large_data_processing },
  ]

  return (
    <Card className="border-border bg-card shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
          <Code2 className="h-5 w-5 text-primary" />
          Technical Skills
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-base font-medium text-foreground mb-2">{category.title}</h3>
              <div className="flex flex-wrap gap-1.5">
                {category.items.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="bg-muted text-muted-foreground hover:bg-muted/80 transition-colors text-xs py-0.5"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
