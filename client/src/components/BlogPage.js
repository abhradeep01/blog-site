import React from 'react';

function BlogPage({pageImg,blogTitle,blogDescribe,}) {
  return (
    <div className="">
        <div className="">
            <div className="">
                <img src="" alt="" />
            </div>
            <div>
                <h3 className="">
                    {blogTitle}
                </h3>
            </div>
            <div>
                <p className="">
                    {blogDescribe}
                </p>
            </div>
        </div>
        <div className="">
            
        </div>
    </div>
  )
}

export default BlogPage