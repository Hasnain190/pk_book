
'use client';

import { Shimmer } from 'react-shimmer-loader';

export default function ClientShimmer() {
  return (
    <div className='ml-2'>

    <Shimmer width={200} height={20}>
      <p>Loading...</p>
    </Shimmer>
    </div>
  );
}

