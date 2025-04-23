import { Route, Routes } from "react-router-dom"
import { Nav } from "./components/navbar/Nav"
import Home from "./pages/Home/Home"


function App() {


  return (
    

   <div className="app">
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
    </Routes>
   </div>
  )
}

export default App
