import { useState, useEffect } from "react";

const images = [
  "/assets/watch1.webp",
  "/assets/watch2.jpeg",
  "/assets/watch3.webp",
  "/assets/watch4.jpg",
  "/assets/watch5.jpg",
  "/assets/watch6.jpg"
];

export const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[600px] w-full overflow-hidden shadow-2xl">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Luxury Watches"
          className={`
            absolute w-full h-full object-cover transition-opacity duration-1000
            ${index === currentIndex ? "opacity-100" : "opacity-0"}
          `}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-6xl font-extrabold text-zinc-200 drop-shadow-2xl">
          Timeless Luxury
        </h1>
        <p className="text-zinc-200/80 mt-4 text-xl md:text-2xl drop-shadow-2xl">
          Discover our curated watch collection
        </p>
        <button className="mt-6 px-8 py-3 bg-accent text-light shadow-2xl font-bold rounded-lg hover:bg-hover transition">
          Shop Collection
        </button>
      </div>
    </div>
  );
};
