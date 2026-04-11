"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Layout, Server, Database, Wrench } from "lucide-react"

export default function TechStack() {

  const technologies = {
    languages: {
      icon: <Code2 className="h-6 w-6" />,
      title: "Programming Languages",
      description: "Core languages for systems and application development",
      skills: [
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      ],
    },
    frontend: {
      icon: <Layout className="h-6 w-6" />,
      title: "Frontend Development",
      description: "Modern web development technologies",
      skills: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      ],
    },
    backend: {
      icon: <Server className="h-6 w-6" />,
      title: "Backend Development",
      description: "Server-side frameworks and technologies",
      skills: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "Supabase", icon: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg" },
      ],
    },
    database: {
      icon: <Database className="h-6 w-6" />,
      title: "Database Systems",
      description: "Database management and optimization",
      skills: [
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      ],
    },
    tools: {
      icon: <Wrench className="h-6 w-6" />,
      title: "Development Tools",
      description: "Tools and environments for development",
      skills: [
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      ],
    },
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  }

  const [selectedMilestone, setSelectedMilestone] = useState<string | null>("languages")

  return (
    <section id="tech-stack" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Skills
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto min-h-[400px]">
          {/* Left Side: Timeline Design */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative flex flex-col items-center lg:items-start pl-8">
              {/* Vertical line */}
              <div className="absolute left-0 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
              
              <div className="space-y-12 py-8">
                {Object.entries(technologies).map(([key, category]) => (
                  <div
                    key={key}
                    onClick={() => setSelectedMilestone(key)}
                    className="relative flex items-center gap-6 cursor-pointer group"
                  >
                    {/* The Milestone Dot */}
                    <div 
                      className={`relative w-4 h-4 rounded-full border-2 transition-all duration-500 z-10 ${
                        selectedMilestone === key 
                          ? "border-primary bg-primary scale-125 shadow-[0_0_20px_rgba(var(--primary),0.8)]" 
                          : "border-muted-foreground bg-background group-hover:border-primary"
                      }`}
                    >
                      {selectedMilestone === key && (
                        <div className="absolute inset-0 rounded-full animate-ping bg-primary/40" />
                      )}
                    </div>

                    <span className={`text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
                      selectedMilestone === key ? "text-primary translate-x-0" : "text-muted-foreground -translate-x-2 group-hover:text-foreground group-hover:translate-x-0"
                    }`}>
                      {category.title.split(" ")[0]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Content Area (Selected Milestone Info) */}
          <div className="lg:col-span-8 h-full flex items-center">
            <AnimatePresence mode="wait">
              {Object.entries(technologies).map(([key, category]) => (
                selectedMilestone === key && (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-center">
                      {category.skills.map((skill, sIndex) => (
                        <motion.div
                          key={sIndex}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: sIndex * 0.04 }}
                          className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-muted/30 border border-primary/5 hover:border-primary/20 transition-all shadow-sm group hover:shadow-md h-full"
                        >
                          {skill.icon && (
                            <div className="relative p-2 bg-background rounded-xl mb-1 shadow-inner ring-1 ring-primary/5 group-hover:ring-primary/20 transition-all">
                              <img 
                                src={skill.icon} 
                                alt={skill.name} 
                                className="w-12 h-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-500" 
                              />
                            </div>
                          )}
                          <span className="text-base font-bold text-foreground/80 group-hover:text-primary transition-colors">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  )
}

