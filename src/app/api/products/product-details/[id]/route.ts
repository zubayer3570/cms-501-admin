import { Product, ProductDetails } from "@/server/Models/model-definitions"
import getDBConnection from "@/server/db-connection/dbConnection"
import { NextRequest, NextResponse } from "next/server"
import { QueryTypes } from "sequelize"

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
    try {
        const product = await Product.findOne({
            where: {
                product_id: params.id
            },
            include: {
                model: ProductDetails
            }
        })
        return NextResponse.json(product)
    } catch (error: any) {
        return NextResponse.json({ message: error.message })
    }
}