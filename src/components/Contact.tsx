import { useEffect, useState, useRef } from "react";
import { FiExternalLink } from "react-icons/fi";

export default function Contact({ isVisible = false, onClose = () => {} }) {
  const [animateText, setAnimateText] = useState(false);
  const modalRef = useRef(null);

  // Close when clicking outside the modal
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !(modalRef.current as HTMLElement).contains(event.target as Node)
      ) {
        onClose();
      }
    }

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible, onClose]);

  // Animation trigger
  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setAnimateText(true), 200);
    } else {
      setAnimateText(false);
    }
  }, [isVisible]);

  return (
    <div
      className={`fixed inset-0 z-40 flex justify-center items-center bg-black/30 backdrop-blur-md transition-opacity duration-500 ease-in-out ${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Main Contact Modal */}
      <div
        ref={modalRef}
        className={`bg-white p-6 w-[90vw] md:w-[80vw] lg:max-w-5xl h-[70vh] md:h-[60vh]  shadow-lg 
        transition-all duration-[500ms] ease-linear 
        ${animateText ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
      >
        <section className="min-h-[100%] flex flex-col justify-between items-center w-full px-4 md:px-6">
          {/* Top Section */}
          <div
            className={`text-xs md:text-sm font-mono flex flex-col md:flex-row md:justify-between w-full transition-all duration-700 ease-out ${
              animateText
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div>
              <p>
                <span>CONTACT-</span>
                <span>US</span>
              </p>
            </div>
            <div>
              <p className="font-semibold">DESIGNER</p>
            </div>
            <div className="mt-4 md:mt-0">
              <p>150004, Gurugram</p>
              <p>DLF Phase 3</p>
              <hr
                className={`border-t border-black mb-4 transition-all duration-700 ease-linear ${
                  isVisible ? "w-1/2" : "w-0"
                }`}
              />
              <div className="space-y-1">
                {[
                  { name: "INSTAGRAM", link: "https://www.instagram.com" },
                  { name: "LINKEDIN", link: "https://www.linkedin.com" },
                  { name: "TWITTER", link: "https://www.twitter.com" },
                ].map((platform, index) => (
                  <a
                    key={index}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-mono tracking-wide flex items-center gap-1 transition-all duration-700 ease-out delay-${
                      index * 100
                    } ${
                      animateText
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    {platform.name} <FiExternalLink size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Section */}
          <div
            className={`text-xs md:text-sm font-semibold font-mono w-full text-center mb-2 transition-all duration-1000 ease-out delay-700 ${
              animateText
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <h3>This is a designer template and</h3>
            <h3>Some texts are being used to display this component!</h3>
          </div>

          <hr className="border-t border-black mb-6 md:mb-10 w-full" />

          {/* Bottom Section */}
          <div
            className={`flex flex-col md:flex-row justify-between items-center w-full text-xs space-y-4 md:space-y-0 md:space-x-10 font-mono transition-all duration-1000 ease-out delay-1000 ${
              animateText
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            {[1, 2].map((item) => (
              <div
                key={item}
                className="flex flex-col md:flex-row justify-between w-full"
              >
                <div className="text-center md:text-left">Himanshu</div>
                <div className="text-center md:text-right">
                  <p>ART like never before</p>
                  <p>Badrinath, Uttarakhand</p>
                  <p>+91 7017502703</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
