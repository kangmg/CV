"use client"

import { Monitor, FileText, LayoutGrid, Moon, Sun } from "lucide-react"

interface TopNavigationProps {
  activeTab: "cv" | "pdf" | "projects"
  onTabChange: (tab: "cv" | "pdf" | "projects") => void
  theme: "light" | "dark"
  onThemeToggle: () => void
}

export function TopNavigation({ activeTab, onTabChange, theme, onThemeToggle }: TopNavigationProps) {
  return (
    <nav className="cv-nav">
      <button
        className={`cv-nav-btn ${activeTab === "cv" ? "active" : ""}`}
        onClick={() => onTabChange("cv")}
      >
        <Monitor className="cv-nav-icon" />
        CV – Online
      </button>
      <button
        className={`cv-nav-btn ${activeTab === "pdf" ? "active" : ""}`}
        onClick={() => onTabChange("pdf")}
      >
        <FileText className="cv-nav-icon" />
        CV – PDF
      </button>
      <button
        className={`cv-nav-btn ${activeTab === "projects" ? "active" : ""}`}
        onClick={() => onTabChange("projects")}
      >
        <LayoutGrid className="cv-nav-icon" />
        Project Gallery
      </button>
      <button
        className="cv-nav-btn cv-theme-btn"
        onClick={onThemeToggle}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        title={theme === "dark" ? "Light mode" : "Dark mode"}
      >
        {theme === "dark" ? <Sun className="cv-nav-icon" /> : <Moon className="cv-nav-icon" />}
      </button>
    </nav>
  )
}
