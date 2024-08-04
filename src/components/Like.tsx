"use client";

import React, { useState } from "react";
import LikeIcon from "../assets/hand_14873865.png";
import Image from "next/image";
import incrementLike from "@/app/actions/like";
export default function Like({
  likeCount: initialLikeCount,
  postId,
}: {
  likeCount: number;
  postId: number;
}) {
  const [likeCount, setLikeCount] = useState(initialLikeCount);

  const likeButtonClickHandler = async () => {
    setLikeCount(likeCount + 1);

    await incrementLike({ likeCount: likeCount + 1, postId: postId });

   
    
  };

  return (
    <div className="flex items-center">
      <button onClick={likeButtonClickHandler}>
        <Image
          className="p-1 m-1"
          src={LikeIcon}
          alt="Like"
          width="30"
          height="30"
        />
      </button>

      {likeCount || 0}
    </div>
  );
}
