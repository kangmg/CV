import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award as AwardIcon, GraduationCap, Gift } from "lucide-react"
import { Award } from "@/types/cv"

interface AwardsProps {
  awards: Award[]
  scholarships: Award[]
  grants: Award[]
}

export function Awards({ awards, scholarships, grants }: AwardsProps) {
  const awardCategories = [
    { title: "Awards & Honors", items: awards, icon: AwardIcon },
    { title: "Scholarships", items: scholarships, icon: GraduationCap },
    { title: "Research Grants", items: grants, icon: Gift },
  ]

  return (
    <Card className="border-border bg-card shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold text-foreground">
          Scholarships / Awards & Honors / Research Grants
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-6">
          {awardCategories.map((category, index) => (
            category.items.length > 0 && (
              <div key={index}>
                <h3 className="text-base font-medium text-foreground mb-3">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-start p-3 bg-muted/30 rounded-lg">
                      <div>
                        <p className="font-medium text-sm text-foreground">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.institution} • {item.year}</p>
                      </div>
                      <span className="text-sm font-medium text-primary">{item.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
