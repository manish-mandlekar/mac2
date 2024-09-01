import { motion } from "framer-motion";
import React from "react";

const marque = () => {
  return (
    <div
      className="w-full h-fit py-28  bg-black  "
    >
      <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden  whitespace-nowrap ">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className=" text-[17vw] leading-none pr-20 uppercase font-bold text-white"
        >
          Decentralize Today, Decide Tomorrow.
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className=" text-[17vw] leading-none pr-20 uppercase font-bold text-white"
        >
          Decentralize Today, Decide Tomorrow.
        </motion.h1>
      </div>
    </div>
  );
};

export default marque;
