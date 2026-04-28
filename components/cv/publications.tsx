import type { Publication } from "@/types/cv"

interface PublicationsProps {
  publications: Publication[]
}

function renderHighlightedAuthors(authors: string) {
  const highlight = "M. Kang"
  const tokens = authors.split(/(M\. Kang|[†*]+)/g).filter(Boolean)

  return tokens.map((token, i) => {
    if (token === highlight) {
      return (
        <span key={`${token}-${i}`} className="cv-publication-author-highlight">
          {token}
        </span>
      )
    }

    if (/^[†*]+$/.test(token)) {
      return (
        <sup key={`${token}-${i}`} className="cv-publication-author-note">
          {token}
        </sup>
      )
    }

    return <span key={`${token}-${i}`}>{token}</span>
  })
}

function formatPublicationDate(publication: Publication) {
  if (publication.status && publication.year) return `${publication.status} (${publication.year})`
  return publication.status || publication.year || ""
}

export function Publications({ publications }: PublicationsProps) {
  if (publications.length === 0) return null

  return (
    <>
      <div className="cv-section-label">Publications</div>
      <div>
        {publications.map((publication, i) => (
          <article key={i} className="cv-publication-item">
            <p className="cv-publication-citation">
              {renderHighlightedAuthors(publication.authors)}. {publication.title}.
              {publication.venue && (
                <>
                  {" "}
                  <em className="cv-publication-journal">{publication.venue}</em>
                </>
              )}
              {formatPublicationDate(publication) && (
                <>
                  {publication.venue ? ", " : " "}
                  <strong className="cv-publication-date">{formatPublicationDate(publication)}</strong>.
                </>
              )}
            </p>
            {(publication.doi || publication.link) && (
              <div className="cv-publication-links">
                {publication.doi && (
                  <a
                    href={`https://doi.org/${publication.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cv-publication-link"
                  >
                    DOI {publication.doi}
                  </a>
                )}
                {publication.link && (
                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cv-publication-link"
                  >
                    Link
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </>
  )
}
