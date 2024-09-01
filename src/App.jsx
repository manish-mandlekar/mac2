import { Canvas } from "@react-three/fiber";
import MacContainer from "./MacContainer";
import React from "react";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import Marque from "./Marque.jsx";
import Page2 from "./Page2.jsx";
import LocomotiveScroll from "locomotive-scroll";
import Page from "./Page.jsx";
import Nav from "./Components/Nav.jsx";

const App = () => {
  
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <Nav />
      <div className="w-full h-screen relative bg-black">
        <div className="absolute flex flex-col items-center text-white top-40 left-1/2 -translate-x-1/2">
          <h3 className="masked text-8xl leading-loose tracking-tighter font-[700]">
            Votify
          </h3>
          <h5 className="">Online Voting System</h5>
        </div>
        <Canvas camera={{ fov: 12, position: [0, -10, 120] }}>
          <OrbitControls enableZoom={false} />
          <Environment
            files={[
              "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
            ]}
          />
          <ScrollControls pages={3}>
            <MacContainer />
          </ScrollControls>
        </Canvas>
        <div className="w-full h-screen bg-black relative">
          <Marque />
          <Page/>
          <Page2 />
        </div>
      </div>
    </>
  );
};

export default App;
