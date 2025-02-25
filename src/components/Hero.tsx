import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

export default function Hero({ handleVisibility = () => {} }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url('/images/background.jpg')` }}
      ></div>

      {/* Main Content */}
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-12 items-center md:gap-6 px-4 sm:px-6 lg:px-8 relative z-10 min-h-screen">
        {/* Text Section */}
        <div className="col-span-12 lg:col-span-6 text-center lg:text-left flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl my-4 font-bold tracking-wide">
            Heading One
          </h1>
          <h3 className="text-lg sm:text-xl lg:text-2xl mt-2">
            Sub-heading: This is the sub-heading to the Heading.
          </h3>

          {/* Input & Button */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
            <input
              type="text"
              className="w-full px-4 sm:px-6 py-3 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter something..."
            />
            <button
              onClick={handleVisibility}
              className="bg-gray-100 hover:bg-gray-200 font-semibold text-black px-6 py-3 rounded-md transition flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <FiSearch size={20} className="text-gray-800" />
              Search
            </button>
          </div>
        </div>

        {/* Image Section (Smaller on Mobile) */}
        <div className="flex col-span-12 lg:col-span-6 justify-center lg:justify-end relative w-full mx-auto lg:mx-0">
          <div className="w-60 sm:w-60 md:w-80 lg:w-auto">
            <Image
              src="/images/tree1.png"
              alt="Hero Image"
              width={400}
              height={400}
              layout="intrinsic"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <div className="absolute inset-x-0 bottom-8 flex justify-center z-10">
        <button className="flex items-center justify-center w-12 h-12 text-white border-2 border-white rounded-full">
          <MdKeyboardArrowDown size={24} />
        </button>
      </div>
    </div>
  );
}
