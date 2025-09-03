export const Footer = () => (
  <footer className="bg-primary text-light px-6 py-12">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
      <div>
        <h3 className="text-2xl font-bold mb-4 text-accent">Luxury Watches</h3>
        <p className="text-light/80">
          Curated luxury watches for the modern collector.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold text-accent">Quick Links</h4>
        <a href="#" className="hover:text-hover transition">
          Home
        </a>
        <a href="#" className="hover:text-hover transition">
          Shop
        </a>
        <a href="#" className="hover:text-hover transition">
          About
        </a>
        <a href="#" className="hover:text-hover transition">
          Contact
        </a>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold text-accent">Follow Us</h4>
        <div className="flex gap-4">
          <a href="#" className="hover:text-hover transition">
            FB
          </a>
          <a href="#" className="hover:text-hover transition">
            IG
          </a>
          <a href="#" className="hover:text-hover transition">
            TW
          </a>
        </div>
      </div>
    </div>
    <p className="text-center mt-8 text-light/60">
      &copy; 2025 Luxury Watches. All rights reserved.
    </p>
  </footer>
);
