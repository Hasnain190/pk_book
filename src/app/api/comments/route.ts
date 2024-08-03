import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { Prisma } from "@prisma/client";
export async function POST(request: Request) {
  try {
    const { content, postId }: { content: string; postId: number } =
      await request.json();

    const comment = await prisma.comment.create({
      data: {
        content,
        post: {
          connect: { id: postId }, // Connect using postId
        },
      },
    });
    return NextResponse.json(comment, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create comment" },
      { status: 500 }
    );
  }
}
