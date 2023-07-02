import React from 'react'
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({post}) => {
  
  console.log(post);
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
    <div className="relative overflow-hidden shadow-md pb-80 mb-6">
      <img
      src={post.featured_Image.url}
      alt={post.title}
      className="object-top absolute h-70  w-full object-cover showdow-lg rounded-t-lg lg:rounded-lg"
      />
    </div>
  <h1 className="transition duration-100 text-center mb-8 cursor-pointer  text-black
  hover:text-sky-600 text-3xl font-semibold text-shadow-lg
  ">
    <Link href={`/post/${post.slug}`}>
     {post.title}
    </Link>
  </h1>
  <div className="bloc lg:flex text-center items-center justify-center mb-8 w-full">
    <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
      <img
      alt={post.writer.name}
      height="30px"
      width="30px"
      className="align-middle rounded-full"
      src={post.writer.photo.url} 
      />
      <p className="inline align-middle text-gray-800 ml-2 text-lg">{post.writer.name}</p>
    </div>
    <div className="font-medium text-gray-700">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-[#00d9ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
    </div>
  </div>
  <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
    {post.excerpt}  
  </p>
  <div className="text-center">
    <Link href={`/post/${post.slug}`}>
      <span className=" text-white transition ease-in-out delay-150 rounded-full cursor-pointer bg-[#00d9ff] hover:-translate-y-3 px-8 py-3 hover:scale-110 hover:text-black hover:bg-indigo-200 duration-300">
        <b>Continue Reading</b>
      </span>
    </Link>
  </div>
    </div>
  )
}

export default PostCard
