"use client"

export function PDFViewer() {
  return (
    <>
      <div className="cv-section-label">CV – PDF</div>
      <div className="cv-pdf-frame-wrap">
        <iframe src="/CV/data/CV.pdf" title="CV PDF" />
      </div>
      <a href="/CV/data/CV.pdf" download="CV.pdf" className="cv-pdf-download">
        ↓ Download PDF
      </a>
    </>
  )
}
