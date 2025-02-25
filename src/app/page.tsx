"use client";

import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { useState } from "react";
import ContactNew from "@/components/Contactnew";
import Gallery from "@/components/Gallery";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  function handleVisibility() {
    setIsVisible((prev) => !prev);
  }

  return (
    <div>
      <Navbar handleVisibility={handleVisibility} />
      <Hero handleVisibility={handleVisibility} />
      <Contact isVisible={isVisible} onClose={handleVisibility} />
      <ContactNew />
      <Gallery />
    </div>
  );
}
