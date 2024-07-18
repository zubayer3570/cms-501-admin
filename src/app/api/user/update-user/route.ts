import { dbUpdate } from "@/server/helpers/dbUpdate";
import { User } from "@/server/Models/model-definitions";
import { NextRequest, NextResponse } from "next/server";
const jwt = require("jsonwebtoken")

export const PUT = async (req: NextRequest) => {
    try {
        const data = await req.json();
        if (data) {
            try {
                // updating data of users table
                const updatedUser = await dbUpdate(User, data.user)

                return NextResponse.json({ user: updatedUser});

            } catch (error: any) {
                return NextResponse.json({ message: "Error occured during updating database!" }, { status: 500 });
            }
        } else {
            return NextResponse.json({ message: "No user data!" }, { status: 404 });
        }
    } catch (error: any) {
        console.log(error)
        return NextResponse.json({ message: "Error occurred during user data parsing!" })
    }

}