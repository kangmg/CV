import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, FolderOpen } from "lucide-react"
import type { Project as ProjectType } from "@/types/cv"

interface ProjectsProps {
  projects: ProjectType[]
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <Card className="border-border bg-card shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
          <FolderOpen className="h-5 w-5 text-primary" />
          Projects
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-3 bg-gradient-to-r from-primary/5 to-transparent rounded-lg border-l-4 border-primary/60"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-medium text-foreground">{project.title}</h3>
                  {project.link && <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />}
                </div>
                {project.duration && (
                  <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-0.5 rounded">
                    {project.duration}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-1.5 mb-2">
                {project.event && (
                  <Badge variant="outline" className="text-xs py-0.5">
                    {project.event}
                  </Badge>
                )}
                {project.mentor && (
                  <Badge variant="outline" className="text-xs py-0.5">
                    Mentor: {project.mentor}
                  </Badge>
                )}
              </div>
              <ul className="list-disc list-inside space-y-0.5 text-muted-foreground text-sm">
                {project.achievements.map((achievement, achIndex) => (
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
