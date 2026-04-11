"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Hero() {
  const [text, setText] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const fullText = "Software Developer"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32">

      {/* Sidebars - only visible when not scrolled */}
      <AnimatePresence>
        {!scrolled && (
          <>
            {/* Left social sidebar */}
            <motion.div
              key="left-sidebar"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute left-6 top-[58%] -translate-y-1/2 hidden lg:flex flex-col items-center z-40"
            >
              <div className="flex flex-col items-center gap-5 relative">
                <a
                  href="https://github.com/AbiNathan11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors duration-200 hover:-translate-y-0.5 transform"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="http://linkedin.com/in/abiramy-thirulinganathan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors duration-200 hover:-translate-y-0.5 transform"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:abiramythirulinganathan@gmail.com"
                  className="text-white hover:text-primary transition-colors duration-200 hover:-translate-y-0.5 transform"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
                {/* Vertical line hanging below */}
                <div className="absolute top-[calc(100%+20px)] w-px h-32 bg-white/60" />
              </div>
            </motion.div>

            {/* Right email sidebar */}
            <motion.div
              key="right-sidebar"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="absolute right-6 top-[35%] -translate-y-1/2 hidden lg:flex flex-col items-center z-40"
            >
              <div className="flex flex-col items-center gap-4 relative">
                <a
                  href="mailto:abiramythirulinganathan@gmail.com"
                  className="text-white hover:text-primary transition-colors duration-200 text-xs tracking-widest block"
                  style={{ writingMode: "vertical-rl" }}
                >
                  abiramythirulinganathan@gmail.com
                </a>
                {/* Vertical line hanging below */}
                <div className="absolute top-[calc(100%+20px)] w-px h-32 bg-white/60" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <div className="container mx-auto px-4 lg:pl-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Abiramy Thirulinganathan</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
              <span className="text-foreground">{text}</span>
              <span className="animate-blink">|</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              I design and develop high-quality digital experiences, combining modern technologies with clean and maintainable code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" onClick={() => scrollToSection("projects")}>
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
                Contact Me
              </Button>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full"></div>
            <div className="absolute inset-4 bg-muted rounded-full overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="MemoryLeaked"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
        <button onClick={() => scrollToSection("about")} className="animate-bounce">
          <ArrowRight className="h-6 w-6 transform rotate-90" />
        </button>
      </div>
    </section>
  )
}

