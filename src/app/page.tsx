import { CardPost, CardPostProps } from "@/components/CardPost";
import logger from "@/logger";
import Link from "next/link";
import styles from "./page.module.css";

type getAllPostsResponse = {
  data: CardPostProps[];
  prev: number;
  next: number;
};

const getAllPosts = async (page: number = 1): Promise<getAllPostsResponse> => {
  const response = await fetch(
    `http://localhost:3042/posts?_page=${page}&_per_page=6`
  );

  if (!response?.ok) {
    logger.error("Houve um problema ao tentar encontrar os posts");

    return { data: [], prev: 0, next: 0 };
  }

  logger.info("Posts obtidos com sucesso!");

  return response.json();
};

interface HomeProps {
  searchParams: { page?: number };
}

export default async function Home({ searchParams }: HomeProps) {
  const currentPage = searchParams?.page || 1;
  const { data: posts, prev, next } = await getAllPosts(currentPage);

  return (
    <main className={styles.grid}>
      {posts.map((post) => (
        <CardPost key={post.id} post={post} />
      ))}
      <div className={styles.links}>
        {prev && <Link href={`/?page=${prev}`}>Página anterior</Link>}
        {next && <Link href={`/?page=${next}`}>Próxima página</Link>}
      </div>
    </main>
  );
}
