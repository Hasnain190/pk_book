import Post from "@/components/Post";
import Uploader from "@/components/Uploader";
import prisma from '../../lib/prisma'



export default async function Home() {

  const getPosts = await prisma.post.findMany();
  const posts = getPosts.map((post) => {
    return {
      id: post.id,
      image: post.image,
      likes: post.likes,
      
    }
  })



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home</h1>
      <Uploader />
      {posts.length >0 ? posts.map((post, index) => 
      
      <Post id={post.id} key={index} photo={post.image} likes={post.likes}  />) : <p>No posts</p>
      }
     
    </main>
  );
}
