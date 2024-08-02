import Post from "@/components/Post";
import Uploader from "@/components/Uploader";
import { GetServerSideProps } from "next";
const posts = [
    {
      id:1,
      image: "https://picsum.photos/200/300",
      likes: 10,
      comments: ["I love it", "It is amazing", "I like it"]
    },
    {
      id:2,
      image: "https://picsum.photos/200/300",
      likes: 23,
      comments: ["I did not know it", "Wow!", "That is dope"]
    },
    {
      id:3,
      image: "https://picsum.photos/200/300",
      likes: 34,
      comments: ["thank you", "I love you", "hmm! really?"]
    },

    {
      id:4,
      image: "https://picsum.photos/200/300",
      likes: 4,
      comments: ["I don't think so", "Maybe you are misled", "You are very right"]
    }
  ];

  


// export const getServerSideProps:GetServerSideProps = async ({params})=>{
//   return {
//     props: {
//       posts
//     }
//   }
// }


export default function Home() {

  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home</h1>
      <Uploader />
      {posts.length >0 ? posts.map((post, index) => 
      
      <Post id={post.id} key={index} photo={post.image} likes={post.likes} comments={post.comments} />) : <p>No posts</p>
      }
     
    </main>
  );
}
