import React from 'react';
import SuggestPost from './SuggestPost';

function BlogPage({userImg,userName,daysBeforeUpdated,blogImg,blogTitle,blogDescribe=new Array([]),randomBlogs = new Array([])}) {
  return (
    <div className="w-[80%] flex flex-row gap-8 m-28">
        <div className="w-[75%] flex flex-col gap-6">
            <div className='w-full'>
                <img src={blogImg} alt="" className='rounded-full w-full' />
            </div>
            <div className="w-full flex flex-row gap-2">
                <div className="gap-16">
                    <img src={userImg} alt="" className='w-full' />
                </div>
                <div className="flex flex-col justify-between">
                    <div>
                        <h3 className="text-lg font-bold">
                            {userName}
                        </h3>
                    </div>
                    <div>
                        <h4 className="text-base font-medium">
                            {"Posted "+daysBeforeUpdated+ " ago"}
                        </h4>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-3xl font-extrabold">
                    {blogTitle}
                </h2>
            </div>
            <div className="w-full flex flex-col gap-6">
                {
                    blogDescribe.map((item,index)=>{
                        return(
                            <div>
                                <p className="">
                                    {item}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className="w-[25%] flex flex-col gap-5">
            <div>
                <h5 className="text-lg font-bold">
                    Other posts you may like
                </h5>
            </div>
            {randomBlogs.map((item,index)=>{
                return(
                    <SuggestPost
                        key={index}
                        BlogTitle={item.title}
                        blogImg={item.blogImg}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default BlogPage