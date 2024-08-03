import { Children } from 'react';
import { Shimmer } from 'react-shimmer-loader'

export default function ClientShimmer({width, height}:{width:number, height:number}) {
    return (
      <Shimmer width={width} height={height}>
       <p>loading...</p>
      </Shimmer>
    );
  }