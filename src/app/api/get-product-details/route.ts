import { Product } from "@/server/Models/model-definitions"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest) => {
    try {
        const body = await req.json()
        const product = await Product.findOne({ where: { id: body.id } })
        return NextResponse.json(product)
    } catch (error) {
        return NextResponse.json({ message: "an error occured while retriving product!" })
    }
}