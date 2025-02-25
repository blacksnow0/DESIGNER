import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Gallery() {
  const images = [
    "latest.jpg",
    "saka.jpeg",
    "berserk.jpeg",
    "kanye.jpeg",
    "doom.jpeg",
    "back.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  const nextImage = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="relative lg:min-h-screen flex flex-col items-center justify-center text-white bg-center bg-cover bg-no-repeat transition-all ease-linear"
      style={{ backgroundImage: `url(/images/${images[currentIndex]})` }}
    >
      {/* Background Blur */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-lg"></div>

      {/* Gallery Heading */}
      <h1 className="relative z-10 text-3xl font-mono mb-6">Gallery!</h1>

      {/* Gallery Container */}
      <div className="relative w-[70vw] h-[60vh] overflow-hidden  border border-white/20">
        {/* Image Wrapper */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            className="absolute w-full h-full"
            initial={{ x: direction * 100 + "%" }}
            animate={{ x: "0%" }}
            exit={{ x: -direction * 100 + "%" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <Image
              src={`/images/${images[currentIndex]}`}
              alt="Gallery Image"
              width={800}
              height={500}
              className="object-cover w-full h-full "
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-4 right-4 flex space-x-4 z-10">
        <button
          onClick={prevImage}
          className="bg-white text-black p-3 rounded-full hover:bg-gray-300 transition"
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          onClick={nextImage}
          className="bg-white text-black p-3 rounded-full hover:bg-gray-300 transition"
        >
          <FiChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
