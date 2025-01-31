import { Route, Routes } from "react-router"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Login from "./pages/Login"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
