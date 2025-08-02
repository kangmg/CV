#import "@preview/clickworthy-resume:1.0.1": *

// read JSON data
#let data = json("tmp.json")

// personal info
#let name = data.name
#let contacts = (
  link("mailto:" + data.email)[#data.email],
  link("https://" + data.github)[#data.github],
)
#let summary = data.research_interest

// CV setting
#let theme = rgb("#26428b")
#let font = "New Computer Modern"
#let fontSize = 11pt
#let lang = "en"
#let margin = (
  top: 1cm,
  bottom: 0cm,
  left: 1cm,
  right: 1cm,
)

// CV header
#show: resume.with(
  author: name,
  location: "",
  contacts: contacts,
  summary: summary,
  theme-color: theme,
  font: font,
  font-size: fontSize,
  lang: lang,
  margin: margin,
)

// skills
= Skills
#skills((
  ("Programming Languages", data.skills.programming_languages),
  ("Scientific Skills", data.skills.scientific_skills),
  ("Code Development", data.skills.code_development),
  ("Large Data Processing", data.skills.large_data_processing),
))

// projects
= Projects
#for proj in data.projects {
  exp(
    title: if "link" in proj { link(proj.link)[#proj.title] } else { proj.title },
    details: list(..proj.achievements.map(item => [• #item])),
  )
}

// research experiance
= Research Experience
#for experience in data.research_experience {
  exp(
    title: experience.title,
    organization: experience.lab,
    date: experience.duration,
    location: experience.advisor,
    details: list(..experience.achievements.map(item => [• #item])),
  )
}

// eduation
= Education
#edu(
  institution: data.education.university,
  date: data.education.duration,
  location: "",
  degrees: ((data.education.degree, "Major")),
  gpa: data.education.gpa,
  extra: "",
)

// awards and scholarship
= Awards and Scholarships
#for award in data.awards_scholarships {
  exp(
    title: award.title,
    organization: award.organization,
    date: award.date,
    details: list(..award.details.map(item => [• #item])),
  )
}

// additional 
= Additional Activities
#exp(
  title: data.additional_activities.activity,
  date: data.additional_activities.duration,
  details: list(data.additional_activities.description),
)

// presentations
= Presentations
#for pres in data.presentations {
  exp(
    title: pres.title,
    details: list(pres.event + ", " + pres.date),
  )
}

// military
= Military Service
#exp(
  title: data.military_service.branch + " (" + data.military_service.rank + ")",
  date: data.military_service.duration,
  details: list("Completed mandatory military service."),
)
