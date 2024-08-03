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
              <p className="ml-2 rounded-lg border  p-2 bg-gray-200 mb-2 max-w-fit">{comment.content}</p>
            
            </div>
          ))
        ) : (
          <div className="ml-2">No comments</div>
        )}
      </div>
    </div>
  );
}
