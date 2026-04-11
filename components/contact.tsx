"use client"

import { useState, type ChangeEvent, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = (await response.json()) as { message?: string; error?: string }

      if (!response.ok) {
        throw new Error(result.error ?? "Failed to send your message.")
      }

      toast({
        title: "Message sent!",
        description: result.message ?? "Thanks for reaching out. I’ll get back to you soon.",
      })

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong while sending your message."

      toast({
        title: "Message not sent",
        description: message,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
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
            Contact
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <Card className="border-none shadow-xl bg-background/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-semibold tracking-wide uppercase">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder=""
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-muted/50 border-none focus-visible:ring-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold tracking-wide uppercase">Your Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder=""
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-muted/50 border-none focus-visible:ring-primary"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-semibold tracking-wide uppercase">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder=""
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-muted/50 border-none focus-visible:ring-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold tracking-wide uppercase">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder=""
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-muted/50 border-none focus-visible:ring-primary resize-none"
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-lg h-12 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300" disabled={isSubmitting}>
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

