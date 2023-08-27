import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Stories from "./components/Stories"



function App() {


  return (
    <div className=" font-dmSans">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/stories" element={<Stories/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
