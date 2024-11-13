import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function SuggestPost({type}) {
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const res = await axios.get(`/posts/?category=${type.category}`);
                const suggestPosts = res.data.filter(item=>item.id===type.id?null:item)
                setPosts(suggestPosts.length > 4 ? suggestPosts.slice(0,4):suggestPosts);
            }catch(err){
                console.log(err);
            }
        }
        fetchData();
    })
  return posts.map((item,index)=>{
    return(
        <div className="w-full flex flex-col gap-2 border p-1 tablet-sm:w-[48%] x-sm:w-[48%]">
            <div>
                <img src={item.img} alt="" />
            </div>
            <div>
                <h3 className="text-2xl font-bold">
                    {item.title}
                </h3>
            </div>
            <button className="border border-cyan-500 py-1 px-1.5 w-fit">
                <Link to={`/posts/${item.id}`} children={'Read More'} className='text-lg text-cyan-500 font-medium' />
            </button>
        </div>
    )
  })
}

export default SuggestPost;