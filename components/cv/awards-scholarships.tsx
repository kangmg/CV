import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy } from "lucide-react"
import type { AwardScholarship } from "@/types/cv"

interface AwardsScholarshipsProps {
  awards: AwardScholarship[]
}

export function AwardsScholarships({ awards }: AwardsScholarshipsProps) {
  return (
    <Card className="border-border bg-card shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
          <Trophy className="h-5 w-5 text-primary" />
          Awards and Scholarships
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          {awards.map((award, index) => (
            <div
              key={index}
              className="p-3 bg-gradient-to-r from-primary/5 to-transparent rounded-lg border-l-4 border-primary/60"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-1">
                <div>
                  <h3 className="text-base font-medium text-foreground mb-0.5">{award.name}</h3>
                  <p className="text-muted-foreground text-sm">{award.institution}</p>
                </div>
                <div className="flex flex-col sm:items-end mt-1 sm:mt-0">
                  <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-0.5 rounded mb-1">
                    {award.year}
                  </span>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
                    {award.amount}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
