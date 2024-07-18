import { Product } from "@/server/Models/model-definitions";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: any) => {
    const pageNumber = params.pageNumber - 1
    const productsPerPage = 5
    try {
        const totalNumberOfProducts = await Product.count()
        const products = await Product.findAll({
            offset: pageNumber * productsPerPage,
            limit: productsPerPage
        }) || [];
        return NextResponse.json({products, totalNumberOfProducts, productsPerPage})
    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: "something went wrong!" })
    }
}