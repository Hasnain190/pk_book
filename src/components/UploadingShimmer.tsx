
'use client';
import dynamic from 'next/dynamic';

const ShimmerWrapper = dynamic(
  ()=> import('./ShimmerWrapper'),
  {ssr: false}
)

export default function UploadingShimmer(
    {isPending=false}:

    {isPending:boolean}

) {
  return (
    <>
    {isPending ?

       <ShimmerWrapper width={500} height={400} >
        <p>Loading...</p>
        </ShimmerWrapper>
        :
        <></>
    }
    </>
  );
}

