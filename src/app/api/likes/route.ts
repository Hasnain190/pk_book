import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function PATCH(request:Request){
    try {
        const {likeCount, postId} = await request.json();
        console.log("likeCount",likeCount);

        const updatedLikes = await prisma.post.update(
            {
                where: {
                    id: postId
                },
                data: {
                    likes: likeCount
                }
            }
        )
            
        
        return NextResponse.json({ success: true, updatedLikes }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error });
    }




}