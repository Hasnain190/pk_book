'use client'

import { useState } from "react"
import Uploader from "./Uploader"
import UploadingShimmer from "./UploadingShimmer"





export default function UploaderAndShimmer() {
    const [isPending, setIsPending] = useState(false)

   const handlePendingChange = (pendingState:boolean) => {
    setIsPending(pendingState)
   }
  return (
    <div>
        
        <Uploader  onPendingChange={handlePendingChange}/>
        <UploadingShimmer isPending={isPending} />
    </div>
  )
}
