import React, { useState } from 'react'
import { EyeClose, EyeOpen } from '../icons/icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function LogIn() {
    //password show or not show
    const [showPassword,setShowPassword] = useState(false);
    //for taking inputs
    const [inputs, setInputs] = useState({
        username:"",
        password:""
    });
    //set error 
    const [err,setErr] = useState('');
    //for page navigation
    const navigate = useNavigate();
    //handle change on input field
    const handleOnChange = (e) => {
        setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
    }

    //handle submit
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            if(inputs.username && inputs.password){
                await axios.post("/auth/login",inputs);
                navigate('/');
                setInputs({
                    username:"",
                    password:""
                });
            }
            else{
                setErr('please fill all the required fields');
            }
        }catch(err){
            setErr(err.response.data || "Login failed");
        }
    }

  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-teal-900">
        <div className="w-[400px] x-sm:w-[95%] flex flex-col items-center gap-3 p-[3rem] bg-white rounded-sm shadow shadow-slate-500">
            <div>
                <h1 className="text-xl font-extrabold">
                    LogIn
                </h1>
            </div>
            <form className='bg-white flex flex-col gap-4'>
                <input required type="text" placeholder='username' name='username' value={inputs.username} onChange={handleOnChange} className='focus:outline-none border border-slate-300 p-0.5 w-full' />
                <div className="relative w-full h-fit">
                    <input required type={showPassword?'text':'password'} placeholder='password' name='password' value={inputs.password} onChange={handleOnChange} className='w-full focus:outline-none border border-slate-300 p-0.5' />
                    <div className="absolute right-[0.125rem] top-0 bottom-0 z-10 h-full flex justify-center items-center" onClick={()=>setShowPassword(!showPassword)}>
                        {
                            showPassword?
                            <EyeClose/>:
                            <EyeOpen/>
                        }
                    </div>
                </div>
                <div>
                    <p className="text-red-500">{err}</p>
                </div>
                <button className="bg-teal-500 w-full py-0.5 text-white text-base font-medium rounded" onClick={handleSubmit}>
                    login
                </button>
                <div>
                    Didn't have any account? <Link to={'/register'} children={'register'} className='text-blue-500 capitalize'/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LogIn;