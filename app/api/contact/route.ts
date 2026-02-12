import { NextResponse } from "next/server";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const subject = typeof body.subject === "string" ? body.subject.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    if (message.length < 20) {
      return NextResponse.json({ error: "Message must be at least 20 characters." }, { status: 400 });
    }

    if (!subject) {
      return NextResponse.json({ error: "Missing subject." }, { status: 400 });
    }

    return NextResponse.json({
      message: "Message received. We will review it and respond as soon as possible.",
      data: { name, email, subject },
    });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
