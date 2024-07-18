import { Token, User } from "@/server/Models/model-definitions";
import { dbInsert } from "@/server/helpers/dbInsert";
const jwt = require("jsonwebtoken")
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const data = await req.json();

    try {
        const user: any = await dbInsert(User, data)
        const userData = user?.dataValues
        if (userData) {
            const token = await jwt.sign(userData, process.env.KEY, { expiresIn: "2d" })
            if (token) {
                await dbInsert(Token, { user_id: user.id, token })
                return NextResponse.json(token);
            } else {
                return NextResponse.json({ message: "An error occured!" });
            }
        } else {
            return NextResponse.json({ message: "Something went wrong!" })
        }
    } catch (err: any) {
        return NextResponse.json({ message: "An error occured!" }, { status: 500 })
    }
}