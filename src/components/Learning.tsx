"use client";

import { motion } from "motion/react";
import { ReactNode, useEffect, useState } from "react";

export default function Learning() {
  return (
    <section className="grid h-screen place-content-center gap-2 bg-lime-300 px-8 text-black">
      <FlipLinks href="#">Twitter</FlipLinks>
      <TextAnimation>This Is Working!</TextAnimation>
      <TypeWritter
        tag="/support"
        text={
          <>
            <strong>Have question?</strong> We would love to help! Contact
            support for any issue you may face.
          </>
        }
        examples={[
          "Does this work",
          "is does work",
          "workings...",
          "it Works!",
          "Progress...",
        ]}
      ></TypeWritter>
    </section>
  );
}

const DURATION = 0.2;
const STAGGER = 0.025;

function FlipLinks({ children, href }: { children: string; href: string }) {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap 
      text-4xl font-mono font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl "
    >
      <div>
        {children.split("").map((l, i) => {
          return (
            <motion.span
              key={i}
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
            >
              {l}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => {
          return (
            <motion.span
              className="inline-block"
              key={i}
              variants={{
                initial: { y: "100%" },
                hovered: { y: "0" },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
    </motion.a>
  );
}

function TextAnimation({ children }: { children: string }) {
  return (
    <motion.h1
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
      className="text-4xl font-mono font-black whitespace-nowrap overflow-hidden"
    >
      {children}
    </motion.h1>
  );
}

function TypeWritter({
  tag,
  text,
  examples,
}: {
  tag: string;
  text: ReactNode;
  examples: string[];
}) {
  return (
    <div className="w-full max-w-xl space-y-6">
      <div>
        <p className="mb-1.5 text-sm font-light uppercase">{tag}</p>
        <hr className="border-neutral-700"></hr>
        <p className="max-w-lg text-lg leading-relaxed">{text}</p>
      </div>
      <div>
        <Typewrite examples={examples} />
        <hr className="border-neutral-700"></hr>
      </div>
      <button
        className="w-full rounded-full border border-neutral-950 py-2 
      text-sm font-medium transition-colors hover:bg-neutral-950 hover:text-neutral-100"
      >
        Contact support
      </button>
    </div>
  );
}

const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;

const FADE_DELAY = 3;
const MAIN_FADE_DURATION = 0.25;

const SWAP_DELAY_IN_MS = 3500;

function Typewrite({ examples }: { examples: string[] }) {
  const [exampleIndex, setExampleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setExampleIndex((prev) => (prev + 1) % examples.length);
    }, SWAP_DELAY_IN_MS);

    return () => clearInterval(intervalId);
  });
  return (
    <p className="mb-2.5 text-sm font-light uppercase">
      <span className="inline-block size-2 bg-neutral-950" />
      <span className="ml-2">
        Examples:{" "}
        {examples[exampleIndex].split("").map((l, i) => {
          return (
            <motion.span
              className="relative"
              key={`${examples[exampleIndex]}-${i}`}
              initial={{
                opacity: 1,
              }}
              animate={{
                opacity: 0,
              }}
              transition={{
                delay: FADE_DELAY,
                duration: MAIN_FADE_DURATION,
                ease: "easeInOut",
              }}
            >
              <motion.span
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: i * LETTER_DELAY,
                  duration: 0,
                }}
              >
                {l}
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  delay: i * LETTER_DELAY,
                  times: [0, 0.1, 1],
                  duration: BOX_FADE_DURATION,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[3px] left-[1px] right-0 
              top-[3px] bg-neutral-950"
              ></motion.span>
            </motion.span>
          );
        })}
      </span>
    </p>
  );
}
