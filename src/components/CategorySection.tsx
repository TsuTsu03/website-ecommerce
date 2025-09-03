import React from "react";

const categories = [
  {
    name: "Rolex",
    image: "src/assets/rolex.webp"
  },
  {
    name: "Omega",
    image: "src/assets/omega.png"
  },
  {
    name: "Patek",
    image: "src/assets/patek.jpeg"
  }
];

export const CategorySection = () => (
  <div className="bg-zinc-200 px-6 py-12 shadow-lg m-2 rounded-xl">
    <h2 className="text-4xl font-bold mb-8 text-center">Shop by Brand</h2>
    <div className="flex justify-center gap-6">
      {categories.map((cat) => (
        <div
          key={cat.name}
          className="relative min-w-[250px] rounded-xl overflow-hidden shadow-2xl hover:scale-105 transform transition"
        >
          <img
            src={cat.image}
            alt={cat.name}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-white/10 backdrop-blur-md flex items-end p-4 opacity-0 hover:opacity-100 transition">
            <span className="text-light text-xl font-bold">{cat.name}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);
