import Link from "next/link";

// interface postcardProps {
//     title: string;
//     excerpt: string;
// }

const PostCard = ({post}) => {
  console.log(post);
  return (
    <div>
        <h1>{post.title}</h1>
        <p>{post.excerpt}</p>
    </div>
  )
}

export default PostCard
