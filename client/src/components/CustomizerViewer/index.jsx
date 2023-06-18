import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei/core';

import Shirt from './Shirt';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';
import CustomizerOptions from '../CustomizerOptions';

function CustomizerViewer() {
  return (
    <div className="w-[500px] h-[500px] absolute left-28">
      <Canvas
        shadows
        camera={{ position: [0, 0, 0], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full max-w-full h-full transition-all ease-in"
      >
        <ambientLight intensity={0.5} />
        <Environment preset="city" />

        <CameraRig>
          <Backdrop />
          <Center>
            <mesh position={[-1.6, 0, 0]}>
              <Shirt />
            </mesh>
          </Center>
          {/* <CustomizerOptions /> */}
        </CameraRig>
      </Canvas>
    </div>
  );
}

export default CustomizerViewer;
