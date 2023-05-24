import Canvas from "./canvas"
import Customizer from "./pages/Customizer"
import Home from "./pages/Home"
import ErrorPage from "./components/404Error"
import AllPicker from "./components/AIPicker"
import { BrowserRouter, Routes, Route} from "react-router-dom"


function App() {

  
  return (
    <main className="app transition-all ease-in">
    
    <Customizer/>


    <BrowserRouter>
      <Routes>
      <Route path ="/" element = {<Home/>}/>
      <Route path ="/" element={<Canvas />} />
      <Route path="*" element={<ErrorPage/>} />
      </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App

