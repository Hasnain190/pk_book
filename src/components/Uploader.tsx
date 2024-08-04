"use client";
import { CldUploadWidget } from "next-cloudinary";
import { useRouter } from "next/navigation";
import CameraIcon from "../assets/camera_2668896.png";
import Image from "next/image";

import { useToast } from "@/components/ui/use-toast";

import { TPost } from "@/Types";
import { startTransition, useState } from "react";

export default function Uploader({
  onPendingChange,
}: {
  onPendingChange: (pendingState: boolean) => void;
}) {
  const { toast } = useToast();

  const router = useRouter();
  const onUploadSuccessHandler = async (result: any) => {
    onPendingChange(true);
    try {
      const res = await fetch("api/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ result: result }),
        cache: "no-cache",
      });

      startTransition(() => {
        router.refresh();
      });
       toast({
          title: "Image uploaded Successfully",
          description: "Wait while we load that image",
        })


      onPendingChange(false);
    } catch (error) {
      console.log("Error uploading image:", error);
    }
  };
  const onUploadErrorHandler = () => {
    toast({
      title: "Error uploading image",
      description: "Please try again",
    })
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
            onClick={() => open()}
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
