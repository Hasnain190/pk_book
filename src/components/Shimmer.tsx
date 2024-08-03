import dynamic from 'next/dynamic';

const Shimmer = dynamic(
  () => import('react-shimmer-loader').then((mod) => mod.Shimmer),
  { ssr: false }
);

