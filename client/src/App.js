import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import NavBar from './pages/NavBar';
import Footer from './pages/Footer';
import NotFound from './components/NotFound';
import Main from './pages/Main';
import BlogPage from './components/BlogPage';
import Write from './components/Write';
import LogIn from './components/LogIn';
import Register from './components/Register';
import { useContext, useEffect } from 'react';
import { AuthContext } from './context/authContext';


const Layout = () =>{
  return(
    <>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const Home = () =>{
  return(
    <Main />
  )
}
function App() {
  //current user context
  const {currentUser} = useContext(AuthContext)
  //navigation context
  const navigate = useNavigate();

  //protected route
  useEffect(()=>{
    currentUser?navigate('/'):navigate('/login');
  },[navigate,currentUser])
    
  
  return (
    <>
      <Routes>
        <Route path={'/'} element={currentUser?<Layout/>:<LogIn/>}>
          <Route index path='/' element={<Home/>}/>
          <Route path='/blogpage' element={<BlogPage/>}/>
          <Route path='/write' element={<Write/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Route>:
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </>
  );
}

export default App;
