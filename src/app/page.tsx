import Post from "@/components/Post";
import Uploader from "@/components/Uploader";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home</h1>
      <Post /> 
      <Uploader />
    </main>
  );
}
