"use client";
import { CldUploadWidget } from "next-cloudinary";
import { useRouter } from "next/navigation";

export default function Uploader() {
  
let router = useRouter();
  const onUploadSuccessHandler = async (result: any) => {
    
   
    try {
       const res =  await fetch("api/upload", {
          method: "POST",
          headers: {
          "Content-Type": "application/json",
        },
          body: JSON.stringify({ result: result }),
        });

router.refresh();

        
    } catch (error) {
        console.log("Error uploading image:", error)
    }

    

    // onValueChange(result?.info?.public_id)

    // toast({
    //     title: 'Image uploaded successfully',
    //     description: '1 credit was deducted from your account',
    //     duration: 5000,
    //     className: 'success-toast'
    // })
  };
  //  const onUploadErrorHandler = () => {
  //     toast({
  //         title: 'Something went wrong while uploading',
  //         description: 'Please try again',
  //         duration: 5000,
  //         className: 'error-toast'
  //     })
  // }

  return (
    <CldUploadWidget
      uploadPreset="ujqerd3k"
      options={{
        multiple: false,
        resourceType: "image",
      }}
      onSuccess={onUploadSuccessHandler}
      // onError={onUploadErrorHandler}
    >
      {({ open }) => {
        return <button className="bg-blue-500 text-white m-1 p-2 rounded-lg cursor-pointer fixed bottom-10 left-1" onClick={() => open()}>Upload an Image</button>;
      }}
    </CldUploadWidget>
  );
}
