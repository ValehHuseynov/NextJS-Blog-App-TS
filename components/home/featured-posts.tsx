import { FC } from "react";
import classes from "./featured-posts.module.css";
import PostsGrid from "../posts/posts-grid";

type Props = {
  posts: {
    title: string;
    image: string;
    excerpt: string;
    slug: string;
    date: string;
  }[];
};

const FeaturedPosts: FC<Props> = (props) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Psots</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
};

export default FeaturedPosts;
