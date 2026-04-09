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

  const { query } = await req.json();

  // DEBUG TEMPORAIRE
  const url = process.env.ASKNIELS_URL;
  const secret = process.env.TIBOT_SECRET;
  
  return new Response(JSON.stringify({ 
    url_present: !!url,
    url_length: url?.length,
    url_start: url?.slice(0, 20),
    secret_present: !!secret,
    secret_length: secret?.length
  }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}