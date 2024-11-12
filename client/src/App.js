import { Outlet, Route, Routes } from 'react-router-dom';
import NavBar from './pages/NavBar';
import Footer from './pages/Footer';
import NotFound from './components/NotFound';
import Main from './pages/Main';
import BlogPage from './components/BlogPage';
import Write from './components/Write';
import LogIn from './components/LogIn';
import Register from './components/Register';


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
  
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout/>}>
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
