import Image from "next/image";
import Link from "next/link";
import styles from "./contentCard.module.css";

import { Post } from "@/service/posts";

export default function ContentCards(props: Post) {
  return (
    <Link href={`/posts/${props.path}`}>
      <div className={styles.contentCard}>
        <Image
          src={`/images/posts/${props.path}.png`}
          alt="profile"
          width={300}
          height={200}
        />
        <h3>{props.title}</h3>
        <h4>{props.description}</h4>
        <h5>{props.date}</h5>
        <div className={styles.category}>{props.category.toUpperCase()}</div>
      </div>
    </Link>
  );
}
