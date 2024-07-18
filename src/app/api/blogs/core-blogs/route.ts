import { Core_Blog } from "@/server/Models/Core_Blog";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const allBlogs = await Core_Blog.findAll() || {};
        return NextResponse.json(allBlogs)
    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: "something went wrong!" })
    }
}