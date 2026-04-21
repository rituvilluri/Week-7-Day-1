import React from "react";
import { Canvas } from "@react-vertex/core";
import { useViewportSize } from "@react-vertex/dom-hooks";
import Scene from "./demo 2/src/Scene";

export default function Demo2Page() {
  const { width, height } = useViewportSize();
  return (
    <Canvas width={width} height={height}>
      <Scene />
    </Canvas>
  );
}
