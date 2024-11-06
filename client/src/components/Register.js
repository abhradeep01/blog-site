import React, { useState } from 'react'
import { Camera, EyeClose, EyeOpen, User } from '../icons/icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
    //password show or not show
    const [showPassword,setShowPassword] = useState(false);
    //set userImg
    // const [userImg,setUserImg] = useState(null);
    //for taking new user input 
    const [inputs, setInput] = useState({
        username:"",
        email:"",
        password:""
    });
    //error state
    const [err,setErr] = useState(null);
    const navigate = useNavigate();

    
    //handle change on input field
    const handleChange = (e) =>{
        setInput(prev=>({...prev,[e.target.name]:e.target.value}))
    }
    
    //handle image upload
    // const imgUpload = (e) =>{
    //     const imgFile = e.target.files[0];
    //     if(imgFile.type.startsWith('image/')){
    //         var filereader = new FileReader();
    //         filereader.readAsDataURL(imgFile);
    //         filereader.onload = () =>{
    //             setUserImg(filereader.result);
    //         }
    //         filereader.onerror = (err) =>{
    //             setErr(err);
    //         }
    //     }
    //     else{
    //         setErr('please upload a image file');
    //     }
    // }

    //handle submit
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            if(inputs.username && inputs.email && inputs.password){
                // const dataForm = new FormData();
                // dataForm.append('username',inputs.username);
                // dataForm.append('email',inputs.email);
                // dataForm.append('password',inputs.password);
                // dataForm.append('image',userImg);
                await axios.post("/auth/register",inputs);
                navigate('/login');
                setInput({
                    username:'',
                    email:'',
                    password:''
                });
            }
            else{
                setErr('please fill all the required fields');
            }
        }catch(err){
            setErr(err.response.data || 'Registration failed');
        }
    }
    
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-teal-900 ">
        <div className="w-[400px] x-sm:w-[95%] flex flex-col items-center gap-3 p-[3rem] bg-white rounded-sm shadow shadow-slate-500">
            <div>
                <h1 className="text-xl font-extrabold">
                    Register
                </h1>
            </div>
            <form className='bg-white flex flex-col gap-4'>
                {/* <div className='relative w-[120px] h-[120px]'>
                    {userImg?<img src={userImg} alt='' className='rounded-full border w-full h-full'/>:<User/>}
                    <div className="absolute right-0 bottom-0 z-10 bg-slate-300 rounded-full p-0.5">
                        <label htmlFor="userImg">
                            <Camera/>
                        </label>
                        <input type="file" name="userImg" id="userImg" height={120} width={120} onChange={imgUpload} className='hidden'/>
                    </div>
                </div> */}
                
                <input required type="text" placeholder='username' name='username' value={inputs.username} onChange={handleChange} className='w-full focus:outline-none border border-slate-300 p-0.5' />
                <input required type="email" placeholder='email' name='email' value={inputs.email} onChange={handleChange} className='w-full focus:outline-none border border-slate-300 p-0.5'/>
                <div className="relative w-full h-fit ">
                    <input required type={showPassword?'text':'password'} placeholder='password' name='password' value={inputs.password} onChange={handleChange} className='w-full focus:outline-none border border-slate-300 p-0.5' />
                    <div className="absolute right-[0.125rem] top-0 bottom-0 z-10 h-full flex justify-center items-center" onClick={()=>setShowPassword(!showPassword)}>
                        {
                            showPassword?
                            <EyeClose/>:
                            <EyeOpen/>
                        }
                    </div>
                </div>
                <button className="bg-teal-500 w-full py-0.5 text-white text-base font-medium rounded" onClick={handleSubmit}>
                    Register
                </button>
                <p className='text-red-500'>{err}</p>
                <div>
                    Already have an account? <Link to={'/login'} children={'login'} className='text-blue-500 capitalize'/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register;