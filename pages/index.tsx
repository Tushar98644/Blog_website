import { PostCard, PostWidget, categories, Layout } from "@/components";
import Categories from "@/components/Categories";
import { getPosts } from "@/services";
import Head from "next/head";
import { useEffect } from "react";

const Homepage = ({ posts }) => {
  return (
    <div className='container mx-auto mb-8'>
      <Head>
        <title>Homepage</title>
      </Head>
      <div className='grid grid-cols-12 gap-4'>
        <div className='lg:col-span-8 col-span-1'>
          {posts?.map((post) => (
            <PostCard key={post.id} post={post.node} />
          ))}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <PostWidget />
          <Categories name="tushar" />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

export default Homepage;