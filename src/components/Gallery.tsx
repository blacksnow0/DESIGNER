"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function Gallery() {
  const images = [
    "saka.jpeg",
    "Berserk.jpeg",
    "kanye.jpeg",
    "doom.jpeg",
    "saka.jpeg",
    "Berserk.jpeg",
  ];
  const constrainRef = useRef<HTMLElement | null>(null);
  const [maxWidth, setMaxWidth] = useState(0);

  useEffect(() => {
    if (constrainRef.current) {
      const containerWidth = constrainRef.current.offsetWidth;
      const imageWidth = 450 * images.length;

      setMaxWidth(-(imageWidth - containerWidth));
    }
  }, []);

  // const imageVariants = {
  //   hidden: { opacity: 0, y: 150 },
  //   visible: (i: number) => ({
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.6,
  //       delay: i * 0.3,
  //       ease: "easeOut",
  //     },
  //   }),
  // };

  return (
    <motion.section
      ref={constrainRef}
      className="h-screen w-full overflow-hidden flex items-center bg-blue-300 pb-1/4"
    >
      <motion.div
        drag="x"
        dragConstraints={{ left: maxWidth + 50, right: 0 }}
        dragElastic={0.2}
        className="flex w-full gap-14 hover:cursor-grab active:cursor-grabbing"
        style={{
          minWidth: images.length * 450 + "px",
        }}
      >
        {images.map((image, index) => {
          return (
            <Image
              key={index}
              src={`/images/${image}`}
              alt={image}
              height={400}
              width={400}
              style={{
                objectFit: "cover",
              }}
              className="pointer-events-none"
            />
          );
        })}
      </motion.div>
    </motion.section>
  );
}

function Gallery2() {
  const images = [
    "saka.jpeg",
    "Berserk.jpeg",
    "kanye.jpeg",
    "doom.jpeg",
    "saka.jpeg",
    "Berserk.jpeg",
  ];

  const constraintRef = useRef<HTMLElement | null>(null);
  const [maxWidth, setMaxWidth] = useState(0);

  const length = images.length;

  useEffect(() => {
    if (constraintRef.current) {
      const imageWidth = images.length * 450;
      const containerWidth = constraintRef.current.offsetWidth;
      setMaxWidth(-(imageWidth - containerWidth));
    }
  }, [length]);

  return (
    <motion.section
      ref={constraintRef}
      className="h-screen w-full flex items-center overflow-hidden bg-blue-200"
    >
      <motion.div
        className="flex w-full gap-14 hover:cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: maxWidth, right: 0 }}
        style={{
          minWidth: images.length * 450 + "px",
        }}
      >
        {images.map((image, index) => {
          return (
            <Image
              key={index}
              src={`/images/${image}`}
              alt={image}
              height={400}
              width={400}
              style={{ objectFit: "cover" }}
              className="pointer-events-none"
            />
          );
        })}
      </motion.div>
    </motion.section>
  );
}

export { Gallery2 };
