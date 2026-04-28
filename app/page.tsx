"use client"

import { useEffect, useState } from "react"
import { ContactInfo } from "@/components/cv/contact-info"
import { ResearchInterest } from "@/components/cv/research-interest"
import { Skills } from "@/components/cv/skills"
import { Projects } from "@/components/cv/projects"
import { ResearchExperience } from "@/components/cv/research-experience"
import { AdditionalInfo } from "@/components/cv/additional-info"
import { ProjectGallery } from "@/components/cv/project-gallery"
import { TopNavigation } from "@/components/top-navigation"
import { PageHeader } from "@/components/page-header"
import { Awards } from "@/components/cv/awards"
import { Publications } from "@/components/cv/publications"
import { ScrollProgress } from "@/components/scroll-progress"
import { PDFViewer } from "@/components/pdf-viewer"
import type { CVData, ProjectHighlightsData } from "@/types/cv"
import cvData from "@/data/cv-data.json"
import projectHighlightsData from "@/data/project-gallery.json"

export default function CVPage() {
  const [activeTab, setActiveTab] = useState<"cv" | "pdf" | "projects">("cv")
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [themeReady, setThemeReady] = useState(false)
  const data: CVData = cvData as CVData
  const highlights: ProjectHighlightsData = projectHighlightsData as ProjectHighlightsData
  const hasPublications = data.publications.length > 0
  const cvSections = [
    { id: "research-interest", label: "Interest" },
    { id: "technical-skills", label: "Skills" },
    { id: "research-experience", label: "Experience" },
    ...(hasPublications ? [{ id: "publications", label: "Publications" }] : []),
    { id: "education", label: "Education" },
    { id: "projects", label: "Selected" },
    { id: "scholarships", label: "Scholarships" },
    { id: "awards", label: "Awards" },
    { id: "grants", label: "Grants" },
    { id: "additional-activity", label: "Additional" },
    { id: "military-service", label: "Military" },
  ]

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("cv-theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setTheme(storedTheme === "dark" || (!storedTheme && prefersDark) ? "dark" : "light")
    setThemeReady(true)
  }, [])

  useEffect(() => {
    if (!themeReady) return
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem("cv-theme", theme)
  }, [theme, themeReady])

  return (
    <div>
      <TopNavigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
        theme={theme}
        onThemeToggle={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
      />

      <PageHeader updateDate={data.update} name={data.name} title={data.title} />

      <ContactInfo
        email={data.email}
        github={data.github}
        blog={data.blog}
        showBlog={data.show_blog}
        orcid={data.orcid}
      />

      {activeTab === "cv" && <ScrollProgress sections={cvSections} />}

      {activeTab === "cv" && (
        <main className="cv-main">
          <section id="research-interest" className="cv-section">
            <ResearchInterest content={data.research_interest} keywords={data.Keywords} />
          </section>
          <section id="technical-skills" className="cv-section">
            <Skills skills={data.skills} />
          </section>
          <section id="research-experience" className="cv-section">
            <ResearchExperience experiences={data.research_experience} />
          </section>
          {hasPublications && (
            <section id="publications" className="cv-section">
              <Publications publications={data.publications} />
            </section>
          )}
          <section id="education" className="cv-section">
            <AdditionalInfo
              education={data.education}
              militaryService={data.military_service}
              additionalActivity={data.additional_activity}
              showOnlyEducation
            />
          </section>
          <section id="projects" className="cv-section">
            <Projects projects={data.projects} />
          </section>
          <section id="scholarships" className="cv-section">
            <Awards awards={[]} scholarships={data.scholarships} grants={[]} />
          </section>
          <section id="awards" className="cv-section">
            <Awards awards={data.awards_honors} scholarships={[]} grants={[]} />
          </section>
          <section id="grants" className="cv-section">
            <Awards awards={[]} scholarships={[]} grants={data.grants} />
          </section>
          <section id="additional-activity" className="cv-section">
            <AdditionalInfo
              education={data.education}
              militaryService={data.military_service}
              additionalActivity={data.additional_activity}
              showOnlyAdditionalActivity
            />
          </section>
          <section id="military-service" className="cv-section">
            <AdditionalInfo
              education={data.education}
              militaryService={data.military_service}
              additionalActivity={data.additional_activity}
              showOnlyMilitaryService
            />
          </section>
        </main>
      )}

      {activeTab === "pdf" && (
        <main className="cv-wide-main">
          <section className="cv-section">
            <PDFViewer />
          </section>
        </main>
      )}

      {activeTab === "projects" && (
        <main className="cv-wide-main">
          <section className="cv-section">
            <ProjectGallery projectHighlights={highlights.project_highlights} />
          </section>
        </main>
      )}

      <div className="cv-corner-deco">Mingi KANG · CV · {new Date().getFullYear()}</div>
    </div>
  )
}
