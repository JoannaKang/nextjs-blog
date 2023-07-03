import { getPostContents } from "@/service/posts";

import MarkdownSection from "@/components/markdownSection/markdownSection";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostContents(slug);
  return <MarkdownSection post={post} />;
}
