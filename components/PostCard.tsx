interface postcardProps {
    title: string;
    excerpt: string;
}

const PostCard = ({title,excerpt}:postcardProps) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>{excerpt}</p>
    </div>
  )
}

export default PostCard
