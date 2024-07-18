import { dbDelete } from "@/server/helpers/dbDelete";

import {User } from "@/server/Models/model-definitions";
import { NextRequest, NextResponse } from "next/server";
const jwt = require("jsonwebtoken")

export const DELETE = async (req: NextRequest) => {
    try {
        const data = await req.json();
        if (data) {
            try {
                // deleting data from users table
                const deleted_user = await dbDelete(User, { id: data.user.id })

                return NextResponse.json({ deleted_user }, { status: 200 });

            } catch (error: any) {
                return NextResponse.json({ message: "Error occured during deletion from database!" }, { status: 500 });
            }
        } else {
            return NextResponse.json({ message: "No user id!" }, { status: 404 });
        }
    } catch (error: any) {
        return NextResponse.json({ message: "Error occurred during user id parsing" })
    }

}