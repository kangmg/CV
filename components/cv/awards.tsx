import type { Award } from "@/types/cv"

interface AwardsProps {
  awards: Award[]
  scholarships: Award[]
  grants: Award[]
}

function AwardList({ label, items }: { label: string; items: Award[] }) {
  if (items.length === 0) return null
  return (
    <>
      <div className="cv-section-label">{label}</div>
      {items.map((item, i) => (
        <div key={i} className="cv-award-row">
          <div>
            <div className="cv-award-name">{item.name}</div>
            <div className="cv-award-inst">{item.institution}</div>
          </div>
          <div className="cv-award-right">
            <div className="cv-award-year">{item.year}</div>
            {item.amount && <div className="cv-award-amount">{item.amount}</div>}
          </div>
        </div>
      ))}
    </>
  )
}

export function Awards({ awards, scholarships, grants }: AwardsProps) {
  return (
    <>
      <AwardList label="Scholarships" items={scholarships} />
      <AwardList label="Awards & Honors" items={awards} />
      <AwardList label="Research Grants" items={grants} />
    </>
  )
}
