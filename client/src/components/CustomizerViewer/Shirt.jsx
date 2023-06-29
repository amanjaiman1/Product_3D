import React, { useEffect, useRef } from "react";
import { Decal, useGLTF, useTexture, Text } from "@react-three/drei/core";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import state from "./././valito";
import ShirtDrag from "./ShirtDrag";
import { useDispatch } from "react-redux";
import { UpdateCustomizerLoader } from "../../redux/customizer-load";

const Shirt = () => {
  const snap = useSnapshot(state);
  const dispatch = useDispatch();
  const gltf = useGLTF("/shirt_baked.glb");
  const { nodes, materials } = gltf;
  useEffect(() => {
    if (gltf) dispatch(UpdateCustomizerLoader(false));
    else {
      dispatch(UpdateCustomizerLoader(true));
    }
  }, [gltf, dispatch]);
  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  useFrame((state, delta) =>
    easing.dampC(materials.lambert1.color, snap.color, 0.25, delta)
  );

  const shirtRef = useRef();

  return (
    <group>
      <mesh
        ref={shirtRef}
        position={snap.position}
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
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>

      {snap.textDecal && (
        <mesh position={[0.4, 0.9, 1]}>
          <Text
            position={snap.textDecal.position}
            fontSize={snap.textDecal.fontSize} // Accessing fontSize property
            color={snap.textDecal.textcolor} // Accessing color property
            scale={0.2}
            fontFamily={snap.textDecal.fontFamily} // Accessing fontFamily property
          >
            {snap.textDecal.content} {/* Accessing content property */}
          </Text>
        </mesh>
      )}

      <ShirtDrag shirtRef={shirtRef} />
    </group>
  );
};

export default Shirt;
