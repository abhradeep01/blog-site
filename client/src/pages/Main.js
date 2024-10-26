import React from 'react';
import data from '../data/content.json';
import BlogPost from '../components/BlogPost';
function Main() {
  return (
    <div className="w-[80%] flex flex-col gap-4 my-[6.5rem] tablet-lg:w-[90%] tablet-sm:w-[90%] x-sm:w-[99%]">
        {
            data.homeContent.map((item,index)=>{
                return(
                    <BlogPost
                        blogKey={index+1}
                        blogTitle={item.title}
                        blogImg={item.blogImg}
                        blogContent={item.describe}
                    />
                )
            })
        }
    </div>
  )
}

export default Main