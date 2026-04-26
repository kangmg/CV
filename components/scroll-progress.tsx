"use client"

import { useEffect, useState, useCallback } from "react"

interface ScrollProgressProps {
  sections: Array<{ id: string; label: string }>
}

export function ScrollProgress({ sections }: ScrollProgressProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "")

  const updateActive = useCallback(() => {
    const scrollTop = window.scrollY
    const viewportHeight = window.innerHeight
    const docHeight = document.documentElement.scrollHeight

    if (scrollTop + viewportHeight >= docHeight - 50) {
      setActiveSection(sections[sections.length - 1]?.id ?? "")
      return
    }

    let closest = ""
    let minDist = Infinity
    for (const s of sections) {
      const el = document.getElementById(s.id)
      if (!el) continue
      const center = el.offsetTop + el.offsetHeight / 2
      const dist = Math.abs(center - (scrollTop + viewportHeight / 2))
      if (dist < minDist) {
        minDist = dist
        closest = s.id
      }
    }
    if (closest) setActiveSection(closest)
  }, [sections])

  useEffect(() => {
    updateActive()
    window.addEventListener("scroll", updateActive, { passive: true })
    return () => window.removeEventListener("scroll", updateActive)
  }, [updateActive])

  return (
    <div className="cv-scroll-progress">
      <div className="cv-sp-track">
        {sections.map((s, i) => (
          <div key={s.id}>
            {i > 0 && <div className="cv-sp-line" />}
            <div
              className={`cv-sp-dot ${activeSection === s.id ? "active" : ""}`}
              title={s.label}
              onClick={() => {
                const el = document.getElementById(s.id)
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
