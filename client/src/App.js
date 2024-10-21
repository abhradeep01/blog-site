import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './pages/NavBar';
import Footer from './pages/Footer';
import NotFound from './components/NotFound';
import Main from './pages/Main';


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
          <Route path='/*' element={<NotFound/>}/>

        </Route>
      </Routes>
    </>
  );
}

export default App;
