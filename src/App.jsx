import { Canvas } from "@react-three/fiber";
import MacContainer from "./MacContainer";
import React from "react";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";

const App = () => {
  return (
    <div className="w-full h-screen">
      <div className="absolute flex flex-col items-center text-white top-40 left-1/2 -translate-x-1/2">
      <h3 className="masked text-8xl leading-loose tracking-tighter font-[700]">Votify</h3>
      <h5 className="mt-2">Online Voting System</h5> 
     

      </div>
    <Canvas camera={{fov:12, position:[0,-10,120]}}>
      <OrbitControls />
      <Environment files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"]} />
      <ScrollControls pages={3}>
      <MacContainer />
      </ScrollControls>
    </Canvas>
    </div>
  );
};

export default App;
