import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Resume | Abiramy Thirulinganathan",
  description: "Curriculum Vitae of Abiramy Thirulinganathan - Software Developer",
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="border-b border-border/40 p-4 bg-background/80 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>
          <div className="flex items-center gap-2">
            <a href="/resume.pdf" download="Abiramy_Thirulinganathan_Resume.pdf">
              <Button size="sm" variant="outline" className="gap-1.5 text-xs sm:text-sm">
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </Button>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="gap-1.5 text-xs sm:text-sm">
                <ExternalLink className="w-4 h-4" />
                <span>Open in Tab</span>
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto p-4 md:p-6 flex flex-col">
        <div className="w-full flex-1 min-h-[82vh] rounded-xl overflow-hidden border border-border shadow-2xl bg-neutral-900/30">
          <iframe
            src="/resume.pdf#toolbar=1"
            className="w-full h-full min-h-[82vh] border-0 bg-white"
            title="Abiramy Thirulinganathan Resume"
          />
        </div>
      </main>
    </div>
  )
}
