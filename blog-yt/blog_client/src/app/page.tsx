import Link from "next/link";
import { getPosts } from "./api/postsApi";
import styles from "@/app/home.module.css";
export default async function Home() {
  const posts = await getPosts();
  console.log(posts);

  return (
    <div className={styles.homeContainer}>
      <h2>Rails & Next.js Blog</h2>
      <Link href="/create-post" className={styles.createButton}>
        Create new Post
      </Link>
      <div>
        {posts.map((post) => (
          <div key={post.id} className={styles.postCard}>
            <Link href={`posts/${post.id}`} className={styles.postCardBox}>
              <h1>タイトル:{post.title}</h1>
            </Link>
            <p>内容:{post.content}</p>
            <button className={styles.editButton}>
            <Link href={`edit-post/${post.id}`} className={styles.postCardBox}>
              <h1>編集</h1>
            </Link>
              </button>
            <button className={styles.deleteButton}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
