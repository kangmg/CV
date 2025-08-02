export interface CVData {
  update: string
  name: string
  title: string
  github: string
  email: string
  blog: string
  research_interest: string
  skills: {
    programming_languages: string[]
    scientific_skills: string[]
    code_development: string[]
    large_data_processing: string[]
  }
  research_experience: ResearchExperience[]
  projects: Project[]
  presentations: Presentation[]
  education: Education
  military_service: MilitaryService
  additional_activity: AdditionalActivity
  awards_scholarships: AwardScholarship[]
}

export interface ProjectHighlightsData {
  project_highlights: ProjectHighlight[]
}

export interface ResearchExperience {
  title: string
  duration: string
  lab: string
  advisor: string
  achievements: string[]
}

export interface Project {
  title: string
  link?: string
  duration?: string
  event?: string
  mentor?: string
  achievements: string[]
}

export interface ProjectHighlight {
  title: string
  image: string
  period: string
  descriptions: string[]
  custom_tag: string
  is_team: boolean
}

export interface Presentation {
  title: string
  event: string
  date: string
}

export interface Education {
  university: string
  duration: string
  degree: string
  gpa: string
}

export interface MilitaryService {
  branch: string
  rank: string
  duration: string
}

export interface AdditionalActivity {
  activity: string
  duration: string
  description: string
}

export interface AwardScholarship {
  name: string
  institution: string
  year: string
  amount: string
}
