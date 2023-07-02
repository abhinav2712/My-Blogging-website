import React, {useState, useEffect} from 'react';
import moment from 'moment'
import Link from 'next/link';
import { getRecentPosts,getSimilarPosts } from '../services';

const PostWidget = ({categories,slug}) => {
  const [relatedPosts,setRelatedPosts] = useState([]);

  useEffect(()=>{
    if(slug){
      getSimilarPosts(categories,slug)
      .then((result)=> setRelatedPosts(result))
    } else{
      getRecentPosts()
      .then((result)=> setRelatedPosts(result))
   
    }

  },[slug])
  console.log(relatedPosts)
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
     <h3 className="text-xl mb-8 font-semibold border-b pb-4">
       {slug ? 'Related Posts': "Recent posts"} 
     </h3>
     {relatedPosts.map((post)=>(
       <div key={post.title} className="flex items-center w-full mb-4 ">
       <div className="w-17 flex-none">
         <img 
         alt={post.title}
         height="150px"
         width="150px"
         className="align-middle rounded-sm drop-shadow-lg " 
         src={post.featured_Image.url}
         />
         </div>
         <div className="flex-grow ml-4 hover:text-[#00d9ff]">
         <p className="text-gray-500 font-xs ">
           {moment(post.createdAt).format('MMM DD, YYYY')}
         </p>
         <Link href={`/post/${post.slug}`} key={post.title} className="text-md">
           <b>{post.title}</b>
         </Link>
         </div>
       </div>
     ))}
    </div>
  )
}

export default PostWidget
