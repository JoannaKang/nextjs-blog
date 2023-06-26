import Image from "next/image";
import Link from "next/link";
import { getMainPosts } from "@/service/posts";
import ContentCards from "@/components/contentCard";
import styles from "./page.module.css";

export default async function Home() {
  const posts = await getMainPosts();
  const featuerdPosts = posts.filter((posts) => !!posts.featured);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className={styles.section}>
        <Image
          src="/images/profile.JPG"
          alt="profile"
          width={100}
          height={100}
          className={styles.image}
        />
        <h1>I'm Joanna👋🏻</h1>
        <h3>Software Engineer @Vodafone📱</h3>
        <h3>Based in London🇬🇧</h3>
        <Link href="/contact" className={styles.button}>
          <button>Contact Me</button>
        </Link>
      </section>
      <section>
        <h2>Featured Posts</h2>
        {featuerdPosts.map((post) => (
          <ContentCards {...post} />
        ))}
      </section>
      <section>
        <h2>You may like</h2>
        {posts.map((post) => (
          <ContentCards {...post} />
        ))}
      </section>
    </main>
  );
}
