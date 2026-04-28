import { IdCard } from "lucide-react"

interface ContactInfoProps {
  email: string
  github: string
  blog: string
  showBlog?: boolean
  orcid: string
}

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
  </svg>
)

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
)

export function ContactInfo({ email, github, blog, showBlog = false, orcid }: ContactInfoProps) {
  const orcidUrl = `https://orcid.org/${orcid}`
  const orcidLabel = `orcid.org/${orcid}`

  return (
    <div className="cv-contact-bar">
      <a href={`mailto:${email}`} className="cv-contact-item">
        <MailIcon />
        {email}
      </a>
      <a href={`https://${github}`} target="_blank" rel="noopener noreferrer" className="cv-contact-item">
        <GithubIcon />
        {github}
      </a>
      <a href={orcidUrl} target="_blank" rel="noopener noreferrer" className="cv-contact-item" aria-label={orcidLabel}>
        <IdCard strokeWidth={1.5} />
        {orcidLabel}
      </a>
      {showBlog && (
        <a href={`https://${blog}`} target="_blank" rel="noopener noreferrer" className="cv-contact-item">
          <GlobeIcon />
          {blog}
        </a>
      )}
    </div>
  )
}
