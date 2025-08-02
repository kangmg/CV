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
        const offsetTop = rect.top + scrollTop // 문서 상단 기준 섹션 시작 위치
        const offsetBottom = offsetTop + rect.height // 문서 상단 기준 섹션 끝 위치

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

    // 상단 내비게이션 바 높이를 고려한 오프셋
    // 이 값은 상단 고정 바의 실제 높이와 스크롤 감지 민감도에 따라 조정될 수 있습니다.
    const headerOffset = 80 // 이전 100에서 80으로 조정 (상단 바 높이 64px + 여유 공간)
    const currentScrollPosition = scrollTop + headerOffset
    const viewportHeight = window.innerHeight

    let newActiveSection = ""

    // 스크롤이 맨 위일 때 첫 번째 섹션 활성화
    if (scrollTop < 50) {
      newActiveSection = sectionPositions[0]!.id
    }
    // 스크롤이 맨 아래에 가까울 때 마지막 섹션 활성화
    else if (scrollTop + viewportHeight >= document.documentElement.scrollHeight - 50) {
      newActiveSection = sectionPositions[sectionPositions.length - 1]!.id
    }
    // 그 외의 경우, 뷰포트 중앙에 가장 가까운 섹션 또는 가장 많이 보이는 섹션 활성화
    else {
      let closestSectionId = ""
      let minDistanceToCenter = Number.POSITIVE_INFINITY

      for (const section of sectionPositions) {
        if (!section) continue

        // 섹션의 중앙 지점
        const sectionCenter = section.offsetTop + section.element.offsetHeight / 2
        // 뷰포트의 중앙 지점
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

    // DOMContentLoaded 이후에도 한 번 더 업데이트하여 모든 콘텐츠 로드 후 정확성 확보
    const timer = setTimeout(updateScrollState, 300) // 약간의 지연 추가

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
                    // 스크롤 시 상단 내비게이션 바를 고려한 오프셋
                    const headerOffsetForScroll = 80 // 스크롤 이동 시에도 동일한 오프셋 적용
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
