import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, User } from "lucide-react"
import type { ProjectHighlight } from "@/types/cv"

interface ProjectGalleryProps {
  projectHighlights: ProjectHighlight[]
}

export function ProjectGallery({ projectHighlights }: ProjectGalleryProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projectHighlights.map((project, index) => (
          <Card
            key={index}
            className="group overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300"
          >
            <div className="relative overflow-hidden">
              <a href={project.image || "/placeholder.svg"} target="_blank" rel="noopener noreferrer" className="block">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full aspect-square object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </a>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </div>

            <CardContent className="p-4">
              <div className="mb-3">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                    {project.custom_tag}
                  </Badge>
                  <Badge variant="outline" className="border-border text-muted-foreground text-xs">
                    {project.is_team ? (
                      <>
                        <Users className="h-3 w-3 mr-1" />
                        Team
                      </>
                    ) : (
                      <>
                        <User className="h-3 w-3 mr-1" />
                        Personal
                      </>
                    )}
                  </Badge>
                  <Badge variant="outline" className="border-border text-muted-foreground text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    {project.period}
                  </Badge>
                </div>
              </div>

              <div className="space-y-1.5">
                {project.descriptions.map((description, descIndex) => (
                  <div key={descIndex} className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground leading-snug">{description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
