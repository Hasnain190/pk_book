import React from "react";
import Photo from "./Photo";
import Comment from "./Comment";
import Like from "./Like";

export default function Post() {
  return (
    <div>
      <h1>Post</h1>
      <Photo />
      <Like />
      <Comment />
    </div>
  );
}
