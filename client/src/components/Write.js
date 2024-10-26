import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import data from '../data/content.json';

function Write() {
    //for setting description for the blog
    const [description,setDescription] = useState('');

    //for setting title of the blog
    const [title,setTitle] = useState('');

    //for setting image of the blog
    const [img,setImg] = useState(null);

    //image upload handler function 
    const handleImgUpload = (event) =>{
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) =>{
            setImg(e.target.result);
        }
        reader.readAsDataURL(file);
    }
    console.log(img);
  return (
    <div className="w-[80%] flex flex-row justify-between tablet-lg:w-[90%] tablet-sm:w-[90%] border tablet-sm:flex-col tablet-sm:gap-[4rem] x-sm:w-[95%] x-sm:flex-col x-sm:gap-[4rem] m-28 ">
        <div className="w-[70%] flex flex-col gap-[2rem] tablet-lg:w-[65%] tablet-sm:w-full tablet-sm:flex-col x-sm:w-full">
            <input type="text" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)} className='w-full focus:outline-none border border-gray-300 h-[2.25rem] p-1' />
            <div>
                <ReactQuill theme='snow' value={description} onChange={setDescription} className='h-[225px]' />
            </div>
        </div>
        <div className="w-[25%] flex flex-col gap-5 tablet-lg:w-[30%] tablet-sm:w-[100%] tablet-sm:flex-row tablet-sm:justify-around x-sm:w-full x-sm:flex-row x-sm:justify-between">
            <div className="w-full flex flex-col gap-2 border border-gray-300 p-1 tablet-sm:w-[48%] x-sm:w-[48%] x-sm:justify-around">
                <div>
                    <h2 className="text-xl font-bold">
                        Publish
                    </h2>
                </div>
                <div className='text-base'>
                    <b className='font-semibold'>Status: </b>Draft
                </div>
                <div className='text-base'>
                    <b className="font-semibold">Visibility: </b>Public
                </div>
                <div>
                    <input type="file" name="image" id="file" onChange={handleImgUpload} className='hidden' />
                    <label htmlFor="file" className="underline underline-offset-[3px] text-base font-medium text-slate-600">Upload Image</label>
                </div>
                <div className="w-full flex flex-row justify-between">
                    <button className="border border-cyan-600 p-1 text-base font-medium text-cyan-600 rounded-sm">
                        Save as draft
                    </button>
                    <button className='bg-cyan-600 text-white p-1 text-base font-medium rounded-sm hover:shadow hover:shadow-gray-400'>
                        Update
                    </button>
                </div>
            </div>
            <div className="w-full flex flex-col gap-2 border border-gray-300 p-1 tablet-sm:w-[48%] x-sm:w-[48%]">
                <div>
                    <h2 className="text-xl font-bold">
                        Category
                    </h2>
                </div>
                {
                    data.navContent.map((item,index)=>{
                        return(
                            <div className='flex flex-row gap-0.5' key={index}>
                                <input type="radio" name="" id={item.path} />
                                <label htmlFor={item.path} className="">{item.text}</label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Write