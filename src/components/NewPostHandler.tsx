// components/NewPostHandler.tsx
"use client";

import { useEffect, useState } from "react";
import Uploader from "./Uploader";
import Post from "./Post";
import { TPost } from "@/Types";
import Photo from "./Photo";
import { Suspense } from "react";
import UploadingShimmer from "./UploadingShimmer";
export default function NewPostHandler() {
  const [newPost, setNewPost] = useState<TPost>({} as TPost);

  const handleNewPost = (newPost: TPost) => {
    setNewPost(newPost);
  };

  useEffect(() => {
    handleNewPost(newPost);
  }, [newPost]);
  return (
    <>
      <Uploader onNewPost={handleNewPost} />
      {newPost.image ? (
        <div className="border mb-4 pb-4 rounded-sm bg-white w-[500px] flex  flex-col  content-center ">
          <div className=" m-2 flex">
            <div className="rounded-full bg-[#f3f3f3] w-[40px] h-[40px]"></div>
            <div className="flex flex-col">
              <div className="ml-2">You posted a photo </div>
              <div className="ml-2 text-sm text-gray-600">
                {newPost.uploadedAt?.toString()}
              </div>
            </div>
          </div>
          <Suspense fallback={<UploadingShimmer />}>
            <Photo photo={newPost.image} />
          </Suspense>
        </div>
      ) : null}
    </>
  );
}
