import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    const cleanedData = Object.fromEntries(
  Object.entries(data).filter(([, value]) => value !== '' && value !== null && value !== undefined)
);



    if (!data.email || !data.fullname || !data.mobile) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const response = await fetch("https://www.staging.sinarmasland.com/api/cpi/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cleanedData),
    });

    // Log semua header respons dari API eksternal
    console.log("Response Headers:");
    response.headers.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    const contentType = response.headers.get("content-type");
    let result;

    if (contentType && contentType.includes("application/json")) {
      result = await response.json();
    } else {
      result = await response.text(); // fallback jika bukan JSON
    }

    if (!response.ok) {
      console.error("Error from external API:", result);
      return NextResponse.json({ error: result }, { status: response.status });
    }

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
