"use client"

import { Monitor, FileText, LayoutGrid } from "lucide-react"

interface TopNavigationProps {
  activeTab: "cv" | "pdf" | "projects"
  onTabChange: (tab: "cv" | "pdf" | "projects") => void
}

export function TopNavigation({ activeTab, onTabChange }: TopNavigationProps) {
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
    </nav>
  )
}
