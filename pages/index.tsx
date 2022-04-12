import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { Fragment } from "react";
import Hero from "../components/home/hero";
import FeaturedPosts from "../components/home/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

interface IHome {
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

const Home: NextPage<IHome> = (props) => {
  const { posts } = props;
  return (
    <Fragment>
      <Head>
        <title>VH Blogs</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const featuredPost = getFeaturedPosts();

  return {
    props: {
      posts: featuredPost,
    },
    revalidate: 600,
  };
};

export default Home;
