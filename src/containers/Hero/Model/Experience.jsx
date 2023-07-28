import React from "react";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { Avatar } from "./Avatar";

export const Experience = () => {
  const { animation, setAvatar } = useControls({
    animation: {
      value: "Typing",
      options: [
        "Typing",
        "Falling",
        "Standing",
        "Dancing",
        "Hello",
        "Greeting",
        "Waving",
      ],
    },
    setAvatar: {
      value: "ritika",
      options: ["ritika", "male2", "male"],
    },
  });

  return (
    <>
      {/* Disable OrbitControls to prevent camera interaction */}
      <OrbitControls
        enabled={false}
        rotation={[0.3, -0.3, 0.3]}
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 2}
        maxAzimuthAngle={Math.PI / 2}
        position={[6, -5, 8]}
      />
      <ambientLight intensity={0.8} />
      {/* Comment out the Sky component to hide the background */}
      {/* <Sky /> */}
      {/* Use transparent background */}
      <Environment preset="sunset" background={false} />
      <group>
        <ContactShadows
          opacity={0.42}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
        <Avatar animation={animation} />
        {/* <Avatar setAvatar={setAvatar} /> */}
        {animation === "Typing" && (
          <mesh scale={[-0.8, 0.6, -0.8]} position-y={0.8}>
            <boxGeometry />
            <meshStandardMaterial color="white" />
          </mesh>
        )}
      </group>
    </>
  );
};
