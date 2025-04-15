import { CardPost, CardPostProps } from "@/components/CardPost";
import logger from "@/logger";
import { remark } from "remark";
import html from "remark-html";
import styles from "./page.module.css";

async function getPostBySlug(slug: string): Promise<CardPostProps | null> {
  if (!slug) {
    logger.error("Slug inválido");
    return null;
  }

  const response = await fetch(`http://localhost:3042/posts?slug=${slug}`);

  if (!response?.ok) {
    logger.error("Houve um problema ao tentar encontrar os posts");

    return null;
  }

  logger.info("Post obtido com sucesso!");

  const data: CardPostProps[] = await response.json();

  if (data?.length < 1) return null;

  const post = data[0];

  const processedContent = await remark().use(html).process(post.markdown);

  const contentHtml = processedContent.toString();

  post.markdown = contentHtml;

  return post;
}

interface PagePostProps {
  params: { slug: string };
}

const PagePost = async ({ params }: PagePostProps) => {
  const post = await getPostBySlug(params?.slug);

  return (
    post && (
      <div>
        <CardPost post={post} highlight />
        <h3 className={styles.subtitle}>Código:</h3>
        <div className={styles.code}>
          <div dangerouslySetInnerHTML={{ __html: post?.markdown || "" }} />
        </div>
      </div>
    )
  );
};

export default PagePost;
