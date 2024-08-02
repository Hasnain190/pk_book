import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const posts = [
    {
      image: "https://picsum.photos/200/300",
      likes: 10,
      comments: ["I love it", "It is amazing", "I like it"]
    },
    {
      image: "https://picsum.photos/200/300",
      likes: 23,
      comments: ["I did not know it", "Wow!", "That is dope"]
    },
    {
      image: "https://picsum.photos/200/300",
      likes: 34,
      comments: ["thank you", "I love you", "hmm! really?"]
    },
    {
      image: "https://picsum.photos/200/300",
      likes: 4,
      comments: ["I don't think so", "Maybe you are misled", "You are very right"]
    }
  ];

  for (const post of posts) {
    const createdPost = await prisma.post.create({
      data: {
        image: post.image,
        likes: post.likes,
        comments: {
          create: post.comments.map(content => ({ content }))
        }
      }
    });
    console.log(`Created post with id: ${createdPost.id}`);
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
