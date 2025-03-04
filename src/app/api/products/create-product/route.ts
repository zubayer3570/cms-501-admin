import { dbFind } from "@/server/helpers/dbFind";
import { dbInsert } from "@/server/helpers/dbInsert";
import { dbUpdate } from "@/server/helpers/dbUpdate";
import { Product, ProductDetails, User } from "@/server/Models/model-definitions";
import { NextRequest, NextResponse } from "next/server";
const jwt = require("jsonwebtoken")

export const POST = async (req: NextRequest) => {
    try {
        const data = await req.json();
        if (data) {
            // inserting data into core_products table
            const { insertedData: response_product, err } = await dbInsert(Product, data.product)

            if (!err) {
                // inserting data into core_product_details table
                const { insertedData: response_product_details, err } = await dbInsert(ProductDetails, { ...data.product.product_details, product_id: response_product?.dataValues?.id })
                //sending product and product details (as a property of the product object) as response
                const product = { ...response_product?.dataValues, product_details: response_product_details?.dataValues }

                return NextResponse.json({ product }, { status: 200 });
            } else {
                console.log(err)
                return NextResponse.json({ message: "Error occured during database insertion!" }, { status: 500 });
            }
        } else {
            return NextResponse.json({ message: "No product data!" }, { status: 404 });
        }
    } catch (error: any) {
        console.log(error)
        return NextResponse.json({ message: "Error occurred during data parsing" })
    }

}