import { dbDelete } from "@/server/helpers/dbDelete";
import { dbFind } from "@/server/helpers/dbFind";
import { dbInsert } from "@/server/helpers/dbInsert";
import { dbUpdate } from "@/server/helpers/dbUpdate";
import { Product, ProductDetails, User } from "@/server/Models/model-definitions";
import { NextRequest, NextResponse } from "next/server";
const jwt = require("jsonwebtoken")

export const PUT = async (req: NextRequest) => {
    try {
        const data = await req.json();
        if (data) {
            try {
                // updating data of core_products table
                const updatedProduct = await dbUpdate(Product, data.product)
                
                // updating data of core_product_details table
                const updatedProductDetails = await dbUpdate(Product, data.productDetails)

                return NextResponse.json({ product: {...updatedProduct, product_details: updatedProductDetails} }, { status: 200 });

            } catch (error: any) {
                console.log(error)
                return NextResponse.json({ message: "Error occured during updating database!" }, { status: 500 });
            }
        } else {
            return NextResponse.json({ message: "No product data!" }, { status: 404 });
        }
    } catch (error: any) {
        console.log(error)
        return NextResponse.json({ message: "Error occurred during product data parsing!" })
    }

}