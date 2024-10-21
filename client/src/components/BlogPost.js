import React, { useEffect, useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { Visit } from '../icons/icons';

const VisitButton = () =>{
  return(
    <button className="w-fit px-1 py-0.5 bg-blue-500 text-white rounded-sm">
      <Link to={'/blogPage'} className='flex flex-row text-base font-semibold'>
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

  const bufferSize = 550;

  useEffect(() => {
    // Set the default blog content
    const str = String(blogContent[0]);
    setDefBlog(str.substring(0,bufferSize));
    
    // Determine if the key is even or odd
    isEven(blogKey % 2 === 0);
  }, [blogContent, blogKey]);

  // blogPost component
  return (
    <div className={`w-full flex ${even? 'flex-row-reverse' : 'flex-row'} gap-8 border x-sm:flex-col-reverse x-sm:gap-2`}>
      <div className="w-1/2 flex flex-col gap-2 p-2 x-sm:w-full">
        <div>
          <h3 className="text-lg font-bold capitalize text-cyan-500">
            {blogTitle}
          </h3>
        </div>
        <div>
          <p className="text-base font-semibold">
            {showBlog ? blogContent : defBlog}
            <button className="w-fit bg-slate-200 py-[0.0625] px-2.5 rounded-sm text-sm font-medium capitalize text-blue-600" 
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
