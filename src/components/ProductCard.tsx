import React from "react";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  image
}) => (
  <div className="relative group rounded-xl overflow-hidden shadow-2xl hover:shadow-4xl transition transform hover:scale-105">
    <img
      src={image}
      alt={name}
      className="w-full h-80 object-cover rounded-xl"
    />
    <div className="absolute inset-0 bg-white/10 backdrop-blur-md flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition">
      <h3 className="text-xl font-semibold text-accent">{name}</h3>
      <p className="text-lg text-primary mt-1">{price}</p>
      <button className="mt-3 px-4 py-2 bg-accent text-light rounded-lg font-bold hover:bg-hover transition">
        Add to Cart
      </button>
    </div>
  </div>
);
