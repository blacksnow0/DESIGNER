"use client";

import { useState, useEffect } from "react";

export default function Visualizer() {
  const [array, setArray] = useState<number[]>([]);
  const [current, setCurrent] = useState<number | null>(null);
  const [comparing, setComparing] = useState<number | null>(null);

  useEffect(() => {
    generateArray();
  }, []);

  const insertionSort = async () => {
    const arr = [...array];
    const n = arr.length;

    for (let i = 1; i < n; i++) {
      const key = arr[i];
      let j = i - 1;

      setCurrent(i);
      await new Promise((resolve) => setTimeout(resolve, 300));

      while (j >= 0 && arr[j] > key) {
        setComparing(j);
        arr[j + 1] = arr[j];
        j--;
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 300));
      }

      arr[j + 1] = key;
      setArray([...arr]);
      setComparing(null);
    }

    setCurrent(null);
  };

  const bubbleSort = async () => {
    const arr = [...array];
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        setComparing(j);
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
          await new Promise((resolve) => setTimeout(resolve, 300));
        }
      }
    }
    setComparing(null);
  };

  const selectionSort = async () => {
    const arr = [...array];
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      let index = i;
      setCurrent(i);
      for (let j = i + 1; j < n; j++) {
        setComparing(j);
        if (arr[j] < arr[index]) {
          index = j;
        }
        await new Promise((resolve) => setTimeout(resolve, 300));
      }
      if (index !== i) {
        [arr[i], arr[index]] = [arr[index], arr[i]];
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 300));
      }
    }
    setCurrent(null);
    setComparing(null);
  };

  const generateArray = () => {
    const screenWidth = window.innerWidth;
    const arraySize = screenWidth < 768 ? 6 : 20;
    const newArray = Array.from({ length: arraySize }, () =>
      Math.floor(Math.random() * 300)
    );

    setArray(newArray);
  };

  return (
    <div className="h-screen flex flex-col space-y-6 items-center justify-center bg-pink-300 text-black px-4">
      <h1 className="font-mono text-lg md:text-2xl font-semibold text-center">
        ALGORITHM VISUALIZER
      </h1>
      <button
        onClick={generateArray}
        className="px-6 md:px-10 py-2 bg-red-500 hover:bg-red-600 rounded-md"
      >
        Generate Array
      </button>
      <div className="flex flex-col md:flex-row gap-3 md:gap-x-10">
        <button
          onClick={bubbleSort}
          className="px-6 md:px-10 py-2 bg-indigo-100 hover:bg-indigo-200 rounded-md"
        >
          Bubble Sort
        </button>
        <button
          onClick={selectionSort}
          className="px-6 md:px-10 py-2 bg-indigo-100 hover:bg-indigo-200 rounded-md"
        >
          Selection Sort
        </button>
        <button
          onClick={insertionSort}
          className="px-6 md:px-10 py-2 bg-indigo-100 hover:bg-indigo-200 rounded-md"
        >
          Insertion Sort
        </button>
      </div>
      <div className="flex gap-x-5 mt-10">
        {array.map((value, index) => (
          <div
            key={index}
            style={{ height: `${value}px` }}
            className={`w-10 ${
              index === current
                ? "bg-yellow-500"
                : index === comparing
                ? "bg-red-500"
                : "bg-orange-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
