import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Presentation } from "lucide-react"
import type { Presentation as PresentationType } from "@/types/cv"

interface PresentationsProps {
  presentations: PresentationType[]
}

export function Presentations({ presentations }: PresentationsProps) {
  return (
    <Card className="border-border bg-card shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
          <Presentation className="h-5 w-5 text-primary" />
          Presentations
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          {presentations.map((presentation, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-gradient-to-r from-muted/30 to-muted/10 rounded-lg border-l-4 border-primary/40"
            >
              <div>
                <h3 className="font-medium text-foreground text-sm">{presentation.title}</h3>
                <p className="text-xs text-muted-foreground">{presentation.event}</p>
              </div>
              <span className="text-xs text-muted-foreground mt-1 sm:mt-0 bg-background/80 px-2 py-0.5 rounded">
                {presentation.date}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
