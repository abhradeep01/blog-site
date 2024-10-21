import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="w-[100%] h-[82.7vh] flex flex-col gap-4 items-center justify-center">
        <div>
            <h2 className="text-lg font-bold text-red-500">
                404 Not Found
            </h2>
        </div>
        <div>
            <h3 className="text-lg font-bold">
                Back To <Link to={'/'} children='Home Page' className='bg-blue-500 text-white text-base font-semibold p-2 rounded'/>
            </h3>
        </div>
    </div>
  )
}

export default NotFound