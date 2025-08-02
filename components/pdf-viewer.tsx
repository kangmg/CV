"use client"

export function PDFViewer() {
  return (
    <div className="w-full h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden">
          <div className="bg-muted/30 px-6 py-4 border-b border-border">
            <h2 className="text-xl font-semibold text-foreground">CV - PDF Version</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Download or view the PDF version of my curriculum vitae
            </p>
          </div>

          <div className="p-6">
            <div className="aspect-[8.5/11] w-full bg-background border border-border rounded-lg overflow-hidden shadow-inner">
              <iframe src="/CV/data/CV.pdf" className="w-full h-full" title="CV PDF" style={{ border: "none" }} />
            </div>

            <div className="mt-6 flex justify-center">
              <a
                href="/CV/data/CV.pdf"
                download="CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
