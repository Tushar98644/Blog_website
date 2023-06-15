import { PostCard, PostWidget, categories, Layout } from "@/components";
import Categories from "@/components/Categories";
import Head from "next/head";

const Homepage = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      slug: "lorem-ipsum-dolor-sit-amet",
      excerpt: ""
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet",
      slug: "lorem-ipsum-dolor-sit-amet",
      excerpt: ""
    },
  ];
  return (
      <div className='container mx-auto mb-8'>
        <Head>
          <title>Homepage</title>
        </Head>
        <div className='grid grid-cols-12 gap-4'>
          <div className='lg:col-span-8 col-span-1'>
            {posts.map((post, index) => (
              <PostCard key={post.id} title={post.title} excerpt={post.excerpt} />
            ))}
          </div>
          <div className='lg:col-span-4 col-span-1'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
  );
}

export default Homepage;