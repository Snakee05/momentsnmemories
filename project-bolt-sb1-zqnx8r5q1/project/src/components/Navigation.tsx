import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="font-playfair text-2xl">Moments&Memories</Link>
        <div className="flex gap-8 font-montserrat">
          <Link to="/collection" className="hover:text-gold">Collection</Link>
          <Link to="/about" className="hover:text-gold">About</Link>
          <Link to="/contact" className="hover:text-gold">Contact</Link>
        </div>
      </div>
    </nav>
  );
}