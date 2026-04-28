#import "@preview/clickworthy-resume:1.0.1": *

// read JSON data
#let data = json("../data/cv-data.json")

// personal info
#let name = data.name
#let contacts = (
  link("mailto:" + data.email)[#data.email],
  link("https://" + data.github)[#data.github],
  link("https://orcid.org/" + data.orcid)[orcid.org/#data.orcid],
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

// publications
#let author_mark(mark) = text(size: 0.72em, baseline: 0.18em)[#mark]

#let author_notes(text) = {
  let with_stars = (value) => {
    let parts = value.split("*")
    let result = []
    for (i, part) in parts.enumerate() {
      result += [#part]
      if i < parts.len() - 1 {
        result += author_mark("*")
      }
    }
    result
  }

  let parts = text.split("†")
  let result = []
  for (i, part) in parts.enumerate() {
    result += with_stars(part)
    if i < parts.len() - 1 {
      result += author_mark("†")
    }
  }
  result
}

#let highlighted_authors(authors) = {
  let parts = authors.split("M. Kang")
  let result = []
  for (i, part) in parts.enumerate() {
    result += author_notes(part)
    if i < parts.len() - 1 {
      result += underline(strong[M. Kang])
    }
  }
  result
}

#let publication_date(publication) = {
  let status = publication.at("status", default: "")
  let year = publication.at("year", default: "")
  if status != "" and year != "" {
    status + " (" + year + ")"
  } else if status != "" {
    status
  } else if year != "" {
    year
  } else {
    ""
  }
}

#if data.publications.len() > 0 [
  = Publications
  #for publication in data.publications [
    #highlighted_authors(publication.authors)#text[.] #publication.title.
    #if publication.at("venue", default: "") != "" [
      #emph[#publication.venue]#if publication_date(publication) != "" [, ]
    ]
    #if publication_date(publication) != "" [
      #strong[#publication_date(publication)].
    ]
  ]
]

// education
= Education
#for education in data.education {
  let extra = education.degree
  if education.at("department", default: "") != "" {
    extra = extra + ", " + education.department
  }
  edu(
    institution: education.institution,
    date: education.duration,
    location: education.at("advisor", default: ""),
    gpa: education.at("gpa", default: ""),
    extra: extra,
  )
}


// selected projects
= Selected Projects
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
