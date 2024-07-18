
import getDBConnection from "@/server/db-connection/dbConnection";
import { NextRequest, NextResponse } from "next/server"
import { sql, Op } from '@sequelize/core'
import { Product, ProductCategory } from "@/server/Models/model-definitions";
import { QueryTypes } from "sequelize";

export const GET = async (req: NextRequest, { params }: any) => {
    const pageNumber = params.pageNumber - 1
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
            include: {
                model: Product,

                // limit: productsPerPage,
                // // @ts-ignore-next-line
                // offset: pageNumber * productsPerPage
            }
        })
        const products = category?.core_products.slice(pageNumber * productsPerPage, pageNumber * productsPerPage + productsPerPage)
        return NextResponse.json({ products, totalNumberOfProducts: category?.core_products.length, productsPerPage })
    } catch (error: any) {
        return NextResponse.json({ message: error.message + " dfsdhfjshdfasjkh" })
    }
}