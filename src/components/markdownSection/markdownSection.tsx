"use client";
import ReactMarkdown from "react-markdown";
import { useEffect } from "react";
//import { Prism } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Prism from "prismjs";

require("prismjs/components/prism-javascript");

require("prismjs/components/prism-css");

require("prismjs/components/prism-jsx");

interface Prop {
  post: any;
}

export default function MarkdownSection({ post }: Prop) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return <ReactMarkdown children={post} />;
}
