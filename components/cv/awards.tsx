import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award as AwardIcon, GraduationCap, Gift } from "lucide-react"
import { Award } from "@/types/cv"

interface AwardsProps {
  awards: Award[]
  scholarships: Award[]
  grants: Award[]
}

export function Awards({ awards, scholarships, grants }: AwardsProps) {
  // Determine which section title to use based on which arrays have content
  const sectionTitle = awards.length > 0 ? "Awards & Honors" : 
                      scholarships.length > 0 ? "Scholarships" : 
                      grants.length > 0 ? "Research Grants" : ""

  return (
    <Card className="border-border bg-card shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold text-foreground">
          {sectionTitle}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-2">
          {[...awards, ...scholarships, ...grants].map((item, itemIndex) => (
            <div key={itemIndex} className="flex justify-between items-start p-3 bg-muted/30 rounded-lg">
              <div>
                <p className="font-medium text-sm text-foreground">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.institution} • {item.year}</p>
              </div>
              <span className="text-sm font-medium text-primary">{item.amount}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
