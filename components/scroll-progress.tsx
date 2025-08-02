"use client"

import type React from "react"
import { useEffect, useState, useCallback } from "react"

interface ScrollProgressProps {
  sections: Array<{
    id: string
    title: string
    icon: React.ReactNode
  }>
}

export function ScrollProgress({ sections }: ScrollProgressProps) {
  const [activeSection, setActiveSection] = useState("")
  const [scrollProgress, setScrollProgress] = useState(0)

  const updateScrollState = useCallback(() => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0
    setScrollProgress(progress)

    const sectionPositions = sections
      .map((section) => {
        const element = document.getElementById(section.id)
        if (!element) return null

        const rect = element.getBoundingClientRect()
        const offsetTop = rect.top + scrollTop 
        const offsetBottom = offsetTop + rect.height 

        return {
          id: section.id,
          offsetTop,
          offsetBottom,
          element,
        }
      })
      .filter(Boolean)
      .sort((a, b) => a!.offsetTop - b!.offsetTop)

    if (sectionPositions.length === 0) return

    const headerOffset = 80
    const currentScrollPosition = scrollTop + headerOffset
    const viewportHeight = window.innerHeight

    let newActiveSection = ""

    if (scrollTop < 50) {
      newActiveSection = sectionPositions[0]!.id
    }

    else if (scrollTop + viewportHeight >= document.documentElement.scrollHeight - 50) {
      newActiveSection = sectionPositions[sectionPositions.length - 1]!.id
    }

    else {
      let closestSectionId = ""
      let minDistanceToCenter = Number.POSITIVE_INFINITY

      for (const section of sectionPositions) {
        if (!section) continue

        const sectionCenter = section.offsetTop + section.element.offsetHeight / 2

        const viewportCenter = scrollTop + viewportHeight / 2

        const distance = Math.abs(sectionCenter - viewportCenter)

        if (distance < minDistanceToCenter) {
          minDistanceToCenter = distance
          closestSectionId = section.id
        }
      }
      newActiveSection = closestSectionId
    }

    if (newActiveSection && newActiveSection !== activeSection) {
      setActiveSection(newActiveSection)
    }
  }, [sections, activeSection])

  useEffect(() => {
    const handleScroll = () => {
      updateScrollState()
    }

    updateScrollState() // Initial call

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", updateScrollState, { passive: true })

    const timer = setTimeout(updateScrollState, 300) 

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", updateScrollState)
      clearTimeout(timer)
    }
  }, [updateScrollState])

  const progressHeight = Math.max(scrollProgress * 2.56, 0) // 256px = 2.56 * 100

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="relative">
        {/* Progress percentage indicator - moved to top */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="text-xs text-muted-foreground font-mono mb-2">{Math.round(scrollProgress)}%</div>
        </div>

        {/* Progress line background */}
        <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-64 bg-border/60 rounded-full" />

        {/* Progress line fill - changed to grayscale */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-foreground/80 via-foreground/60 to-foreground/40 rounded-full transition-all duration-300 ease-out"
          style={{ height: `${progressHeight}px` }}
        />

        {/* Section indicators */}
        <div className="relative flex flex-col justify-between h-64">
          {sections.map((section, index) => {
            const isActive = activeSection === section.id

            return (
              <button
                key={section.id}
                onClick={() => {
                  const element = document.getElementById(section.id)
                  if (element) {

                    const headerOffsetForScroll = 80 
                    const elementPosition = element.offsetTop - headerOffsetForScroll
                    window.scrollTo({
                      top: Math.max(0, elementPosition),
                      behavior: "smooth",
                    })
                  }
                }}
                className={`group relative flex items-center transition-all duration-300 ${
                  isActive ? "scale-110" : "hover:scale-105"
                }`}
              >
                {/* Indicator dot */}
                <div
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                    isActive
                      ? "bg-foreground border-foreground shadow-lg shadow-foreground/20 scale-110"
                      : "bg-background border-border hover:border-foreground/50 hover:bg-foreground/10"
                  }`}
                >
                  {/* Inner dot for active state */}
                  {isActive && <div className="w-1 h-1 bg-background rounded-full" />}
                </div>

                {/* Tooltip */}
                <div
                  className={`absolute left-6 px-2 py-1.5 bg-popover/95 backdrop-blur-sm border border-border rounded-md shadow-lg transition-all duration-300 whitespace-nowrap z-50 ${
                    isActive
                      ? "opacity-100 translate-x-0 scale-100"
                      : "opacity-0 -translate-x-2 scale-95 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100"
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-xs">
                    <div className={`transition-colors ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                      {section.icon}
                    </div>
                    <span className="font-medium text-foreground">{section.title}</span>
                  </div>
                  {/* Arrow */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-0.5 w-1.5 h-1.5 bg-popover/95 border-l border-b border-border rotate-45" />
                </div>
              </button>
            )
          })}
        </div>

        {/* Mini progress bar at bottom */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-12 h-1 bg-border/60 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-foreground/80 to-foreground/60 transition-all duration-300"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
