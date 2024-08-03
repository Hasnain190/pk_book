"use client";
import dynamic from "next/dynamic";

const ShimmerWrapper = dynamic(
  () => import("./ShimmerWrapper"),
  { ssr: false }
);

const ClientShimmer = () => {
  return (
    <div className="ml-2">
      <ShimmerWrapper width={200} height={20}>
        <p>Loading...</p>
      </ShimmerWrapper>
    </div>
  );
};

export default ClientShimmer;
