// api/contact.js
// Edge Function Vercel — reçoit le formulaire de contact de TiBot
// et envoie un email à hello@tdeglane.com via Resend.

export const config = { runtime: "edge" };

export default async function handler(req) {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const { name, message, lang } = await req.json();

  if (!name || !message) {
    return new Response(JSON.stringify({ error: "Missing fields" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const subject =
    lang === "fr"
      ? `Message via TiBot — ${name}`
      : `Message via TiBot — ${name}`;

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
      <p style="font-size: 12px; color: #999; text-transform: uppercase; letter-spacing: 0.05em;">Message reçu via TiBot · tdeglane.com</p>
      <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
      <p><strong>De :</strong> ${name}</p>
      <p><strong>Message :</strong></p>
      <p style="background: #f9f9f9; padding: 16px; border-radius: 4px; line-height: 1.6;">${message.replace(/\n/g, "<br/>")}</p>
      <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
      <p style="font-size: 12px; color: #999;">Envoyé depuis ask.tdeglane.com</p>
    </div>
  `;

  // Appel à l'API Resend
  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "TiBot <tibot@tdeglane.com>", // domaine vérifié dans Resend
      to: ["hello@tdeglane.com"],
      subject,
      html,
    }),
  });

  if (!resendResponse.ok) {
    const error = await resendResponse.json();
    return new Response(JSON.stringify({ error }), {
      status: 500,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
  });
}
