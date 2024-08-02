import { NextResponse } from "next/server";

export async function PATCH(request:Request){
    const {likeCount, postId} = await request.json();


}