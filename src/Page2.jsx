import React from 'react';
import { Canvas } from "@react-three/fiber";// import { EffectComposer } from "@react-three/postprocessing";
import { Bloom , EffectComposer } from '@react-three/postprocessing'
import "./index.css";
import { OrbitControls, useTexture } from "@react-three/drei";
import Cyl from "./Cyl";
const Page2 = () => {
  return (
    <div className='w-full h-screen bg-black'>
         <Canvas camera={{ fov: 35 }}>
        <OrbitControls enableZoom={false}/>
        <ambientLight />
        <Cyl />
        <EffectComposer>
          <Bloom
            intensity={1.0} // The bloom intensity.
            luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default Page2;
