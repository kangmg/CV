"use client"
import { Monitor, FileDown, LayoutGrid, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

interface TopNavigationProps {
  activeTab: "cv" | "pdf" | "projects"
  onTabChange: (tab: "cv" | "pdf" | "projects") => void
}

export function TopNavigation({ activeTab, onTabChange }: TopNavigationProps) {
  const { theme, setTheme } = useTheme()

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Navigation bar - split in thirds */}
      <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="flex h-16 relative">
          {/* Left third - CV Online */}
          <button
            onClick={() => onTabChange("cv")}
            className={`flex-1 flex items-center justify-center gap-2 transition-all duration-300 relative group ${
              activeTab === "cv" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {/* Active gradient background */}
            {activeTab === "cv" && (
              <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-primary/10 to-primary/5" />
            )}

            {/* Hover background */}
            <div className="absolute inset-0 bg-muted/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <div className="relative z-10 flex items-center gap-2">
              <Monitor className="h-4 w-4" />
              <span className={`text-sm font-medium ${activeTab === "cv" ? "font-semibold" : ""}`}>CV – Online</span>
            </div>
          </button>

          {/* First divider */}
          <div className="w-px bg-gradient-to-b from-transparent via-border to-transparent" />

          {/* Middle third - CV PDF */}
          <button
            onClick={() => onTabChange("pdf")}
            className={`flex-1 flex items-center justify-center gap-2 transition-all duration-300 relative group ${
              activeTab === "pdf" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {/* Active gradient background */}
            {activeTab === "pdf" && (
              <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-primary/10 to-primary/5" />
            )}

            {/* Hover background */}
            <div className="absolute inset-0 bg-muted/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <div className="relative z-10 flex items-center gap-2">
              <FileDown className="h-4 w-4" />
              <span className={`text-sm font-medium ${activeTab === "pdf" ? "font-semibold" : ""}`}>CV – PDF</span>
            </div>
          </button>

          {/* Second divider */}
          <div className="w-px bg-gradient-to-b from-transparent via-border to-transparent" />

          {/* Right third - Project Gallery */}
          <button
            onClick={() => onTabChange("projects")}
            className={`flex-1 flex items-center justify-center gap-2 transition-all duration-300 relative group ${
              activeTab === "projects" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {/* Active gradient background */}
            {activeTab === "projects" && (
              <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-primary/10 to-primary/5" />
            )}

            {/* Hover background */}
            <div className="absolute inset-0 bg-muted/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <div className="relative z-10 flex items-center gap-2">
              <LayoutGrid className="h-4 w-4" />
              <span className={`text-sm font-medium ${activeTab === "projects" ? "font-semibold" : ""}`}>
                Project Gallery
              </span>
            </div>
          </button>

        </div>
      </div>

      {/* Theme toggle - now below the navigation bar */}
      <div className="flex justify-center mt-2">
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

      {/* Natural gradient connection */}
      <div className="h-6 bg-gradient-to-b from-background via-background/80 to-background/40" />
    </div>
  )
}
