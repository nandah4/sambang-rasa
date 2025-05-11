import { useState } from "react";
import image from "./../assets/hero1.WEBP";

const Explore = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    const x = ((clientX - left) / width - 0.5) * 20; // range -10 to 10
    const y = ((clientY - top) / height - 0.5) * 20; // range -10 to 10

    setPosition({ x, y });
  };
  return <>
  <p>Ini Explore</p>
  <main className="w-full h-dvh"></main>
  <main className="w-full h-dvh"></main>
  <main className="w-full h-dvh"></main>
  </>
};
export default Explore;
