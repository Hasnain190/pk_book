"use client";

import React, { useState } from "react";
import LikeIcon from "../assets/hand_14873865.png";
import Image from "next/image";
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

    await fetch("/api/likes", {
      method: "PATCH",
      body: JSON.stringify({ likeCount, postId: postId }),
    });
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
