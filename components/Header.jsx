import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import { getCategories } from '../services';



const Header = () => {

  const [categories,setCategories]=useState([]);
  useEffect(()=>{
     getCategories()
       .then((newCategories)=>setCategories(newCategories))
  },[]);

  return (
    <div className="container mx-auto px-10 mb-8">
    <div className="border-b w-full inline-block border-white-400 py-8 ">
    <div className="md:float-left block">
    <Link href="/">
    <span className="cursor-pointer font-bold text-4xl drop-shadow-lg text-white">
      <span className="text-[#00d9ff]">Abhinav's</span> Exclusive <u className="underline decoration-[#00d9ff]">Blogs</u>
    </span>

    </Link>
    </div>
    <div className="hidden md:float-left md:contents">
        {categories.map((category)=>(
            <Link key ={category.slug} href={`/category/${category.slug}`}>
                <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold hover:text-[#00fffb] cursor-pointer">
                {category.name}                
                </span>
            </Link>
        ))}
    </div>
    </div>



    </div>
  )
}

export default Header