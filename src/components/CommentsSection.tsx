import React, { useState } from "react";
import CommentIcon from "../assets/speech-bubble_10904397.png";
import Image from "next/image";
import Like from "./Like";
import { TComment } from "@/Types";
import SendIcon from "../assets/send-button_16955203.png";
import { useRouter } from "next/navigation";
export default function CommentsSection({
  comments: initialComments,
  postId
}: {
  comments: TComment[];
 postId: number 
}) {
 
  const [comments, setComments] = useState(initialComments);
  
 

  
  return (
    <div className="w-full">
      
      {/* comments */}
      <div className="flex flex-col">
        {comments && comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index}>
              {" "}
              <span className="ml-2">{comment.content}</span>
            </div>
          ))
        ) : (
          <p>No comments</p>
        )}
      </div>
    </div>
  );
}
