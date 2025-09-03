import React from "react";

export const ProductDetails = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-gold mb-4">Rolex Submariner</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src="/images/rolex.jpg"
          alt="Rolex"
          className="w-full md:w-1/2 h-96 object-cover rounded-lg"
        />
        <div className="md:w-1/2 text-light-gold">
          <p className="text-lg mb-4">
            The Rolex Submariner is a classic luxury dive watch...
          </p>
          <p className="text-2xl font-bold text-gold mb-4">$12,000</p>
          <button className="px-6 py-3 bg-gold text-dark-green rounded hover:bg-light-gold transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
