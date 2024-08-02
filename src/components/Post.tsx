import React from "react";
import Photo from "./Photo";
import Comment from "./Comment";

import { TPost } from "@/Types";
import prisma from "../../lib/prisma";

export default async function Post(props: TPost) {
  let photo = props.photo;
  let likeCount = props.likes;
  let postId = props.id;

  let comments = await prisma.comment.findMany({
    where: {
      postId,
    },
  });

  return (
    <div className="border mb-4 pb-4 rounded-sm">
      <Photo photo={photo} />

      <Comment likeCount={likeCount} comments={comments} postId={postId} />
    </div>
  );
}
