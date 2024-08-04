// components/PostManager.tsx



import Post from './Post';
import { TPost } from '@/Types';

export default function PostList({ initialPosts }: { initialPosts: TPost[] }) {

 

  return (
    <>
     
      {initialPosts.length > 0 ? initialPosts.map((post, index) => (
        <Post
          key={post.id || index}
          id={post.id}
          image={post.image}
          likes={post.likes}
          uploadedAt={post.uploadedAt}
        />
      )):
        <p>No posts</p>}
    </>
  );
}