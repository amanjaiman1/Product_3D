import { Canvas } from "@react-three/fiber";
import { Experience } from "./NewModel/Experience";

function App() {
  return (
    <Canvas
      camera={{ position: [0, -8, 5], fov: 30, zoom: 1.3, up: [0, 5, 4], near: 0.8 }}
      style={{ height: "100vh", width: "100%" }}
    >
      <color attach="background" args={["#ececec"]} />
      <Experience />
    </Canvas>
  );
}

export default App;
