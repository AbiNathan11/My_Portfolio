"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink, FileText } from "lucide-react"

interface ResumeModalProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export default function ResumeModal({ isOpen, onOpenChange }: ResumeModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl w-[95vw] h-[92vh] flex flex-col p-4 md:p-6 bg-background/95 backdrop-blur-md border border-border/60 shadow-2xl">
        <DialogHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3 border-b border-border/40 pr-8">
          <div>
            <DialogTitle className="text-xl md:text-2xl font-bold flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              <span>Abiramy Thirulinganathan</span>
            </DialogTitle>
            <DialogDescription className="text-xs md:text-sm text-muted-foreground mt-0.5">
              Resume / Curriculum Vitae
            </DialogDescription>
          </div>

          <div className="flex items-center gap-2 pt-1 sm:pt-0">
            <a
              href="/resume.pdf"
              download="Abiramy_Thirulinganathan_Resume.pdf"
              className="inline-block"
            >
              <Button size="sm" variant="outline" className="gap-1.5 text-xs md:text-sm">
                <Download className="h-4 w-4" />
                <span>Download</span>
              </Button>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="sm" className="gap-1.5 text-xs md:text-sm">
                <ExternalLink className="h-4 w-4" />
                <span>New Tab</span>
              </Button>
            </a>
          </div>
        </DialogHeader>

        <div className="flex-1 w-full min-h-0 rounded-lg overflow-hidden border border-border/50 bg-neutral-900/40 relative">
          <iframe
            src="/resume.pdf#toolbar=1&navpanes=0"
            className="w-full h-full border-0 rounded-lg bg-white"
            title="Abiramy Thirulinganathan Resume PDF"
          />
        </div>

        <div className="pt-2 text-center text-xs text-muted-foreground">
          Trouble viewing the document directly?{" "}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            Click here to open the PDF in a new tab
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}
