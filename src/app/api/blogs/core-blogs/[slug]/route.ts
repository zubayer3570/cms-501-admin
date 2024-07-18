import { Core_Blog } from "@/server/Models/Core_Blog";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: any) => {
    try {
        const blog = await Core_Blog.findOne({ where: { slug: params.slug } });
        return NextResponse.json(blog)
    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: "something went wrong!" })
    }
}