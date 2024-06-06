import { NextRequest, NextResponse } from "next/server";
import prisma from "@/_db";

export async function GET(req: NextRequest) {
  try {
    const data = await prisma.post.findMany();
    return NextResponse.json({ message: "Success!!", posts: data });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { message: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
