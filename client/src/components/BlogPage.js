import React from 'react';
import SuggestPost from './SuggestPost';

function BlogPage({userImg,userName,daysBeforeUpdated,blogImg,blogTitle,blogDescribe=new Array([]),randomBlogs = new Array([])}) {
  return (
    <div className="w-[80%] flex flex-row gap-8 m-28 tablet-lg:w-[90%] x-sm:w-[95%] tablet-sm:flex-col x-sm:flex-col">
        <div className="w-[75%] flex flex-col gap-6 tablet-sm:w-[100%] x-sm:w-full">
            <div className='w-full'>
                <img src={blogImg} alt="" className='w-full' />
            </div>
            <div className="w-full flex flex-row gap-2">
                <div className="w-14">
                    <img src={userImg} alt="" className='w-full rounded-full' />
                </div>
                <div className="flex flex-col justify-around">
                    <div>
                        <h3 className="text-[1.1rem] font-semibold">
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
                                <p className="text-lg font-medium">
                                    {item}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className="w-[25%] flex flex-col gap-5 tablet-sm:w-[100%] x-sm:w-full">
            <div>
                <h5 className="text-xl font-semibold">
                    Other posts you may like
                </h5>
            </div>
            <div className="w-full flex flex-col gap-3 tablet-sm:flex-row tablet-sm:flex-wrap tablet-sm:justify-between x-sm:flex-row x-sm:flex-wrap x-sm:justify-between">
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
    </div>
  )
}

export default BlogPage