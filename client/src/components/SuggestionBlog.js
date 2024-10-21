import React from 'react';

function SuggestionBlog({suggestBlogImg,suggestBlogTitle}) {
  return (
    <div className="w-full flex flex-col gap-2.5">
        <div className="w-full">
            <img src={suggestBlogImg} alt="" />
        </div>
        <div>
            <h3 className="text-lg font-bold">
                {suggestBlogTitle}
            </h3>
        </div>
        <button className="border border-cyan-600 text-cyan-600 hover:shadow hover:shadow-cyan-200 text-base font-semibold">
            read more
        </button>
    </div>
  )
}

export default SuggestionBlog