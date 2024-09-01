
import "./index.css"
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Page = () => {
  const boxRef = useRef(null);
  useEffect(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: boxRef.current, // Element that triggers the animation
        start: 'top 40%', // When the top of the box hits 80% from the top of the viewport
        end: 'top 20%', // When the top of the box hits 30% from the top of the viewport
        scrub: true,
         // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        markers: true, // Show markers for debugging (start and end positions)
      }
    })
    tl.to(".le",{
      scrub:true,
      duration:2,
      left:"70%",
      top:"0%"
 })
 tl.to(".re",{
  scrub:true,
  duration:2,
  top: "4%",
  left: "43%"
})
tl.to(".fe",{
  scrub:true,
  duration:2,
  top: "8%",
  left: "6%"
})
tl.to(".me",{
  scrub:true,
  duration:2,
  top: "75%",
  left: "2%"
})
tl.to(".se",{
  scrub:true,
  duration:2,
  top: "35%",
  left: "1%",
  width:"30%",
  scale:.8,
})
tl.to(".big",{
  scrub:true,
  duration:2,
  scale: 1.1,
  left : "51%",
  top:"50%",
  transform:"translate(-50%,-50%)"
})
tl.to(".ro",{
  scrub:true,
  duration:2,
  top: "65%",
  right: "0%",
  width:"25%"
})  
    
  
  }, []);
  return (
    <div ref={boxRef} className='w-full h-screen bg-black'>
      <h3 className='text-white dop text-center ' >Vote with Trust, <br /> Count with Confidence.</h3>
      <div className='w-full h-full relative'>
        <img className='io le' src="https://images.unsplash.com/photo-1639475377520-b256a5d204b1?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img  className='io re' src="https://plus.unsplash.com/premium_photo-1708598525588-eae2b2d05a9e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className='io fe' src="https://plus.unsplash.com/premium_photo-1705317716028-ceaa9f2d1786?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className='io  me' src="https://plus.unsplash.com/premium_photo-1708345949282-4bed1d05cd61?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className='io big' src="https://images.unsplash.com/photo-1604367463733-dff5a4517e9d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className='io se' src="https://images.unsplash.com/photo-1597701218190-ace198957ff6?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className='io ro' src="https://images.unsplash.com/photo-1642261366979-704a073bef4b?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        
      </div>
    </div>
  );
}

export default Page;
