import { AdminUser } from "@/server/Models/model-definitions";
import { dbInsert } from "@/server/helpers/dbInsert";
const jwt = require("jsonwebtoken")
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const data = await req.json();
    const user = await dbInsert(AdminUser, {...data, full_name: data.name, last_login: Date.now().toString(), })
    console.log(user)
    if (user?.dataValues) {
        const token = await jwt.sign(user.dataValues, process.env.KEY, { expiresIn: "2d" })
        if (token) {
            return NextResponse.json(token);
        } else {
            return NextResponse.json({ message: "An error occured!" });
        }
    } else {
        return NextResponse.json({ message: "Something went wrong!" })
    }
}