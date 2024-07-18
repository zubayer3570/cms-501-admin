import { dbFind } from "@/server/helpers/dbFind";
import { dbUpdate } from "@/server/helpers/dbUpdate";
import { User } from "@/server/Models/model-definitions";
import { NextRequest, NextResponse } from "next/server";
const jwt = require("jsonwebtoken")

export const POST = async (req: NextRequest) => {
    const data = await req.json();

    const response = await dbFind(User, { email: data.email })
    const userData = response?.dataValues
    if (userData) {
        if (response.dataValues.password == data.password) {
            await dbUpdate(User, { last_login: new Date().toISOString() }, { id: userData.id })
            const token = await jwt.sign(response.dataValues, process.env.KEY, { expiresIn: "2d" })
            if (token) {
                return NextResponse.json(token, { status: 200 });
            } else {
                return NextResponse.json({ message: "an error occured!" }, { status: 500 });
            }
        } else {
            return NextResponse.json({ message: "Password Incorrect!" }, { status: 404 })
        }
    } else {
        return NextResponse.json({ status: 404, message: "User does not exists!" }, { status: 404 })
    }
}