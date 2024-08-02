import React from 'react'
import cameraIcon from '../assets/camera_2668896.png'
import Image from 'next/image'
export default function Uploader() {
  return (
    <div className='bg-blue-500 text-white m-1 p-2 rounded-lg cursor-pointer fixed bottom-10 left-10'>
        <button className='flex gap-2 items-center'>
            

            <Image src={cameraIcon} alt='Upload your photo' width='30' height='30'/>
            <span>

            Upload your photo
            </span>
            
        </button>
    </div>
  )
}
