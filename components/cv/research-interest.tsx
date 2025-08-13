import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Microscope } from "lucide-react"

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
          <div className="mt-4 flex flex-wrap gap-2">
            {keywords.map((keyword, index) => (
              <code
                key={index}
                className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs font-mono"
              >
                {keyword}
              </code>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
