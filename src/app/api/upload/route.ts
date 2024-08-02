import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { v2 as cloudinary } from "cloudinary";
import { debug } from "console";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: Request) {
   
  try {
    const {result} =await request.json();
    
    // Save the image url to the database
    const post = await prisma.post.create({
      data: {
        image: result?.info?.secure_url,
        
      },
    });
    console.log(post)

    return NextResponse.json({ success: true, post }, { status: 200 });
  } catch (error) {
    
    return NextResponse.json({
      success: false,
      error: "Failed to upload image",
    });
  }
}
