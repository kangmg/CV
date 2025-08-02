import { Calendar } from "lucide-react"

interface PageHeaderProps {
  updateDate: string
  name: string
  title: string
}

export function PageHeader({ updateDate, name, title }: PageHeaderProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="text-center py-8 bg-gradient-to-b from-transparent via-muted/10 to-transparent">
      {/* Update date */}
      <div className="flex justify-center mb-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
          <Calendar className="h-4 w-4" />
          <span>Last updated: {formatDate(updateDate)}</span>
        </div>
      </div>

      {/* Page title */}
      <div className="mb-4">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">{name}</h1>
        <p className="text-lg text-muted-foreground">{title}</p>
      </div>
    </div>
  )
}
