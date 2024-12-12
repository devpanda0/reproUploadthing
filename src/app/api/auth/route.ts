import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    console.log(process.env)

    return NextResponse.json({ success: true });
}