import { FC } from "react";
import ReactMarkDown from "react-markdown";
import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

type Props = {
  post: {
    title: string;
    image: string;
    excerpt: string;
    slug: string;
    date: string;
    isFeatured: boolean;
    content: string;
  };
};

const PostContent: FC<Props> = (props) => {
  const { post } = props;
  const { title, slug, image, content } = post;
  const imagePath = `/image/posts/${slug}/${image}`;

  const customRenderers = {
    p(paragraph: any) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/image/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return paragraph.children;
    },

    code(code: any) {
      const { className, children } = code;
      const language = className.split("-")[1];

      return (
        <SyntaxHighlighter style={atomDark} language={language}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkDown components={customRenderers}>{content}</ReactMarkDown>
    </article>
  );
};

export default PostContent;
