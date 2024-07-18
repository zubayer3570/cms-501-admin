import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
    const body = req.json();
    console.log(body)
}