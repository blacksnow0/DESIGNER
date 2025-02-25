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
      className="min-h-screen px-4 py-10 md:px-6 md:py-12"
      style={{
        background: `linear-gradient(
          rgba(220, 240, 255, 0.1) 0%,      /* Very subtle pastel blue */
          rgba(200, 230, 255, 0.3) 20%,    /* Slightly deeper sky blue */
          rgba(200, 230, 255, 0.3) 80%,    /* Keep it soft & balanced */
          rgba(220, 240, 255, 0.1) 100%    /* Fades out for a light feel */
        )`,
      }}
    >
      {/* Header */}
      <h3 className="text-sm text-gray-800 font-mono text-center mb-4">
        कला (ART OF MOTION)
      </h3>
      <div className="text-center mb-8 md:mb-12">
        <h3 className="text-2xl md:text-3xl italic text-gray-800 font-serif">
          3 is the MAGIC NUMBER
        </h3>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-11 gap-6 min-h-[50vh]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative group transition-transform duration-500 ease-out transform hover:scale-105 ${
              index === 2 ? "lg:col-span-3" : "lg:col-span-2"
            } ${
              index % 2 !== 0
                ? "sm:mt-6 lg:mt-20"
                : "sm:mt-0 lg:mt-24 lg:-mb-20 "
            } `}
          >
            {/* Background Image */}
            <div
              className="w-full h-60 sm:h-72 md:h-80 lg:h-full bg-cover bg-center aspect-[4/3]"
              style={{
                backgroundImage: `url(${image.src})`,
              }}
            ></div>

            {/* Caption with Mobile Support */}
            <p className="text-xs font-semibold mt-2 font-mono text-gray-800 text-center sm:text-left transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:opacity-0">
              {image.caption}
            </p>

            {/* Hover Overlay (also visible on mobile) */}
            <div
              className="absolute inset-4 bg-white bg-opacity-70 flex flex-col items-start justify-center px-2 py-2 
            opacity-100 scale-100 lg:opacity-0 lg:scale-0 group-hover:opacity-100 group-hover:scale-100 
            transition-all duration-500 ease-out "
            >
              <p className="text-black text-lg font-semibold">{image.alt}</p>
              <p className="text-black text-xs mt-1">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
