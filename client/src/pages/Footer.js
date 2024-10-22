import React from 'react'
import logo from '../icons/logo.png';
function Footer() {
  return (
    <div className="w-[80%] flex flex-col gap-3 items-center bg-cyan-200 py-4 tablet-lg:w-[90%] x-sm:w-[95%]">
        <div className="w-24">
            <img src={logo} alt="" />
        </div>
        <div className='text-center'>
            <p className="text-base font-semibold">
              For sharing knowledge like Art, Technology, Science and more other
            </p>
        </div>
    </div>
  )
}

export default Footer