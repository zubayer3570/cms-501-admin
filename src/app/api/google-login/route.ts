import { User } from "@/server/Models/model-definitions";
import { NextRequest, NextResponse } from "next/server";
const jwt = require("jsonwebtoken")


export const POST = async (req: NextRequest) => {
    const data = await req.json();
    const response: any = await User.findOne({ where: { email: data.email, google_login: true } })
    try {
        if (response?.dataValues.id) {
            const token = await jwt.sign(response.dataValues, process.env.KEY, { expiresIn: "2d" })
            return NextResponse.json(token, { status: 200 });
            // return NextResponse.json({...response?.dataValues}, { status: 200 });
        } else {
            const user = await User.create({ ...data, password: null, google_login: true })
            const token = await jwt.sign(user.dataValues, process.env.KEY, { expiresIn: "2d" })
            return NextResponse.json(token, { status: 200 })
            // return NextResponse.json({...user}, { status: 200 })
        }
    } catch (err: any) {
        console.log(err)
        NextResponse.json({message: "An error occured!"}, { status: 200 })
    }
}