import React from "react";
import CommentIcon from "../assets/speech-bubble_10904397.png";
import Image from "next/image";
import Like from "./Like";
export default function Comment({
  comments,
  likeCount,
}: {
  comments: string[];
  likeCount: number;
}) {
  return (
    <div className="w-full">
      <div className="flex  justify-evenly w-full">
        {/* like button */}
        <Like likeCount={likeCount} />
        {/* comment button */}
        <div className="flex gap-2 items-center">
          <button className="text-blue-500">
            <Image
              src={CommentIcon}
              alt="Upload your photo"
              width="30"
              height="30"
            />
          </button>
          <span className=""> {comments.length}</span>
        </div>
      </div>

      {/* comments */}
      <div className="flex flex-col">
        {comments.map((comment, index) => (
          <div key={index}>
            {" "}
            <span className="ml-2">{comment}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
