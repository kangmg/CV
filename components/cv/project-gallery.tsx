"use client"

import type { ProjectHighlight } from "@/types/cv"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface ProjectGalleryProps {
  projectHighlights: ProjectHighlight[]
}

export function ProjectGallery({ projectHighlights }: ProjectGalleryProps) {
  return (
    <>
      <div className="cv-section-label">Project Gallery</div>
      <div className="cv-gallery-grid">
        {projectHighlights.map((p, i) => {
          const galleryImages = p.images && p.images.length > 0 ? p.images : p.image ? [p.image] : []
          const detailItems = p.details && p.details.length > 0 ? p.details : p.descriptions

          return (
            <Dialog key={i}>
              <DialogTrigger asChild>
                <button className="cv-gallery-card" type="button" aria-label={`Open project details: ${p.title}`}>
                  {p.image && <img src={p.image} alt={p.title} className="cv-gallery-img" />}
                  <div className="cv-gallery-tag">{p.custom_tag}</div>
                  <div className="cv-gallery-title">{p.title}</div>
                  <div className="cv-gallery-meta">
                    <span className="cv-gallery-period">{p.period}</span>
                    {p.is_team && <span className="cv-gallery-team">Team Project</span>}
                  </div>
                  <ul className="cv-gallery-desc">
                    {p.descriptions.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                </button>
              </DialogTrigger>
              <DialogContent className="cv-gallery-dialog">
                <DialogHeader>
                  <div className="cv-gallery-tag">{p.custom_tag}</div>
                  <DialogTitle className="cv-gallery-dialog-title">{p.title}</DialogTitle>
                  <DialogDescription className="cv-gallery-dialog-period">
                    <span>{p.period}</span>
                    {p.is_team && <span className="cv-gallery-team">Team Project</span>}
                  </DialogDescription>
                </DialogHeader>
                {galleryImages.length > 0 && (
                  <div className="cv-gallery-dialog-images">
                    {galleryImages.map((image, j) => (
                      <a key={`${image}-${j}`} href={image} target="_blank" rel="noopener noreferrer">
                        <img src={image} alt={`${p.title} ${j + 1}`} className="cv-gallery-dialog-img" />
                      </a>
                    ))}
                  </div>
                )}
                <ul className="cv-gallery-dialog-desc">
                  {detailItems.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
              </DialogContent>
            </Dialog>
          )
        })}
      </div>
    </>
  )
}
