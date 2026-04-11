"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socials = [
    { icon: <Github className="h-4 w-4" />, href: "https://github.com/AbiNathan11", label: "GitHub" },
    { icon: <Linkedin className="h-4 w-4" />, href: "http://linkedin.com/in/abiramy-thirulinganathan", label: "LinkedIn" },
    { icon: <Mail className="h-4 w-4" />, href: "mailto:abiramythirulinganathan@gmail.com", label: "Email" },
  ]

  return (
    <footer className="bg-background border-t border-border/40 py-8 relative">
       {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4 lg:pl-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="text-xl font-bold tracking-tight">
              <span className="text-white">&lt;/</span>
              <span className="text-primary">AbiNathan</span>
              <span className="text-white">&gt;</span>
            </div>
            <div className="h-4 w-px bg-border/60 hidden md:block" />
            <p className="text-xs text-muted-foreground italic">
              Built with passion & code.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex items-center gap-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-muted-foreground hover:text-primary transition-all duration-200 hover:-translate-y-0.5"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50">
              © {currentYear} | AbiNathan 
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
