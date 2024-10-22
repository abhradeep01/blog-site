import React from 'react'
import { Link } from 'react-router-dom'

function SuggestPost({blogImg,BlogTitle}) {
  return (
    <div className="w-full flex flex-col gap-3">
        <div>
            <img src={blogImg} alt="" />
        </div>
        <div>
            <h3 className="text-xl font-bold">
                {BlogTitle}
            </h3>
        </div>
        <button className="border border-cyan-500 py-1 px-1.5 w-fit">
            <Link to={'/blogpage'} children={'Read More'} className='text-lg text-cyan-500 font-medium' />
        </button>
    </div>
  )
}

export default SuggestPost;