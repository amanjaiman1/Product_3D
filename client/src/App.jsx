import Canvas from "./canvas"
import Customizer from "./pages/Customizer"
import Home from "./pages/Home"
import ErrorPage from "./components/404Error"
import React, { useState } from "react";
import { CustomButton } from './components'
import { BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <main className="app transition-all ease-in " style={{ backgroundColor: active ? "black" : "white",color :active ?"white":"black" }}>
      <div className={'new'} >
             <CustomButton 
              type="filled"
              title="Theme"
              handleClick={handleClick}
              />
      </div>
      <div className={"new"}>
        <Customizer type="filled" handleClick={handleClick} />
      </div>

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home isActive={active} />
                <Canvas />
              </>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    
    </main>
  )
}

export default App
