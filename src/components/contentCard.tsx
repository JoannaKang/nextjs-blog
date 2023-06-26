import Image from "next/image";

import { Post } from "@/service/posts";

export default function ContentCards(props: Post) {
  return (
    <div className="w-56 bg-white shadow rounded">
      <Image
        src={`/images/posts/${props.path}.png`}
        alt="profile"
        width={300}
        height={200}
      />
      <h3>{props.title}</h3>
      <h4>{props.description}</h4>
      <h5>{props.date}</h5>
      <div>{props.category.toUpperCase()}</div>
    </div>
  );
}
