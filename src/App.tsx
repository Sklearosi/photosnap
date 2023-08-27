import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Stories from "./components/Stories"
import Features from "./components/Features"
import Pricing from "./components/Pricing"



function App() {


  return (
    <div className=" font-dmSans">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/stories" element={<Stories/>}/>
        <Route path="/features" element={<Features/>}></Route>
        <Route path="/pricing" element={<Pricing/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
