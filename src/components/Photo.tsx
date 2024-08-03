import React from 'react'
import Image from 'next/image'
export default function Photo({photo}:{photo:string}) {


  return (
   
      
      <Image src={photo as string} alt='photo' width='500' height='300'/>
   
  )
}
