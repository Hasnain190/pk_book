
'use client';

import { Shimmer } from 'react-shimmer-loader';

export default function UploadingShimmer(
    {isPending=false}:

    {isPending:boolean}

) {
  return (
    <>
    {isPending ?

       <Shimmer width={500} height={400} >
        <p>Loading...</p>
        </Shimmer>
        :
        <></>
    }
    </>
  );
}

