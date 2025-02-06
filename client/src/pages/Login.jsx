import React from 'react';
import { apiClient } from '../config/axios';
import '../pages/style/login.scss';
import { Alert, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import { Close, Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router';

function Login() {
    //input
    const [input,setInput] = React.useState({
        username:'',
        password:''
    });
    //show password
    const [showPassword,setShowPassword] = React.useState(false);
    //error message
    const [error,setError] = React.useState('');
    //set success message
    const [success,setSuccess] = React.useState('');
    //navigation
    const navigate = useNavigate();

    //handle change
    const handleChange = (e)=>{
        setInput({...input,[e.target.name]:e.target.value});
    }

    //handle submit
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            if(input.username && input.password){
                const res = await apiClient.post('/auth/login',input);
                if(res.status===200){
                    localStorage.setItem('user',res.data);
                    setSuccess('login successfully');
                    setTimeout(()=>{
                        setSuccess('');
                    },2000);
                    navigate('/');
                }else{
                    setError(res.data);
                }
            }else{
                setError('please input all fields!');
            }

        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="login">
        <div className="login-container">
            <div className="form">
                <div>
                    <h2 className="header">Login</h2>
                </div>
                <OutlinedInput sx={{width:'100%',height:'2.5rem'}} type="text" name='username' value={input.username} placeholder='username' onChange={handleChange}/>
                <OutlinedInput sx={{width:'100%',height:'2.5rem'}} name='password' value={input.password} placeholder='password' onChange={handleChange}
                    type={showPassword?'text':'password'}
                    endAdornment={
                        <InputAdornment position='end'>
                            <IconButton>
                                {showPassword?<VisibilityOff fontSize='small'/>:<Visibility fontSize='small'/>}
                            </IconButton>
                        </InputAdornment>
                    }
                />
                {/* error alert */}
                <Alert severity='error' color='error' variant='standard' sx={error?{display:'flex',flexDirection:'row',alignItems:'center'}:{display:'none'}} action={
                    <IconButton onClick={()=>setError('')}>
                        <Close color='error'/>
                    </IconButton>
                }>
                    {error}
                </Alert>
                <button className='login-btn' onClick={handleSubmit}>Login</button>
                <p>Do not have an account? <a href='/register'>Register</a></p>
                {/* success alert */}
                <Alert severity='success' variant='standard' color='success' sx={success?{display:'flex',flexDirection:'row',alignItems:'center'}:{display:'none'}} >
                    {success}
                </Alert>
            </div>
        </div>
    </div>
  )
}

export default Login;