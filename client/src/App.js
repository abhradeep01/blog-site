import { Outlet, Route, Routes } from 'react-router-dom';
import NavBar from './pages/NavBar';
import Footer from './pages/Footer';
import NotFound from './components/NotFound';
import Main from './pages/Main';
import BlogPage from './components/BlogPage';
import Write from './components/Write';


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
        <Route path='/' element={<Layout/>}>
          <Route index path='/' element={<Home/>}/>
          <Route index path='/blogpage' element={<BlogPage/>}/>
          <Route index path='/write' element={<Write/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
