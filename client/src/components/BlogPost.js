import React, { useEffect, useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { Visit } from '../icons/icons';

//vlog visit button
const VisitButton = () =>{
  return(
    <button className="w-fit px-1 py-0.5 bg-blue-500 text-white rounded-sm">
      <Link to={'/blogpage'} className='flex flex-row text-base font-semibold'>
        Vlog Page <span className='self-end'>
          <Visit/>
        </span>
      </Link>
    </button>
  )
}

function BlogPost({ blogContent = new Array([]), blogImg, blogKey, blogTitle }) {
  const [showBlog, setShowBlog] = useState(false);
  const [defBlog, setDefBlog] = useState('');
  const [even,isEven] = useState(false);

  //size of the str which is shown side of the blog image
  const bufferSize = 550;

  useEffect(() => {
    //paragraph which is shown as intro of a blog
    const str = String(blogContent[0]);

    // Set the default blog content
    setDefBlog(str.substring(0,bufferSize));
    
    // Determine if the key is even or odd
    isEven(blogKey % 2 === 0);
  }, [blogContent, blogKey]);

  // blogPost component
  return (
    <div className={`w-full flex ${even? 'flex-row-reverse' : 'flex-row'} gap-8 x-sm:flex-col-reverse x-sm:gap-2`}>
      <div className="w-1/2 flex flex-col gap-2 p-2 x-sm:w-full">
        <div>
          <h3 className="text-3xl font-bold capitalize text-cyan-600">
            {blogTitle}
          </h3>
        </div>
        <div>
          <p className="text-lg font-medium">
            {showBlog ? blogContent+' ': defBlog+' '} 
            <button className="w-fit bg-gray-300 py-[0.0625] px-2.5 rounded-sm text-sm font-medium capitalize text-blue-600" 
            onClick={() => setShowBlog(!showBlog)}>
              {showBlog ? 'read less' : 'read more'}
            </button>
          </p>
        </div>
        <div>
          <h3 className="text-base font-semibold capitalize text-red-600">
            for more visit page: <VisitButton/>
          </h3>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center p-2 x-sm:w-full">
        <img src={blogImg} alt="Blog" />
      </div>
    </div>
  );
}

export default memo(BlogPost);
