"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, ChevronDown } from "lucide-react"

type Project = {
  id: number
  title: string
  shortDescription: string
  description: string
  image: string
  tags: string[]
  features: string[]
  githubLink?: string
  frontendGithubLink?: string
  backendGithubLink?: string
  fullDescription: string
}

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const projects: Project[] = [
    {
      id: 1,
      title: "ServiceHub",
      shortDescription: "Home Service Management System",
      description:
        "A full-stack Home Service Management System with role-based dashboards, secure JWT authentication, and booking tracking.",
      image: "/service_hub.png",
      tags: ["React.js", "Vite", "PHP", "MySQL", "JWT Authentication", "PHPMailer"],
      features: [
        "Developed a full-stack Home Service Management System with role-based dashboards and secure JWT authentication.",
        "Built RESTful APIs for bookings, provider verification, reviews, notifications, and booking management using PHP and MySQL.",
        "Implemented OTP verification, provider assignment, booking tracking, ratings/reviews, and admin management features."
      ],
      frontendGithubLink: "https://github.com/AbiNathan11/home-management-system-Frontend",
      backendGithubLink: "https://github.com/AbiNathan11/home-management-system-Backend",
      fullDescription:
        "ServiceHub is a comprehensive, full-stack web application designed to connect customers with home service professionals. It features distinct, role-based dashboards for customers, service providers, and administrators. The backend is built with PHP 8.x using secure PDO for database transactions, custom RESTful APIs for operations, JWT for robust session handling, and PHPMailer to manage email notifications and OTP verifications. The user interface is crafted using React.js (Vite) with responsive modern designs to ensure smooth booking, technician tracking, and rating workflows."
    },
    {
      id: 2,
      title: "Spendly",
      shortDescription: "Smart Budget & Expense Tracker Mobile Application",
      description:
        "A cross-platform mobile application for real-time expense tracking, budgeting, and financial planning.",
      image: "/spendly.jpg",
      tags: ["React Native", "Expo", "Node.js", "Express.js", "Supabase Auth", "PostgreSQL"],
      features: [
        "Developed a cross-platform mobile application for expense tracking, budgeting, and financial planning.",
        "Implemented secure authentication and real-time data management using Supabase Auth and PostgreSQL.",
        "Designed features including spend tracking, bill reminders, monthly reports, and responsive reusable UI components."
      ],
      githubLink: "https://github.com/AbiNathan11/spendly-expense-tracker",
      fullDescription:
        "Spendly is an advanced, cross-platform mobile application built using React Native and Expo, tailored to help users gain control of their financial life. It utilizes a secure Node.js and Express.js backend API coupled with Supabase for user authentication and PostgreSQL for high-performance transaction storage. Key features include intuitive financial charts, personalized budget caps, recurring bill reminders, automated monthly financial reports, and custom-styled modular UI components that ensure a premium, lightweight mobile experience."
    },
    {
      id: 3,
      title: "University Semester Timetable Generator",
      shortDescription: "Automated Timetable Generation & Scheduling System",
      description:
        "A web-based scheduling system utilizing Django and React to automate semester timetable generation and reduce conflicts.",
      image: "/timetable.png",
      tags: ["React.js", "Vite", "Django REST", "MySQL", "JWT Authentication"],
      features: [
        "Developed a web-based timetable management system to automate semester timetable generation and reduce scheduling conflicts.",
        "Implemented role-based access control with secure JWT authentication for administrators, lecturers, and students.",
        "Integrated React frontend with Django REST APIs and MySQL database following MVC architecture principles."
      ],
      githubLink: "https://github.com/AbiNathan11/University-timetable-system",
      fullDescription:
        "This project is a highly automated web application built to solve complex scheduling conflicts in universities. Utilizing React.js (Vite) for the frontend and Django REST Framework for the powerful algorithmic backend, the system generates optimized timetables automatically based on constraints like classroom capacity, lecturer availability, and semester batches. It uses MySQL as a database following strict MVC guidelines and features role-based access control for administrators, faculty members, and students with robust JWT session token management."
    }
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
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
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card
                className={`group h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  expandedProject === project.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">{project.shortDescription}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 border-t"
                      >
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Key Features:</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                              {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex flex-wrap gap-2 pt-2 sm:gap-4">
                            {project.githubLink && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="w-full sm:w-auto"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  window.open(project.githubLink, "_blank")
                                }}
                              >
                                <Github className="h-4 w-4 mr-2" />
                                View Code
                              </Button>
                            )}
                            {project.frontendGithubLink && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="w-full sm:w-auto"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  window.open(project.frontendGithubLink, "_blank")
                                }}
                              >
                                <Github className="h-4 w-4 mr-2" />
                                Frontend Code
                              </Button>
                            )}
                            {project.backendGithubLink && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="w-full sm:w-auto"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  window.open(project.backendGithubLink, "_blank")
                                }}
                              >
                                <Github className="h-4 w-4 mr-2" />
                                Backend Code
                              </Button>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="p-4 text-center">
                    <ChevronDown
                      className={`w-6 h-6 mx-auto transition-transform duration-300 ${
                        expandedProject === project.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
