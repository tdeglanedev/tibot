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

  try {
    const response = await fetch(
      `${process.env.ASKNIELS_URL}/make-server-1cb90903/tibot-search`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-tibot-secret": process.env.TIBOT_SECRET,
        "Authorization": `Bearer ${process.env.SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ query }),
      }
    );

    const text = await response.text();
    
    // On retourne le status ET le body brut pour debug
    return new Response(JSON.stringify({ 
      status: response.status,
      body: text
    }), {
      status: 200,
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
    });

  } catch (err) {
    return new Response(JSON.stringify({ 
      error: err.message,
      stack: err.stack
    }), {
      status: 200,
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
    });
  }
}