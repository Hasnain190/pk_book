import React from "react";
import LikeIcon from '../assets/hand_14873865.png'
import Image from "next/image";
export default function Like({ likeCount }: { likeCount: number }) {
  return (
    <div className="flex items-center">
      <button>
       <Image className="p-1 m-1" src={LikeIcon} alt='Like' width='30' height='30'/> 
        
         </button>
      

      {likeCount || 0}
    </div>
  );
}
