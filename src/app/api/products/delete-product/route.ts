import { dbDelete } from "@/server/helpers/dbDelete";
import { dbFind } from "@/server/helpers/dbFind";
import { dbInsert } from "@/server/helpers/dbInsert";
import { dbUpdate } from "@/server/helpers/dbUpdate";
import { Product, ProductDetails, User } from "@/server/Models/model-definitions";
import { NextRequest, NextResponse } from "next/server";
const jwt = require("jsonwebtoken")

export const DELETE = async (req: NextRequest) => {
    try {
        const data = await req.json();
        if (data) {
            try {
                const deleted_product_details = await dbDelete(ProductDetails, { product_id: data.id })

                // deleting data from core_products table
                const deleted_products = await dbDelete(Product, { product_id: data.id })

                return NextResponse.json({ deleted_products }, { status: 200 });

            } catch (error: any) {
                console.log(error)
                return NextResponse.json({ message: "Error occured during deletion from database!" }, { status: 500 });
            }
        } else {
            return NextResponse.json({ message: "No product id!" }, { status: 404 });
        }
    } catch (error: any) {
        console.log(error)
        return NextResponse.json({ message: "Error occurred during product id parsing" })
    }

}