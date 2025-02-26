"use client";

import { motion } from "motion/react";

export default function Login() {
  console.log("this is working");
  console.log(motion);
  return (
    <div className="h-[400vh] flex justify-center items-center gap-3 bg-neutral-500 p-3">
      <motion.div
        // initial={{ opacity: 0, y: 500 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{ ease: "linear", duration: 1 }}
        className="flex flex-col flex-1 h-1/6 items-start justify-around p-6 bg-neutral-100"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-mono font-semibold"
        >
          Login to this component
        </motion.h1>
        <p className="text-lg font-sans text-neutral-500">
          Hey this is a great component
        </p>
      </motion.div>
      <motion.div
        // initial={{ opacity: 0, y: 500 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{ ease: "linear", duration: 0.3 }}
        className=" flex flex-col flex-1 h-1/6 items-start justify-around p-6 bg-neutral-100"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-mono font-semibold"
        >
          Login to this component
        </motion.h1>
        <p className="text-lg font-sans text-neutral-500">
          Hey this is a great component
        </p>
      </motion.div>
    </div>
  );
}
