"use client";
import { useEffect, useState } from "react";

import ContentCards from "@/components/contentCard/contentCard";
import { Post } from "../../service/posts";

import styles from "./contentSection.module.css";

interface Props {
  posts: Post[];
}

export default function ContentPage({ posts }: Props) {
  const items = posts.map((post) => post.category);
  //@ts-ignore
  const getCategory = (items) => ["ALL", ...new Set(items)];

  const [filteredPost, setFilteredPost] = useState<Post[]>([]);

  useEffect(() => {
    setFilteredPost(posts);
  }, []);

  const handleChange = (text: string | null) => {
    if (text === "ALL") {
      setFilteredPost(posts);
    } else {
      const filtered = posts.filter(
        (post) => post.category.toUpperCase() === text
      );
      setFilteredPost(filtered);
    }
  };

  return (
    <>
      <h1>Categories</h1>
      <div className={styles.category}>
        {getCategory(items).map((option, index) => (
          <div
            key={index}
            className={styles.categorySection}
            onClick={(e) => {
              const clickedText = (e.target as HTMLElement).textContent;
              handleChange(clickedText);
            }}
          >
            {option.toUpperCase()}
          </div>
        ))}
      </div>

      {filteredPost.length ? (
        filteredPost.map((post, index) => (
          <ContentCards key={index} {...post} />
        ))
      ) : (
        <h1>loading...</h1>
      )}
    </>
  );
}
