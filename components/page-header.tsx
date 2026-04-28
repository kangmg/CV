interface PageHeaderProps {
  updateDate: string
  name: string
  title: string
}

export function PageHeader({ updateDate, name, title }: PageHeaderProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <header className="cv-header">
      <div className="cv-header-inner">
        <div className="cv-header-meta">
          <span>Last updated: {formatDate(updateDate)}</span>
        </div>
        <h1 className="cv-name">{name}</h1>
        <div className="cv-title-line">{title}</div>
      </div>
    </header>
  )
}
