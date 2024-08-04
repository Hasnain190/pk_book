"use client";
import { CldUploadWidget } from "next-cloudinary";
import { useRouter } from "next/navigation";
import CameraIcon from "../assets/camera_2668896.png";
import Image from "next/image";

import { TPost } from "@/Types";


export default function Uploader({
 
  onNewPost
}: {
 
  onNewPost: (newPost: TPost) => void;
 
}) {
const router = useRouter()
  const onUploadSuccessHandler = async (result: any) => {
    try {
     
     
      const res = await fetch("api/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ result: result }),
        cache: "no-cache",
      });

      

      
        const newPost = await res.json();
        console.log(newPost)
        onNewPost(newPost);

        router.refresh()
       
      
      

     
     
    } catch (error) {
      console.log("Error uploading image:", error);
    }

    // onValueChange(result?.info?.public_id)
  };
  const onUploadErrorHandler = () => {
    alert("Failed to upload image");
  };

 

  return (
    <CldUploadWidget
      uploadPreset="ujqerd3k"
      options={{
        multiple: false,
        resourceType: "image",
      }}
      onSuccess={onUploadSuccessHandler}
      onError={onUploadErrorHandler}
    >
      {({ open }) => {
        return (
          <button
            className="bg-blue-500 text-white m-1 p-2 rounded-lg cursor-pointer fixed bottom-10 left-1"
            onClick={() => {open(); console.log("button clicked")} }
          >
            <div className="flex gap-2 items-center">
              <Image
                src={CameraIcon}
                alt="Camera Icon"
                width={30}
                height={30}
              />
              Upload an Image
            </div>
          </button>
        );
      }}
    </CldUploadWidget>
  );
}
