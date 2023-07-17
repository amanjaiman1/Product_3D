import React, { forwardRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";

import state from "././valito";

const CameraRig = forwardRef(({ children, cameraState }, group) => {
  const [cord, setcords] = cameraState;
  const snap = useSnapshot(state);
  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;
    // set the initial position of the model
    let targetPosition = [0, 0, 2];
    if (snap.intro) {
      if (isBreakpoint) targetPosition = [0, 0, 2];
      if (isMobile) targetPosition = [0, 0.2, 2.5];
    } else {
      if (isMobile) targetPosition = [0, 0, 2.5];
      else targetPosition = [0, 0, 2];
    }
    // set model camera position
    easing.damp3(state.camera.position, [0, 0, cord.zoom], 0.25, delta);
    // set the model rotation smoothly
    easing.dampE(group.current.rotation, [0, 0, 0], delta);
  });
  return <mesh ref={group}>{children}</mesh>;
});

export default CameraRig;
