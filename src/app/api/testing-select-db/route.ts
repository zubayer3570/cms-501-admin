import { NextResponse } from "next/server"
import getDBConnection from "@/server/db-connection/dbConnection"
import { User } from "@/server/Models/model-definitions";

const { Sequelize } = require("sequelize")

export const GET = async () => {
    const sequelize = getDBConnection();

    try {
        const res = await sequelize.authenticate();
        const users = await User.findAll();
        users.every(user => console.log(user))
        return NextResponse.json(users);
        
        
    } catch (error) {
        console.log(error)
        console.log("unable to connect")
    }

    return NextResponse.json({ error: "something went wrong!" });
}