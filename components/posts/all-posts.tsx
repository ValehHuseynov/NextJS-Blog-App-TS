import { FC } from "react";
import classes from "./all-posts.module.css";
import PostsGrid from "./posts-grid";

type Props = {
  posts: {
    title: string;
    image: string;
    excerpt: string;
    slug: string;
    date: string;
  }[];
};

const AllPosts: FC<Props> = (props) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
};

export default AllPosts;
