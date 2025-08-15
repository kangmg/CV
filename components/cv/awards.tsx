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
    { title: "Research Grants", items: grants, icon: GraduationCap },
  ]

  return (
    <>
      {awardCategories.map((category, index) => (
        category.items.length > 0 && (
          <Card key={index} className="border-border bg-card shadow-md hover:shadow-lg transition-shadow duration-300 mb-6">
            <div className="pb-3 flex items-center gap-2 px-4">
              <category.icon className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground mb-2 leading-none">
                {category.title}
              </h3>
            </div>
            <CardContent className="pt-0 px-4">
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
            </CardContent>
          </Card>
        )
      ))}
    </>
  )
}
