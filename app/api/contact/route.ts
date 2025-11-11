import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message, services } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create the email body for Shawn
    const adminEmailBody = `
New contact form submission from Longtail Financial website

Name: ${name}
Email: ${email}

Services Interested In:
${services.length > 0 ? services.join(", ") : "None selected"}

Message:
${message}

---
Sent from longtailfinancial.com contact form
    `.trim()

    // Create the confirmation email body for the user
    const userEmailBody = `
Hi ${name},

Thank you for reaching out to Longtail Financial! We've received your message and will get back to you as soon as possible.

Here's a copy of what you sent:

${services.length > 0 ? `Services Interested In:\n${services.join(", ")}\n\n` : ""}Message:
${message}

---

Best regards,
Longtail Financial
https://longtailfinancial.com

If you have any urgent questions, feel free to reply to this email.
    `.trim()

    // Send email to Shawn
    const adminEmail = process.env.ADMIN_EMAIL || "shawn@longtailfinancial.com"

    const adminResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Longtail Financial Website <contact@mail.longtailfinancial.com>",
        to: adminEmail,
        reply_to: email,
        subject: `Contact Form: ${name}`,
        text: adminEmailBody,
      }),
    })

    if (!adminResponse.ok) {
      const error = await adminResponse.text()
      console.error("Resend API error (admin):", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    const adminData = await adminResponse.json()
    console.log("Admin email sent successfully:", adminData)

    // Send confirmation email to the user
    const userResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Longtail Financial <contact@mail.longtailfinancial.com>",
        to: email,
        reply_to: "shawn@longtailfinancial.com",
        subject: "Thank you for contacting Longtail Financial",
        text: userEmailBody,
      }),
    })

    if (!userResponse.ok) {
      const error = await userResponse.text()
      console.error("Resend API error (user):", error)
      // Don't fail the request if user confirmation fails, admin email was sent
      console.warn("Admin email sent successfully, but user confirmation email failed")
    } else {
      const userData = await userResponse.json()
      console.log("User confirmation email sent successfully:", userData)
    }

    return NextResponse.json({ success: true, id: adminData.id }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
