'use client'

import { useState } from "react"
import UploadingShimmer from "./UploadingShimmer"
import Uploader from "./Uploader"





export default function UploaderAndShimmer() {
    const [isPending, setIsPending] = useState(false)

   const onPendingChange = (pendingState:boolean) => {
    setIsPending(pendingState)
   }
  return (
    <div>
        <Uploader onPendingChange={onPendingChange} />
        <UploadingShimmer isPending={isPending} />
    </div>
  )
}
