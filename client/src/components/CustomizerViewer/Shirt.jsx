import React, { useEffect, useRef } from "react";
import { Decal, useGLTF, useTexture } from "@react-three/drei/core";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import state from "./././valito";
import ShirtDrag from "./ShirtDrag";
const Shirt = ({ setIsLoading }) => {
  const snap = useSnapshot(state);
  const gltf = useGLTF("/shirt_baked.glb");
  const { nodes, materials } = gltf;
  useEffect(() => {
    if (gltf) setIsLoading(false);
  }, [gltf]);
  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);
  // this is use to animate the color of the shirt like a drop shadow when use choose a color
  useFrame((state, delta) =>
    easing.dampC(materials.lambert1.color, snap.color, 0.25, delta)
  );
  const shirtRef = useRef();
  return (
    <group>
      <mesh
        ref={shirtRef}
        castShadow={true}
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        {snap.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}

        {snap.isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            map-anisotropy={1}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
      <ShirtDrag shirtRef={shirtRef} />
    </group>
  );
};

export default Shirt;
