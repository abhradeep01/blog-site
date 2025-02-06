import React from 'react';
import './style/register.scss';
import { CameraAlt, Close, CloudUpload, Visibility, VisibilityOff } from '@mui/icons-material';
import { Alert, Button, Fab, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import { apiClient } from '../config/axios';
import { useNavigate } from 'react-router';
function Register() {
    //const input details
    const [inputs,setInputs] = React.useState({
      username:'',
      email:'',
      password:''
    });
    //show password
    const [showPassword,setShowPassword] = React.useState(false);
    //img 
    const [img,setImg] = React.useState(null);
    //default img
    const defaultImg = import.meta.env.VITE_USER_DEFAULT_IMG;
    //imgUrl
    const [imgUrl,setImgurl] = React.useState('');
    //error message
    const [error,setError] = React.useState('');
    //success message
    const [successmessage,setSuccessmessage] = React.useState('');
    //naviagte
    const navigate = useNavigate();

    //handle change
    const handleChange = (e) =>{
      setInputs({...inputs,[e.target.name]:e.target.value});
    }

    //img change
    const imgChange = (e) =>{
      const file = e.target.files[0];
      try {
        const reader = new FileReader();
        reader.onload= ()=>{
          setImgurl(reader.result);
          console.log(reader.result);
        }
        reader.readAsDataURL(file);
      } catch (error) {
        console.log(error);
      }
    }

    //img upload 
    const imgUpload = async () =>{
      try{
        const res = await apiClient.post('/user/upload',{
          url:imgUrl,
          name:img.name
        });
        if(res.status===200){
          setSuccessmessage('image upload successfully');
          setImg(res.data);
        }else{
          setError(res.data)
        }
      }catch(err){
        console.log(err);
      }
    }

    //handle submit
    const handleSubmit = async (e) =>{
      e.preventDefault();
      try {
        if(inputs.username && inputs.email && inputs.password && img){
          const res = await apiClient.post('/auth/register',{
            username: inputs.username,
            email: inputs.email,
            password: inputs.password,
            img
          });
          if(res.status===200){
            setSuccessmessage(res.data);
            setTimeout(()=>{
              setSuccessmessage('')
              navigate('/');
            },2000);
          }else{
            setError(res.data);
          }
        }else{
          setError('please fill all required field!')
        }
      } catch (error) {
        console.log(error);
      }
    }
    
  return (
    <div className="register">
        <div className="container">
          <div className="form">
            <div className="header">
              <h2>register</h2>
            </div>
            <div className="img-upload">
              <div className="img-input">
                <img src={imgUrl?imgUrl:defaultImg} alt="" className='profile-img'/>
                <label htmlFor="img" className='camera-icon'>
                  <CameraAlt fontSize='small' sx={{colorAdjust:'revert'}}/>
                </label>
                <input type="file" src="" accept='img/*' id='img' name='image' onChange={imgChange} />
              </div>
              <div className="upload">
                <Button size='small' variant='contained' endIcon={<CloudUpload fontSize='small'/>} onClick={imgUpload}>
                  upload
                </Button>
              </div>
            </div>
            <OutlinedInput sx={{height:'2.5rem',width:'100%'}} type="text" placeholder='username' name='username' value={inputs.username} onChange={handleChange} />
            <OutlinedInput sx={{height:'2.5rem',width:'100%'}} type="email" name="email" id="" value={inputs.email} onChange={handleChange} placeholder='email' />
            <OutlinedInput sx={{height:'2.5rem',width:'100%'}} name='password' placeholder='password' onChange={handleChange} value={inputs.password}
              type={showPassword?'text':'password'}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton size='small' onClick={()=>setShowPassword(!showPassword)}>
                    {showPassword?<VisibilityOff fontSize='small'/>:<Visibility fontSize='small'/>}
                  </IconButton>
                </InputAdornment>
              }
            />
            {/* error alert */}
            <Alert variant='standard' color='error' severity='error' sx={error?{display:'flex',alignItems:'center',width:'100%'}:{display:'none'}} action={
              <IconButton onClick={()=>setError('')} size='small'>
                <Close fontSize='small' color='error'/>
              </IconButton>
            } >
              {error}
            </Alert>
            <button className='register-btn' onClick={handleSubmit}>
              register
            </button>
            <p>Already have an account? <a href="">login</a></p>
            {/* success message */}
            <Alert severity='success' variant='standard' sx={successmessage?{display:'flex',flexDirection:'row',alignItems:'center',width:'100%'}:{display:'none'}}>
              {successmessage}
            </Alert>
          </div>
        </div>
    </div>
  )
}

export default Register