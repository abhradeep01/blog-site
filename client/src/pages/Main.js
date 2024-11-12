import React, { useEffect, useState } from 'react';
import BlogPost from '../components/BlogPost';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Main() {
    //set posts
    const [posts,setPosts] = useState([]);
    //set search params
    const category = useLocation().search;

    useEffect(()=>{
        const fetchPosts = async () => {
            try{
                const res = await axios.get(`/posts/${category}`);
                setPosts(res.data);
            }catch(err){
                console.log(err);
            }
        }
        fetchPosts();
    },[category])

  return (
    <div className="w-[80%] flex flex-col gap-4 mt-[6.5rem] tablet-lg:w-[90%] tablet-sm:w-[90%] x-sm:w-[99%]">
        {
            posts.map((item,index)=>{
                return(
                    <BlogPost
                        blogKey={index+1}
                        blogTitle={item.title}
                        blogContent={item.describtion}
                        blogImg={item.img}
                    />
                )
            })
            
        }
    </div>
  )
}

export default Main