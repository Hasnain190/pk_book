import React from 'react'
import Image from 'next/image'
export default function Photo({photo}:{photo:string}) {


  return (
    <div> 
      
      <Image src={photo as string} alt='' width='200' height='300'/>
    </div>
  )
}
