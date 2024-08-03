import React, { useState } from "react";

import { TComment } from "@/Types";

export default function CommentsSection({
  comments ,
  postId
}: {
  comments: TComment[];
 postId: number 
}) {
 

  
 

  
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
          <div className="ml-2">No comments</div>
        )}
      </div>
    </div>
  );
}
