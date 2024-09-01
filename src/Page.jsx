
import "./index.css"
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Page = () => {
  const boxRef = useRef(null);
  useEffect(() => {
    // Use GSAP ScrollTrigger to animate the element on scroll
    gsap.to(boxRef.current, {
      scrollTrigger: {
        trigger: boxRef.current, // Element that triggers the animation
        start: 'top 80%', // When the top of the box hits 80% from the top of the viewport
        end: 'top 20%', // When the top of the box hits 30% from the top of the viewport
        scrub: true,
         // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        markers: true, // Show markers for debugging (start and end positions)
      }// Duration of the animation
    });
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
