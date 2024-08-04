import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

import { revalidatePath } from "next/cache";



export async function GET(request: Request) {
   
  try {
    
    
    
    const posts = await prisma.post.findMany({
      orderBy: {
      uploadedAt: "desc",
    },
    });
    
   

    return NextResponse.json( posts , { status: 200 });
  } catch (error) {
    
    return NextResponse.json({
      success: false,
      error: "Failed to load posts",
    });
  }
}
