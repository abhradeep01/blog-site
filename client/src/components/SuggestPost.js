import { Link } from 'react-router-dom';

function SuggestPost({title,img,id}) {
    
  return (
        <div className="w-full flex flex-col gap-2 border p-1 tablet-sm:w-[48%] x-sm:w-[48%]">
            <div>
                <img src={img} alt="" width={640} height={360} className='aspect-[16/9]' />
            </div>
            <div>
                <h3 className="text-xl font-bold">
                    {title}
                </h3>
            </div>
            <button className="border border-cyan-500 py-1 px-1.5 w-fit">
                <Link to={`/posts/${id}`} children={'Read More'} className='text-base text-cyan-500 font-medium' />
            </button>
        </div>
    )
}

export default SuggestPost;