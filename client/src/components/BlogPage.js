import React, { useEffect, useState } from 'react';
import SuggestPost from './SuggestPost';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

function BlogPage() {
    //for post info store
    const [post,setPost] = useState({});
    //url location
    const location = useLocation();
    //for page navigation
    // const navigation = useNavigate();

    const postId = location.pathname.split('/')[2];
    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const res = await axios.get(`/posts/${postId}`);
                setPost(res.data);
            }catch(err){
                console.log(err);;
            }
        }
        fetchData();
    },[postId])

  return (
    <div className="w-[80%] flex flex-row gap-8 m-28 tablet-lg:w-[90%] x-sm:w-[95%] tablet-sm:flex-col x-sm:flex-col">
        <div className="w-[75%] flex flex-col gap-6 tablet-sm:w-[100%] x-sm:w-full">
            <div className='w-full'>
                <img src={post.img} alt="" className='w-full'/>
            </div>
            <div className="w-full flex flex-row gap-2">
                <div className="w-14">
                    <img src={post.userImg} alt="" className='w-full rounded-full' />
                </div>
                <div className="flex flex-col justify-around">
                    <div>
                        <h3 className="text-[1.1rem] font-semibold capitalize">
                            {post.username}
                        </h3>
                    </div>
                    <div>
                        <h4 className="text-base font-medium">
                            posted {moment(post.date).fromNow()}
                        </h4>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-3xl font-extrabold text-red-500">
                    {post.title}
                </h2>
            </div>
            <div className="w-full flex flex-col gap-6 text-lg">
                {/* {
                    post.describtion.map((item,index)=>{
                        return(
                            <div>
                                <p className="text-lg font-medium">
                                    {item}
                                </p>
                            </div>
                        )
                    })
                } */}
                {post.describtion}
            </div>
        </div>
        <div className="w-[25%] flex flex-col gap-5 tablet-sm:w-[100%] x-sm:w-full">
            <div>
                <h5 className="text-xl font-semibold">
                    Other posts you may like
                </h5>
            </div>
            <div className="w-full flex flex-col gap-3 tablet-sm:flex-row tablet-sm:flex-wrap tablet-sm:justify-between x-sm:flex-row x-sm:flex-wrap x-sm:justify-between">
                <SuggestPost
                    type={{
                        category:post.category,
                        id:post.id
                    }}
                />
            </div>
        </div>
    </div>
  )
}

export default BlogPage