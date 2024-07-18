import { NextRequest, NextResponse } from "next/server";
const jwt = require("jsonwebtoken")

export const POST = async (req: NextRequest) => {
    const data = await req.json();
    return NextResponse.json({ message: "successful" })
}