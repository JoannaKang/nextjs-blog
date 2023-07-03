import path from "path";
import { promises as fs } from "fs";
import next from "next";

export interface Post {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
}

interface LinksProp {
  prevContent: Post;
  nextContent: Post;
}

export async function getMainPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "public", "data", "posts.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export async function getPostContents(params: string) {
  const filePath = path.join(
    process.cwd(),
    "public",
    "data",
    "posts",
    `${params}.md`
  );
  const post = await fs.readFile(filePath, "utf-8");
  return post;
}

export async function getPrevNextLinks(
  currentPost: string
): Promise<LinksProp> {
  const posts = await getMainPosts();

  const currentIndex = posts.findIndex((post) => post.path === currentPost);
  const prevIndex = currentIndex === 0 ? posts.length - 1 : currentIndex - 1;
  const nextIndex = (currentIndex + 1) % posts.length;
  return {
    prevContent: posts[prevIndex],
    nextContent: posts[nextIndex],
  };
}
