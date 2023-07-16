import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei/core";
import Shirt from "./Shirt";
import CameraRig from "./CameraRig";
import CustomizerOptions from "../CustomizerOptions";

import Lottie from "lottie-react";
import loader from "../../assets/lottie/95250-3d-loader.json";
import { useSelector } from "react-redux";
function CustomizerViewer() {
  const [isGrabbing, setIsGrabbing] = useState(false);
  const isLoading = useSelector((state) => state.customizerLoader);
  const cameraState = useState({
    zoom: 1.7,
    rotateY: 0,
    rotateX: 0,
    intensity: 0.8,
  });
  const cameraRef = useRef(null);

  const handleCanvasMouseDown = () => {
    setIsGrabbing(true);
  };

  const handleCanvasMouseUp = () => {
    setIsGrabbing(false);
  };

  return (
    <div
      className={`w-[500px] h-[500px] absolute ${
        isGrabbing ? "cursor-grabbing" : "cursor-grab"
      }`}
      onMouseDown={handleCanvasMouseDown}
      onMouseUp={handleCanvasMouseUp}
    >
      {isLoading && <Lottie animationData={loader} loop={true} />}
      <Canvas
        mouse="true"
        shadows
        camera={{ position: [0, 0, 0], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full max-w-full h-full transition-all ease-in"
      >
        <ambientLight intensity={cameraState[0].intensity} />
        {/* <Environment preset="city" /> */}
        <CameraRig cameraState={cameraState} ref={cameraRef}>
          <Center>
            <mesh position={[-1.6, 0, 0]}>
              <Shirt />
            </mesh>
          </Center>
        </CameraRig>
      </Canvas>
      <CustomizerOptions cameraState={cameraState} camerRef={cameraRef} />
    </div>
  );
}

export default CustomizerViewer;
