import { Calendar, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

interface PageHeaderProps {
  updateDate: string
  name: string
  title: string
}

export function PageHeader({ updateDate, name, title }: PageHeaderProps) {
  const { theme, setTheme } = useTheme()
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="text-center py-4 bg-gradient-to-b from-transparent via-muted/10 to-transparent">
      {/* Update date and theme toggle - aligned with content box */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center gap-4 mb-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
            <Calendar className="h-4 w-4" />
            <span>Last updated: {formatDate(updateDate)}</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-accent/50 transition-all duration-300"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>

      {/* Page title */}
      <div className="mb-2">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-1">{name}</h1>
        <p className="text-lg text-muted-foreground">{title}</p>
      </div>
    </div>
  )
}
