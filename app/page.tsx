"use client"

import { useState } from "react"
import { ContactInfo } from "@/components/cv/contact-info"
import { ResearchInterest } from "@/components/cv/research-interest"
import { Skills } from "@/components/cv/skills"
import { Projects } from "@/components/cv/projects"
import { ResearchExperience } from "@/components/cv/research-experience"
import { Presentations } from "@/components/cv/presentations"
import { AdditionalInfo } from "@/components/cv/additional-info"
import { ProjectGallery } from "@/components/cv/project-gallery"
import { TopNavigation } from "@/components/top-navigation"
import { PageHeader } from "@/components/page-header"
import { AwardsScholarships } from "@/components/cv/awards-scholarships"
import { ScrollProgress } from "@/components/scroll-progress"
import { PDFViewer } from "@/components/pdf-viewer"
import {
  Microscope,
  Code2,
  FolderOpen,
  FlaskConical,
  GraduationCap,
  Trophy,
  BookOpen,
  Presentation,
  Shield,
} from "lucide-react"
import type { CVData, ProjectHighlightsData } from "@/types/cv"
import cvData from "@/data/cv-data.json"
import projectHighlightsData from "@/data/project-gallery.json"

const cvSections = [
  { id: "research-interest", title: "Research Interest", icon: <Microscope className="h-4 w-4" /> },
  { id: "technical-skills", title: "Technical Skills", icon: <Code2 className="h-4 w-4" /> },
  { id: "projects", title: "Projects", icon: <FolderOpen className="h-4 w-4" /> },
  { id: "research-experience", title: "Research Experience", icon: <FlaskConical className="h-4 w-4" /> },
  { id: "education", title: "Education", icon: <GraduationCap className="h-4 w-4" /> },
  { id: "awards-scholarships", title: "Awards & Scholarships", icon: <Trophy className="h-4 w-4" /> },
  { id: "additional-activity", title: "Additional Activity", icon: <BookOpen className="h-4 w-4" /> },
  { id: "presentations", title: "Presentations", icon: <Presentation className="h-4 w-4" /> },
  { id: "military-service", title: "Military Service", icon: <Shield className="h-4 w-4" /> },
]

export default function CVPage() {
  const [activeTab, setActiveTab] = useState<"cv" | "pdf" | "projects">("cv")
  const data: CVData = cvData as CVData
  const highlights: ProjectHighlightsData = projectHighlightsData as ProjectHighlightsData

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation Bar with gradient connection */}
      <TopNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Scroll Progress Indicator */}
      {activeTab === "cv" && <ScrollProgress sections={cvSections} />}

      {/* Page Header - naturally connected with gradient */}
      <PageHeader updateDate={data.update} name={data.name} title={data.title} />

      {/* Content area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Contact info */}
        <ContactInfo email={data.email} github={data.github} blog={data.blog} />

        {/* Tab content */}
        {activeTab === "cv" ? (
          <div className="space-y-4">
            <section id="research-interest" className="scroll-mt-24">
              <ResearchInterest content={data.research_interest} />
            </section>
            <section id="technical-skills" className="scroll-mt-24">
              <Skills skills={data.skills} />
            </section>
            <section id="projects" className="scroll-mt-24">
              <Projects projects={data.projects} />
            </section>
            <section id="research-experience" className="scroll-mt-24">
              <ResearchExperience experiences={data.research_experience} />
            </section>
            <section id="education" className="scroll-mt-24">
              <AdditionalInfo
                education={data.education}
                militaryService={data.military_service}
                additionalActivity={data.additional_activity}
                showOnlyEducation={true}
              />
            </section>
            <section id="awards-scholarships" className="scroll-mt-24">
              <AwardsScholarships awards={data.awards_scholarships} />
            </section>
            <section id="additional-activity" className="scroll-mt-24">
              <AdditionalInfo
                education={data.education}
                militaryService={data.military_service}
                additionalActivity={data.additional_activity}
                showOnlyAdditionalActivity={true}
              />
            </section>
            <section id="presentations" className="scroll-mt-24">
              <Presentations presentations={data.presentations} />
            </section>
            <section id="military-service" className="scroll-mt-24">
              <AdditionalInfo
                education={data.education}
                militaryService={data.military_service}
                additionalActivity={data.additional_activity}
                showOnlyMilitaryService={true}
              />
            </section>
          </div>
        ) : activeTab === "pdf" ? (
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <PDFViewer />
            </div>
          </div>
        ) : (
          <ProjectGallery projectHighlights={highlights.project_highlights} />
        )}
      </div>
    </div>
  )
}
