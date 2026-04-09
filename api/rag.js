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

  const TIBOT_SECRET = process.env.TIBOT_SECRET ?? "";
  const ASKNIELS_URL = process.env.ASKNIELS_URL ?? "";

  const response = await fetch(
    `${ASKNIELS_URL}/make-server-1cb90903/tibot-search`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-tibot-secret": TIBOT_SECRET,
      },
      body: JSON.stringify({ query }),
    }
  );

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}