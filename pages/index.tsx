import { PostCard, PostWidget, categories, Layout } from "@/components";
import Categories from "@/components/Categories";
import { getPosts } from "@/services";
import Head from "next/head";
import { useEffect } from "react";

const Homepage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <div className="flex flex-row w-full p-4 gap-4">
        <div className="flex flex-col flex-1 gap-20">
           {posts?.map((post) => (
            <PostCard key={post.id} post={post.node} />
          ))}  
        </div>
        <div className="flex flex-col flex-none w-1/3 gap-1">
          <PostWidget />
          <Categories name="tushar"/>
        </div>
      </div>
    </>
  );
};


export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

export default Homepage;