import React from 'react';
import Image from 'next/image';


const  Writer = ({writer}) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
    <div className='absolute left-0 right-0 -top-14'>
      {/* 2:06:36 to change style of photo */}
      <Image
         alt={writer.name}
         unoptimized
         height="100px"
         width="100px"
         className="rounded-full"
         src={writer.photo.url} 
      />
      </div>
      <h3 className='text-white my-4 mx-4  text-xl font-bold'>By {writer.name}</h3>
      <p className='text-white text-lg'>{writer.bio}</p>
      <div>
      <div className="flex items-center space-x-4">
  <a href="https://twitter.com/Abhinav27k" target="_blank" rel="noopener noreferrer">
    <svg xmlns="https://twitter.com/Abhinav27k" width="25" height="25" viewBox="126.444 2.281 589 589" id="twitter"><circle cx="420.944" cy="296.781" r="294.5" fill="#2daae1"></circle><path fill="#fff" d="M609.773 179.634c-13.891 6.164-28.811 10.331-44.498 12.204 16.01-9.587 28.275-24.779 34.066-42.86a154.78 154.78 0 0 1-49.209 18.801c-14.125-15.056-34.267-24.456-56.551-24.456-42.773 0-77.462 34.675-77.462 77.473 0 6.064.683 11.98 1.996 17.66-64.389-3.236-121.474-34.079-159.684-80.945-6.672 11.446-10.491 24.754-10.491 38.953 0 26.875 13.679 50.587 34.464 64.477a77.122 77.122 0 0 1-35.097-9.686v.979c0 37.54 26.701 68.842 62.145 75.961-6.511 1.784-13.344 2.716-20.413 2.716-4.998 0-9.847-.473-14.584-1.364 9.859 30.769 38.471 53.166 72.363 53.799-26.515 20.785-59.925 33.175-96.212 33.175-6.25 0-12.427-.373-18.491-1.104 34.291 21.988 75.006 34.824 118.759 34.824 142.496 0 220.428-118.052 220.428-220.428 0-3.361-.074-6.697-.236-10.021a157.855 157.855 0 0 0 38.707-40.158z"></path></svg>
  </a>
  

 
</div>

      </div>
  </div>

    
  )
}

export default Writer