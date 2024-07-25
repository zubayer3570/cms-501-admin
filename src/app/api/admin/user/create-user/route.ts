import { dbInsert } from "@/server/helpers/dbInsert";
import { dbUpdate } from "@/server/helpers/dbUpdate";
import { AdminUser, Product, User } from "@/server/Models/model-definitions";
import { NextRequest, NextResponse } from "next/server";
const jwt = require("jsonwebtoken")

export const POST = async (req: NextRequest) => {
    const data = await req.json();

    const { insertedData, err } = await dbInsert(AdminUser, data)

    if (err) {
        return NextResponse.json({ message: err }, { status: 500 })
    } else {
        return NextResponse.json({ insertedData }, { status: 200 })
    }

}