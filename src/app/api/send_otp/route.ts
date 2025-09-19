export async function POST(req: Request) {
  const { message, phoneNumber } = await req.json();

  const response = await fetch("https://staging.sinarmasland.com/api/sms/pop", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message, phoneNumber }),
  });

  if (!response.ok) {
    return new Response(JSON.stringify({ error: "Failed to send OTP" }), {
      status: response.status,
    });
  }

  const data = await response.json();
  return Response.json(data);
}
