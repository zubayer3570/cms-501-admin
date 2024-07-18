
import getDBConnection from "@/server/db-connection/dbConnection";
import { NextRequest, NextResponse } from "next/server"
import { sql, Op } from '@sequelize/core'
import { Product, ProductCategory } from "@/server/Models/model-definitions";
import { QueryTypes } from "sequelize";

export const GET = async (req: NextRequest, { params }: { params: { slug: string } }) => {
    const productsPerPage = 12
    try {
        // const q = `select * from core_products where 
        //             category = (select category_name from core_products_categories where category_id = ${params.slug});`
        // const products = await getDBConnection().query(q, {type: QueryTypes.SELECT})
        // const products = await ProductCategory.findAll({
        //     where: {
        //         category_id: 1
        //     },
        //     include: {
        //         model: Product
        //     }
        // })
        const category: any = await ProductCategory.findOne({
            where: {
                category_id: params.slug
            },
            limit: productsPerPage,
            include: {
                model: Product,
            }
        })
        const products = category?.core_products
        return NextResponse.json({ products, totalNumberOfProducts: products?.length, productsPerPage })
    } catch (error: any) {
        return NextResponse.json({ message: error.message + " dfsdhfjshdfasjkh" })
    }
}