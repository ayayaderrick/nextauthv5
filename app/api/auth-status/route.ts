import { auth } from "@/auth";
import { NextResponse } from "next/server";

export const runtime = "node";

export async function GET() {
  const session = await auth();
  return NextResponse.json({ isAuthenticated: !!session });
}
