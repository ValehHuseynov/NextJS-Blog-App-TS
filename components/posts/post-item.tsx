import { FC } from "react";
import classes from "./post-item.module.css";
import Link from "next/link";
import Image from "next/image";

type Props = {
  post: {
    title: string;
    image: string;
    excerpt: string;
    slug: string;
    date: string;
  };
};

const PostItem: FC<Props> = (props) => {
  const { title, image, excerpt, slug, date } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/image/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;
  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
