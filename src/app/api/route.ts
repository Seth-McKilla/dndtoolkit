import { NextResponse } from "next/server"

import { seed } from "@/lib/seed"

export async function POST() {
  try {
    await seed()
    return NextResponse.json({ data: "Success!" })
  } catch (error: any) {
    return NextResponse.error()
  }
}
