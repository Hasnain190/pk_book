import React from "react";
import Photo from "./Photo";
import Comment from "./Comment";

import { TPost } from "@/Types";
import prisma from "../../lib/prisma";

export default async function Post(props: TPost) {
  let photo = props.photo;
  let likeCount = props.likes;
  let postId = props.id;
  let uploadedAt = props.uploadedAt;

  let comments = await prisma.comment.findMany({
    where: {
      postId,
    },
  });
  
  let postingDate =  uploadedAt?.toString() || 'Date not mentioned';

  return (
    <div className="border mb-4 pb-4 rounded-sm bg-white w-[500px] flex  flex-col  content-center ">
      <div className=" m-2 flex">
        <div className="rounded-full bg-[#f3f3f3] w-[40px] h-[40px]"></div>
        <div className="flex flex-col">
          <div className="ml-2">You posted a photo </div>
          <div className="ml-2 text-sm text-gray-600">{postingDate}</div>
        </div>
      </div>
      <Photo photo={photo} />
      <Comment likeCount={likeCount} comments={comments} postId={postId} />
    </div>
  );
}
