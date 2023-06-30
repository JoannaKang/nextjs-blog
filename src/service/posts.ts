import path from "path";
import { promises as fs } from "fs";

export interface Post {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
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
  console.log("💡", post);
  return post;
}
