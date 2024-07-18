import { Product, ProductDetails, User } from "@/server/Models/model-definitions"
import getDBConnection from "@/server/db-connection/dbConnection"
import { NextRequest, NextResponse } from "next/server"
import { Op, QueryTypes } from "sequelize"

export const POST = async (req: NextRequest) => {
    const data = await req.json()
    const keyword = data?.keyword
    try {
        const users = await User.findAll({
            where: {
                [Op.or]: [
                    { id: { [Op.like]: `%${keyword}%` } },
                    { name: { [Op.like]: `%${keyword}%` } },
                    { first_name: { [Op.like]: `%${keyword}%` } },
                    { business_name: { [Op.like]: `%${keyword}%` } },
                    { email: { [Op.like]: `%${keyword}%` } },
                    { address: { [Op.like]: `%${keyword}%` } },
                    { phone: { [Op.like]: `%${keyword}%` } },
                    { nationality: { [Op.like]: `%${keyword}%` } },
                    { city: { [Op.like]: `%${keyword}%` } },
                    { state: { [Op.like]: `%${keyword}%` } },
                    { country: { [Op.like]: `%${keyword}%` } },
                    { status: { [Op.like]: `%${keyword}%` } },
                    { last_name: { [Op.like]: `%${keyword}%` } },
                ]
            },
        })
        return NextResponse.json({ users })
    } catch (error: any) {
        return NextResponse.json({ message: error.message })
    }
}