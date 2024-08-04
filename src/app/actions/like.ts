"use server"
import prisma from "../../../lib/prisma"

export default async function incrementLike ({likeCount, postId}: {likeCount: number, postId: number}) {

     await prisma.post.update(
        {
            where: {
                id: postId
            },
            data: {
                likes: likeCount
            }
        }
    )
}