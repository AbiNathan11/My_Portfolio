import nodemailer from "nodemailer"
import { NextResponse } from "next/server"
import { z } from "zod"

export const runtime = "nodejs"

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters."),
  email: z.string().trim().email("Please enter a valid email address."),
  subject: z.string().trim().min(3, "Subject must be at least 3 characters."),
  message: z.string().trim().min(10, "Message must be at least 10 characters."),
})

const receiverEmail =
  process.env.CONTACT_RECEIVER_EMAIL ?? "abiramythirulinganathan@gmail.com"

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

function createTransport() {
  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT ?? 587)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !user || !pass) {
    throw new Error(
      "Missing SMTP configuration. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS.",
    )
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === "true" || port === 465,
    auth: {
      user,
      pass,
    },
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: parsed.error.issues[0]?.message ?? "Invalid contact form data.",
        },
        { status: 400 },
      )
    }

    const { name, email, subject, message } = parsed.data
    const transport = createTransport()
    const senderEmail = process.env.SMTP_USER as string

    await transport.sendMail({
      from: process.env.SMTP_FROM ?? `Portfolio Contact <${senderEmail}>`,
      to: receiverEmail,
      replyTo: email,
      subject: `Portfolio contact: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        message,
      ].join("\n"),
      html: `
        <h2>New portfolio contact message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      `,
    })

    return NextResponse.json({ message: "Your message was sent successfully." })
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to process your request."

    return NextResponse.json({ error: message }, { status: 500 })
  }
}