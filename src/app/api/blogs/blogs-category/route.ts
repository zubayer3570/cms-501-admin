import { Blog_Category } from "@/server/Models/Blog_Category";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const allBlogs = await Blog_Category.findAll() || {};
        return NextResponse.json(allBlogs)
    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: "something went wrong!" })
    }
}