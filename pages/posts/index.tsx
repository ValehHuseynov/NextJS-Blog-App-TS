import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { Fragment } from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

interface IPosts {
  posts: {
    title: string;
    image: string;
    excerpt: string;
    slug: string;
    date: string;
    isFeatured: boolean;
    content: string;
  }[];
}

const Posts: NextPage<IPosts> = (props) => {
  const { posts } = props;
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="This is All Post" />
      </Head>

      <AllPosts posts={posts} />
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },

    revalidate: 600,
  };
};

export default Posts;
