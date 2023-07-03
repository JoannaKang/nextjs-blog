import { getMainPosts } from "@/service/posts";

import ContentPage from "@/components/contentSection/contentSection";

export default async function Page() {
  const posts = await getMainPosts();
  return <ContentPage posts={posts} />;
}
