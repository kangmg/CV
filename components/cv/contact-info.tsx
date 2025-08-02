import { Mail, Github, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ContactInfoProps {
  email: string
  github: string
  blog: string
}

export function ContactInfo({ email, github, blog }: ContactInfoProps) {
  return (
    <Card className="mb-6 border-border bg-card">
      <CardContent className="py-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-2 group">
            <div className="p-1.5 rounded-full bg-muted/50">
              <Mail className="h-3.5 w-3.5" />
            </div>
            <a href={`mailto:${email}`} className="hover:text-foreground transition-colors font-medium text-sm">
              {email}
            </a>
          </div>
          <div className="flex items-center gap-2 group">
            <div className="p-1.5 rounded-full bg-muted/50">
              <Github className="h-3.5 w-3.5" />
            </div>
            <a
              href={`https://${github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors font-medium text-sm"
            >
              {github}
            </a>
          </div>
          <div className="flex items-center gap-2 group">
            <div className="p-1.5 rounded-full bg-muted/50">
              <Globe className="h-3.5 w-3.5" />
            </div>
            <a
              href={`https://${blog}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors font-medium text-sm"
            >
              {blog}
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
