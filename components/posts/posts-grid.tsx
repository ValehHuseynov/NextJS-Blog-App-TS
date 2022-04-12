import { FC } from "react";
import PostItem from "./post-item";
import classes from "./posts-grid.module.css";

type Props = {
  posts: {
    title: string;
    image: string;
    excerpt: string;
    slug: string;
    date: string;
  }[];
};

const PostsGrid: FC<Props> = (props) => {
  const { posts } = props;
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
