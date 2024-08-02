import React from "react";
import Photo from "./Photo";
import Comment from "./Comment";
import Like from "./Like";
import { TPost } from "@/Types";
export default function Post(props:TPost) {
    let photo = props.photo;
    let comments = props.comments;
    let likeCount = props.likes

  return (
    <div className="border mb-4 pb-4 rounded-sm">
      
      <Photo photo = {photo} />
      
      <Comment likeCount={likeCount} comments={comments}/>
    </div>
  );
}
