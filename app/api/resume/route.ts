import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export const runtime = "nodejs"

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "resume.pdf")

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: "Resume file not found" },
        { status: 404 }
      )
    }

    const fileBuffer = fs.readFileSync(filePath)

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="Abiramy_Thirulinganathan_Resume.pdf"',
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    })
  } catch (error) {
    console.error("Error reading resume PDF:", error)
    return NextResponse.json(
      { error: "Failed to load resume" },
      { status: 500 }
    )
  }
}
