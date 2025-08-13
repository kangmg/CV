#import "@preview/clickworthy-resume:1.0.1": *

// read JSON data
#let data = json("./cv-data.json")

// personal info
#let name = data.name
#let contacts = (
  link("mailto:" + data.email)[#data.email],
  link("https://" + data.github)[#data.github],
)
#let summary = data.research_interest

// CV setting
#let theme = rgb("#26428b")
#let font = "Libertinus Serif"
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
  summary: align(right)[#text(size: 8pt, fill: gray)[Last updated: #datetime.today().display("[month repr:long] [day], [year]")]],
  theme-color: theme,
  font: font,
  font-size: fontSize,
  lang: lang,
  margin: margin,
)

// Research Interest
= Research Interest
#align(left)[#data.research_interest]

// skills
= Skills
#for (category, items) in data.skills [
  *#(category.replace("_", " "))*
  #for item in items [
    - #item
  ]
]

// research experiance 
= Research Experience
#for experience in data.research_experience {
  exp(
    title: experience.title,
    organization: experience.lab,
    date: experience.duration,
    location: experience.advisor,
    details: list(..experience.achievements.map(item => [- #item])),
  )
}

// education
= Education
#edu(
  institution: data.education.university,
  date: data.education.duration,
  location: "",
//  degrees: (
//    (data.education.degree, "Major"),
//  ),
  gpa: data.education.gpa,
  extra: data.education.degree,
)


// Projects
= Projects
#for project in data.projects {
  exp(
    title: project.title,
    organization: if project.link != "" { link(project.link)[#project.link] } else { "" },
    date: project.duration,
    details: list(..project.achievements.map(item => [- #item])),
  )
}

// Scholarships
= Scholarships
#for scholarship in data.scholarships {
  exp(
    title: scholarship.name,
    details: list(scholarship.institution + ", " + scholarship.year + ", " + scholarship.amount),
  )
}

// Awards
= Awards & Honors
#for award in data.awards_honors {
  exp(
    title: award.name,
    details: list(award.institution + ", " + award.year),
  )
}


// Grants
= Research Grants
#for grant in data.grants {
  exp(
    title: grant.name,
    details: list(grant.institution + ", " + grant.year + ", " + grant.amount),
  )
}



// additional 
= Additional Activity
#exp(
  title: data.additional_activity.activity,
  date: data.additional_activity.duration,
  details: list([- #data.additional_activity.description]),
)

// presentations
//= Presentations
//#for pres in data.presentations {
//  exp(
//    title: pres.title,
//    details: list([- #pres.event, #pres.date]),
//  )
//}

// military
= Military Service
#exp(
  title: data.military_service.branch + " (" + data.military_service.rank + ")",
  date: data.military_service.duration,
  details: list([- Completed mandatory military service.]),
)