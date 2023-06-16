/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import moment from "moment";
import { useState, useEffect } from "react";
import { getRecentPosts, getSimilarPosts } from "@/services";

// interface CategoriesProps {
//     categories: string;
//     slug: [string];
// }

const PostWidget = ({ categories, slug }) => {

    const [relatedPosts, setRelatedPosts] = useState([]);
    useEffect(() => {
        if (slug) {
            getSimilarPosts()
                .then((result) => setRelatedPosts(result)

                );
        }
        else {
            getRecentPosts()
                .then((result) => setRelatedPosts(result));
        }
    }, [slug]);

    console.log(relatedPosts);
    return (
        <div className="p-8 flex flex-col bg-white rounded-lg mr-12">
            <div className="pb-4 border-b font-semibold text-xl">
                {slug ? "Related Posts" : "Recent Posts"}
            </div>
            <div className="flex flex-col gap-2">
            </div>
            {relatedPosts?.map((post) => (
  <div key={post.id} className="flex flex-col gap-2">
    <Link href={`/post/${post.slug}`}>
      <a>
        <img src={post.featuredImage.url} alt={post.title} />
        <div>{post.title}</div>
      </a>
    </Link>
  </div>
))}

        </div>
    );

}

export async function getStaticProps() {
    const categories = await getRecentPosts();
    return {
       getRecentPosts,
    };
}

export default PostWidget;
