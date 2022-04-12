import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { Fragment } from "react";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostFiles } from "../../lib/posts-util";

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

const PostItem: NextPage<Props> = (props) => {
  const { post } = props;
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = (context) => {
  const slug: any = context.params?.slug;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const postFilenames = getPostFiles();
  const slugs = postFilenames.map((filename) => filename.replace(/\.md$/, ""));
  const pathSlugs = slugs.map((slug) => ({ params: { slug: slug } }));
  return {
    paths: pathSlugs,
    fallback: true,
  };
};

export default PostItem;
