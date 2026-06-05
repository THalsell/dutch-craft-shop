import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await request.json();

  const {
    fullName,
    email,
    address,
    dateOfPurchase,
    mattressName,
    mattressSize,
    whyBought,
    dealershipName,
    dealershipCity,
    dealershipState,
    purchasedWithFoundation,
    dealershipFeedback,
  } = body;

  const required: Record<string, unknown> = {
    fullName,
    email,
    address,
    dateOfPurchase,
    mattressName,
    mattressSize,
    whyBought,
    dealershipName,
    dealershipCity,
    dealershipState,
    purchasedWithFoundation,
  };

  const missing = Object.entries(required)
    .filter(([, v]) => !v || String(v).trim() === "")
    .map(([k]) => k);

  if (missing.length > 0) {
    return NextResponse.json({ error: "Missing required fields", fields: missing }, { status: 400 });
  }

  const row = (label: string, value: string) =>
    `<tr>
      <th style="text-align:left;background:#f3f5f4;padding:8px 12px;white-space:nowrap;font-family:sans-serif;font-size:14px;">${label}</th>
      <td style="padding:8px 12px;font-family:sans-serif;font-size:14px;">${value}</td>
    </tr>`;

  const html = `
    <!DOCTYPE html>
    <html>
    <body style="margin:0;padding:24px;background:#ffffff;color:#1f1f1f;">
      <h2 style="font-family:sans-serif;color:#003a63;margin-bottom:20px;">Mattress Warranty Registration</h2>
      <table border="1" cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:600px;border-color:#e3e6e5;">
        <tbody>
          ${row("Full Name", fullName)}
          ${row("Email", email)}
          ${row("Address", address)}
          ${row("Date of Purchase", dateOfPurchase)}
          ${row("Mattress Name", mattressName)}
          ${row("Mattress Size", mattressSize)}
          ${row("Why Purchased", whyBought)}
          ${row("Dealership Name", dealershipName)}
          ${row("Dealership City", dealershipCity)}
          ${row("Dealership State", dealershipState)}
          ${row("Purchased With Foundation?", purchasedWithFoundation)}
          ${dealershipFeedback?.trim() ? row("Dealership Feedback", dealershipFeedback) : ""}
        </tbody>
      </table>
    </body>
    </html>
  `;

  try {
    await resend.emails.send({
      from: "Dutch Craft Website <onboarding@resend.dev>",
      to: "eli@twlakes.net",
      subject: `Mattress Warranty Registration — ${fullName}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Failed to send registration" }, { status: 500 });
  }
}
