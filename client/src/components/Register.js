import React, { useState } from 'react'
import { EyeClose, EyeOpen } from '../icons/icons';
import { Link } from 'react-router-dom';

function Register() {
    //password show or not show
    const [showPassword,setShowPassword] = useState(false);
    //for taking username
    const [username,setUsername] = useState('');
    //for taking email 
    const [email,setEmail] = useState('');
    //for taking password
    const [password,setPassword] = useState('');

  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-green-600 mt[5rem]">
        <div className="w-[400px] x-sm:w-[95%] flex flex-col items-center gap-3 p-[6rem] bg-white rounded-sm shadow shadow-slate-500">
            <div>
                <h1 className="text-xl font-extrabold">
                    Register
                </h1>
            </div>
            <form className='bg-white flex flex-col gap-4'>
                <input required type="text" placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)} className='focus:outline-none border border-slate-300 p-0.5' />
                <input required type="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='focus:outline-none border border-slate-300 p-0.5'/>
                <div className="relative w-full h-fit ">
                    <input required type={showPassword?'text':'password'} placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='w-full focus:outline-none border border-slate-300 p-0.5' />
                    <div className="absolute right-[0.125rem] top-0 bottom-0 z-10 h-full flex justify-center items-center" onClick={()=>setShowPassword(!showPassword)}>
                        {
                            showPassword?
                            <EyeClose/>:
                            <EyeOpen/>
                        }
                    </div>
                </div>
                <button className="bg-teal-500 w-full py-0.5 text-white text-base font-medium rounded">
                    login
                </button>
                <div>
                    Already have an account? <Link to={'/login'} children={'login'} className='text-red-500 capitalize'/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register;