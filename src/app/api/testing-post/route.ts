import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) =>{
    const data= await req.json()
    return NextResponse.json({message: "this is a dummy message"}, {status: 200});
}