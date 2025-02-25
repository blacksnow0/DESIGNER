export default function LuxuryGallery() {
  const images = [
    {
      src: "/images/saka.jpeg",
      alt: "BMW M Series",
      caption: "Precision meets elegance.",
    },
    {
      src: "/images/berserk.jpeg",
      alt: "Classic BMW",
      caption: "Timeless beauty on wheels.",
    },
    {
      src: "/images/kanye.jpeg",
      alt: "Dodge Challenger",
      caption: "Muscle car dominance.",
    },
    {
      src: "/images/treking.jpeg",
      alt: "Chevrolet Corvette",
      caption: "Raw power and speed.",
    },
    {
      src: "/images/doom.jpeg",
      alt: "Porsche 911",
      caption: "German engineering at its best.",
    },
  ];

  return (
    <div
      className="min-h-screen px-6 py-12"
      style={{
        background: `linear-gradient(
          rgba(200, 230, 255, 0) 0%,       /* Ultra-light sky blue, fully transparent */
          rgba(170, 210, 255, 0.6) 19.27%, /* Soft sky blue with 60% opacity */
          rgba(170, 210, 255, 0.6) 88.54%, /* Consistent soft sky blue */
          rgba(200, 230, 255, 0) 100%      /* Ultra-light sky blue, fading out */
        )`,
      }}
    >
      {/* Header */}
      <h3 className="text-sm  text-gray-800 font-mono text-center mb-4">
        कला (ART OF MOTION)
      </h3>
      <div className="text-center mb-12">
        <h3 className="text-3xl italic text-gray-800 font-serif">
          3 is the MAGIC NUMBER
        </h3>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-11 gap-6 min-h-[50vh]">
        <div className="col-span-2 -mb-24 mt-24 relative group transition-transform duration-500 ease-out transform hover:scale-110">
          {/* Background Image */}
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${images[0].src})`,
            }}
          ></div>

          {/* Caption with smooth move-up effect */}
          <p className="text-xs font-semibold mt-2 font-mono text-gray-800 transition-all duration-500 ease-out group-hover:-translate-y-4 group-hover:opacity-0">
            {images[0].caption}
          </p>

          {/* Hover Overlay with Animation */}
          <div
            className="absolute font-mono inset-4 bg-white bg-opacity-90 flex flex-col items-start justify-center 
          opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 
          transition-all duration-500 ease-out px-1"
          >
            <p className="text-black text-lg font-semibold">{images[0].alt}</p>
            <p className="text-black text-xs mt-2">{images[0].caption}</p>
          </div>
        </div>

        <div className="col-span-2 mt-20  relative group transition-transform duration-500 ease-out transform hover:scale-110">
          {/* Background Image */}
          <div
            className="w-full h-full bg-cover bg-center "
            style={{
              backgroundImage: `url(${images[1].src})`,
            }}
          ></div>
          <p className="text-xs font-semibold mt-2 font-mono text-gray-800 transition-all duration-500 ease-out group-hover:-translate-y-4 group-hover:opacity-0">
            {images[1].caption}
          </p>

          {/* Hover Overlay with Animation */}
          <div
            className="absolute font-mono inset-4 bg-white bg-opacity-90 flex flex-col items-start justify-center 
                  opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 
                  transition-all duration-500 ease-out px-1"
          >
            <p className="text-black text-lg font-semibold">{images[1].alt}</p>
            <p className="text-black text-xs mt-2">{images[1].caption}</p>
          </div>
        </div>

        {/* Middle Image - Larger & Centered */}
        <div className="col-span-3 mt-0 relative group transition-transform duration-500 ease-out transform hover:scale-110">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${images[2].src})`,
            }}
          ></div>
          <p className="text-xs font-semibold mt-2 font-mono text-gray-800 transition-all duration-500 ease-out group-hover:-translate-y-4 group-hover:opacity-0">
            {images[2].caption}
          </p>

          {/* Hover Overlay with Animation */}
          <div
            className="absolute font-mono inset-4 bg-white bg-opacity-90 flex  flex-col items-start justify-center 
                  opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 
                  transition-all duration-500 ease-out px-1"
          >
            <p className="text-black text-lg font-semibold">{images[2].alt}</p>
            <p className="text-black text-xs mt-2">{images[2].caption}</p>
          </div>
        </div>

        <div className="col-span-2 mt-20 relative group transition-transform duration-500 ease-out transform hover:scale-110">
          {/* Background Image */}
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${images[3].src})`,
            }}
          ></div>
          <p className="text-xs font-semibold mt-2 font-mono text-gray-800 transition-all duration-500 ease-out group-hover:-translate-y-4 group-hover:opacity-0">
            {images[3].caption}
          </p>

          {/* Hover Overlay with Animation */}
          <div
            className="absolute font-mono inset-4 bg-white bg-opacity-90 flex flex-col items-start justify-center 
                  opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 
                  transition-all duration-500 ease-out px-1"
          >
            <p className="text-black text-lg font-semibold">{images[3].alt}</p>
            <p className="text-black text-xs mt-2">{images[3].caption}</p>
          </div>
        </div>

        <div className="col-span-2 mt-24 -mb-20 relative group transition-transform duration-500 ease-out transform hover:scale-110">
          {/* Background Image */}
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${images[4].src})`,
            }}
          ></div>
          <p className="text-xs font-semibold mt-2 font-mono text-gray-800 transition-all duration-500 ease-out group-hover:-translate-y-4 group-hover:opacity-0">
            {images[4].caption}
          </p>

          {/* Hover Overlay with Animation */}
          <div
            className="absolute font-mono inset-4 bg-white bg-opacity-90 flex flex-col items-start justify-center 
                  opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 
                  transition-all duration-500 ease-out px-1"
          >
            <p className="text-black text-lg font-semibold">{images[4].alt}</p>
            <p className="text-black text-xs mt-2">{images[4].caption}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
