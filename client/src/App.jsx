import Canvas from "./canvas"
import Customizer from "./pages/Customizer"
import Home from "./pages/Home"
import React, { useState } from "react";
import { CustomButton } from './components'

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
      <Home isActive={active} />
      <Canvas />
      <Customizer />
    </main>
  )
}

export default App

