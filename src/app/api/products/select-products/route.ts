import { Product, ProductDetails } from "@/server/Models/model-definitions"
import getDBConnection from "@/server/db-connection/dbConnection"
import { NextRequest, NextResponse } from "next/server"
import { Op, QueryTypes } from "sequelize"

export const POST = async (req: NextRequest) => {
    const data = await req.json()
    const keyword = data?.keyword
    try {
        const product = await Product.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.like]: `%${keyword}%` } },
                    { category: { [Op.like]: `%${keyword}%` } },
                    { description: { [Op.like]: `%${keyword}%` } },
                    // { detail_description: { [Op.like]: `%${keyword}%` } },
                ]
            },
            include: {
                model: ProductDetails,
            }
        })
        return NextResponse.json(product)
    } catch (error: any) {
        return NextResponse.json({ message: error.message })
    }
}