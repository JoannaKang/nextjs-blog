import Link from "next/link";

import { getPostContents, getPrevNextLinks } from "@/service/posts";

import MarkdownSection from "@/components/markdownSection/markdownSection";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostContents(slug);
  const prevNextPosts = await getPrevNextLinks(slug);

  return (
    <>
      <MarkdownSection post={post} />
      <div>
        <Link href={`/posts/${prevNextPosts.prevContent.path}`}>
          {prevNextPosts.prevContent.title}
        </Link>
      </div>
      <div>
        <Link href={`/posts/${prevNextPosts.nextContent.path}`}>
          {prevNextPosts.nextContent.title}
        </Link>
      </div>
    </>
  );
}
