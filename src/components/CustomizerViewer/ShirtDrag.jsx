import React, { useEffect, useRef, useState } from "react";

const ShirtDrag = ({ shirtRef }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [prevMouseX, setPrevMouseX] = useState(0);

  useEffect(() => {
    const handleMouseDown = (e) => {
      setIsDragging(true);
      setPrevMouseX(e.clientX);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleMouseMove = (e) => {
      if (isDragging) {
        const mouseDeltaX = e.clientX - prevMouseX;
        const rotationSpeed = 0.005;
        const newRotationY =
          shirtRef.current.rotation.y + mouseDeltaX * rotationSpeed;
        shirtRef.current.rotation.y = newRotationY;
        setPrevMouseX(e.clientX);
      }
    };

    const handleMouseEnter = () => {
      document.body.style.cursor = "grab";
    };

    const handleMouseMoveOnCanvas = (e) => {
      if (isDragging) {
        document.body.style.cursor = "grabbing";
        const mouseDeltaX = e.clientX - prevMouseX;
        const rotationSpeed = 0.005;
        const newRotationY =
          shirtRef.current.rotation.y + mouseDeltaX * rotationSpeed;
        shirtRef.current.rotation.y = newRotationY;
        setPrevMouseX(e.clientX);
      }
    };

    const handleMouseLeave = () => {
      document.body.style.cursor = "auto";
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);
    shirtRef.current.addEventListener("mouseenter", handleMouseEnter);
    shirtRef.current.addEventListener("mousemove", handleMouseMoveOnCanvas);
    shirtRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
      shirtRef.current.removeEventListener("mouseenter", handleMouseEnter);
      shirtRef.current.removeEventListener("mousemove", handleMouseMoveOnCanvas);
      shirtRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isDragging, prevMouseX, shirtRef]);

  return null;
};

export default ShirtDrag;
