import { CardPost, CardPostProps } from "@/components/CardPost";

const getAllPosts = async (): Promise<CardPostProps[]> => {
  const response = await fetch("http://localhost:3042/posts");
  if (!response?.ok)
    console.log("Houve um problema ao tentar encontrar os posts");

  return response.json();
};

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main>
      {posts?.map((post, i) => (
        <CardPost key={i} post={post} />
      ))}
    </main>
  );
}
