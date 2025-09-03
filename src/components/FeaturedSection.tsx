import { ProductCard } from "./ProductCard";

const products = [
  {
    name: "Rolex Submariner",
    price: "$12,000",
    image: "src/assets/Rolex Submariner.webp"
  },
  {
    name: "Omega Seamaster",
    price: "$8,500",
    image: "src/assets/omega-seamaster.webp"
  },
  {
    name: "Patek Philippe",
    price: "$25,000",
    image: "src/assets/montres-patek-philippe.webp"
  }
];

export const FeaturedProducts = () => (
  <div className="bg-zinc-200 px-6 py-12 shadow-lg m-2 rounded-xl">
    <h2 className="text-4xl font-bold mb-8 text-center">Featured Watches</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {products.map((p) => (
        <ProductCard key={p.name} {...p} />
      ))}
    </div>
  </div>
);
