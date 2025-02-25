import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

export default function Hero({ handleVisibility = () => {} }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url('/images/background.jpg')` }}
      ></div>

      {/* Main Content */}
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-12 items-center gap-8 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Text Section */}
        <div className="col-span-12 lg:col-span-6 text-center lg:text-left break-words">
          <h1 className="text-5xl sm:text-5xl lg:text-6xl my-4 font-sans tracking-wide font-bold">
            Heading One
          </h1>
          <h3 className="text-xl sm:text-xl lg:text-2xl mt-2">
            Sub-heading: This is the sub-heading to the Heading.
          </h3>

          {/* Input & Button */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 w-full max-w-md sm:max-w-lg">
            <input
              type="text"
              className="w-full sm:flex-1 px-4 sm:px-6 py-3 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter something..."
            />
            <button
              onClick={handleVisibility}
              className="bg-gray-100 hover:bg-gray-200 font-semibold text-black px-6 py-3 rounded-md transition w-full sm:w-auto flex items-center gap-2"
            >
              <FiSearch size={20} className="text-gray-800" />
              Search
            </button>
          </div>
        </div>

        {/* Image Section (Hidden on Mobile) */}
        <div className="col-span-12 lg:col-span-6 hidden lg:block relative w-full max-w-lg lg:max-w-xl h-[400px]">
          <Image
            src="/images/tree2.png"
            alt="Hero Image"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>

      {/* Scroll Down Button */}
      <div className="absolute inset-x-0 bottom-8 flex justify-center z-10">
        <button className="flex items-center justify-center w-10 h-10 text-white border-2 border-white rounded-full ">
          <MdKeyboardArrowDown size={20} />
        </button>
      </div>
    </div>
  );
}
