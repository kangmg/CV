import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Microscope } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface ResearchInterestProps {
  content: string
  keywords?: string[]
}

export function ResearchInterest({ content, keywords }: ResearchInterestProps) {
  return (
    <Card className="border-border bg-card shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
          <Microscope className="h-5 w-5 text-primary" />
          Research Interest
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-muted-foreground leading-relaxed text-sm">{content}</p>
        {keywords && keywords.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {keywords.map((keyword, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-muted text-muted-foreground hover:bg-muted/80 transition-colors text-xs py-0.5"
              >
                {keyword}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
