"use client";
import CommentIcon from "../assets/speech-bubble_10904397.png";
import Image from "next/image";
import Like from "./Like";
import { TComment } from "@/Types";
import SendIcon from "../assets/send-button_16955203.png";
import { useRouter } from "next/navigation";
import CommentsSection from "./CommentsSection";
import ClientShimmer from "./ClientShimmer";
import { revalidatePath } from "next/cache";
import { useState, useTransition } from "react";
import { useToast } from "./ui/use-toast";
export default function Comment({
  comments:initialComments,
  likeCount,
  postId,
}: {
  comments: TComment[];
  likeCount: number;
  postId: number;
}) {
  const { toast } = useToast();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<TComment[]>(initialComments);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();


  const submitButtonHandler = async () => {
    if (!comment.trim()) return;
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: comment, postId }),
      });

      if (response.ok) {
        toast({
          title: "Comment submitted",
        })
        const newComment = await response.json();
        setComment("");
        setComments([...comments, newComment]);

      } else {
        console.error("Failed to submit comment");
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
      toast({
        title: "Error submitting comment",
        description: "Please try again",
      })
    } finally {
      setIsSubmitting(false);
    }
  };

  
  // const addComment = async (formData: FormData) => {
  //   'use server'
   

  //   const comment = String(formData.get("comment"));
  //   if (!comment) return;

  //   await prisma?.comment.create({
  //     data: {
  //       content: comment,
  //       post: {
  //         connect: {
  //           id: postId,
  //         },
  //       },
  //     },
  //   });
    
  //   revalidatePath('/')
    
  // };

  return (
    <div className="w-full">
      <div className="flex  justify-evenly w-full">
        {/* like button */}
        <Like likeCount={likeCount} postId={postId} />
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
          <span className=""> {comments?.length || 0}</span>
        </div>
      </div>
      <div>
        <div className="flex" >
          <input
            className="w-full h-10 ps-2 focus:outline-none bottom-2 bg-gray-200 ml-2 border border-gray-300 rounded-lg  "
            type="text"
            name="comment"
            disabled={isSubmitting}
            
            placeholder="Add a comment"
            value={comment}
            onKeyDown={(e) => e.key === "Enter" && submitButtonHandler()}
            onChange={(e) => setComment(e.target.value)}
          />
          <span>
          {isSubmitting ? (
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              ) : (
                <Image src={SendIcon} alt="submit" width="48" height="48" />
              )}
          </span>
        </div>
      </div>

      <CommentsSection postId={postId} comments={comments} />
      {isPending && (
       <ClientShimmer /> 

       )}
    </div>
  );
}
