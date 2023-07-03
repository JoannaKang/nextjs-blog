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
  //console.log("💡", getPrevNextLink(params));

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

// async function getPrevNextLink(currentPost: string) {
//   const posts = await getMainPosts();
//   const currentIndex = posts.findIndex((post) => {
//     post.path === currentPost;
//   });
//   console.log("🟡", currentIndex);
//   return {};
// }
