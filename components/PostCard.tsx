/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from 'next/image'
import moment from 'moment'


const PostCard = ({ post }) => {
  console.log(post);
  return (
    //     <div className="bg-blue-900 shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 sm:p-8 card-animation flex flex-col">
    //   <div className="relative overflow-hidden shadow-md pb-80 mb-6">
    //     <img src={post.featuredImage.url} alt="" className="object-top absolute h-80 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
    //   </div>
    //   <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 dark:hover:text-pink-400 text-3xl font-semibold text-gray-100">
    //     <Link href={`/post/${post.slug}`}>{post.title}</Link>
    //   </h1>
    //   <div className="flex flex-col lg:flex-row text-center items-center justify-center mb-8 w-full">
    //     <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
    //       <img
    //         alt={post.author.name}
    //         height="30px"
    //         width="30px"
    //         className="align-middle rounded-full"
    //         src={post.author.photo.url}
    //       />
    //       <p className="inline align-middle text-gray-300 ml-2 font-medium text-lg">{post.author.name}</p>
    //     </div>
    //     <div className="font-medium text-gray-300">
    //       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    //       </svg>
    //       <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
    //     </div>
    //   </div>
    //   <p className="text-center text-lg text-gray-300 font-normal px-4 lg:px-20 mb-8 flex-grow">
    //     {post.excerpt}
    //   </p>
    //   <div className="text-center mb-8">
    //     <Link href={`/post/${post.slug}`}>
    //       <p className="inline-block bg-pink-500 text-gray-100 font-semibold px-8 py-4 rounded-lg hover:bg-pink-600 transition duration-500">
    //         Read More
    //       </p>
    //     </Link>
    //   </div>
    // </div>
    <div className="flex flex-col text-white bg-white ml-[10vw] mr-[10vw] border border-white rounded-lg pb-8 hover:scale-105 ease-in-out gap-1 transition duration-450">
      <div className="flex flex-col rounded p-6">
        <img src={post.featuredImage.url} alt="" className="h-72 w-full" />
      </div>
      <div className="text-center text-black text font-semibold text-2xl">
        {post.title}
      </div>
      <div className="text-center flex flex-row gap-4 text-black justify-center pt-4">
        <img
          alt={post.author.name}
          className="rounded-full w-10 h-10"
          src={post.author.photo.url}
        />
        <p>{post.author.name}</p>
        <div className="font-medium text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
        </div>
      </div>
      <div>
        <p className="text-center text-lg text-gray-300 font-normal px-4 lg:px-20 mb-8 flex-grow mt-4">
          {post.excerpt}
        </p>
      </div>
      <div className="items-center justify-center">
         <Link href={`/post/${post.slug}`} className="flex justify-center">
           <p className="inline-block bg-pink-500 text-gray-100 font-semibold px-8 py-4 rounded-[2vw] hover:bg-pink-600 transition duration-500">
             Read More
           </p>
         </Link>
      </div>
    </div>



  )
}

export default PostCard
