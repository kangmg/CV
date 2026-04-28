export interface CVData {
  update: string
  name: string
  title: string
  github: string
  email: string
  blog: string
  show_blog?: boolean
  orcid: string
  research_interest: string
  Keywords?: string[]
  skills: {
    Computational_Chemistry: string[]
    Scientific_Skills: string[]
    Development_Skills: string[]
  }
  research_experience: ResearchExperience[]
  projects: Project[]
  presentations: Presentation[]
  publications: Publication[]
  education: Education[]
  military_service: MilitaryService
  additional_activity: AdditionalActivity
  awards_honors: Award[]
  scholarships: Award[]
  grants: Award[]
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
  extra?: string[]
  achievements: string[]
}

export interface ProjectHighlight {
  title: string
  image: string
  images?: string[]
  period: string | number
  descriptions: string[]
  details?: string[]
  custom_tag: string
  keywords?: string[]
  is_team: boolean
}

export interface Presentation {
  title: string
  event: string
  date: string
}

export interface Publication {
  title: string
  authors: string
  venue?: string
  year?: string
  status?: string
  doi?: string
  link?: string
}

export interface Education {
  institution: string
  duration: string
  degree: string
  department?: string
  advisor?: string
  gpa?: string
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

export interface Award {
  name: string
  institution: string
  year: string
  amount?: string
}
