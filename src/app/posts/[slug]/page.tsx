import ReactMarkdown from "react-markdown";

import { getPostContents } from "@/service/posts";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostContents(slug);
  console.log(post);
  return <ReactMarkdown>{post}</ReactMarkdown>;
}
