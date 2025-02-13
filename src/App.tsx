import React from 'react';
import { Gift as GiftBox, ShoppingBag, Star } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-black text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="font-playfair text-2xl">Maison du Chocolat</h1>
          <div className="flex gap-8 font-montserrat">
            <a href="#collection" className="hover:text-gold">Collection</a>
            <a href="#about" className="hover:text-gold">About</a>
            <a href="#contact" className="hover:text-gold">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[80vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&q=80"
            alt="Luxury Gift Box"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h2 className="font-playfair text-6xl mb-6">Artisanal Chocolate Boxes</h2>
            <p className="font-montserrat text-xl mb-8">Experience the finest handcrafted chocolates, created with passion and precision.</p>
            <button className="bg-gold px-8 py-3 text-black font-montserrat hover:bg-gold-dark transition-colors">
              Explore Collection
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <GiftBox className="w-12 h-12 mx-auto mb-4 text-gold" />
              <h3 className="font-playfair text-xl mb-2">Luxury Packaging</h3>
              <p className="font-montserrat text-sm text-gray-300">Elegantly presented in our signature boxes</p>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 mx-auto mb-4 text-gold" />
              <h3 className="font-playfair text-xl mb-2">Premium Quality</h3>
              <p className="font-montserrat text-sm text-gray-300">Using the finest ingredients</p>
            </div>
            <div className="text-center">
              <ShoppingBag className="w-12 h-12 mx-auto mb-4 text-gold" />
              <h3 className="font-playfair text-xl mb-2">Global Shipping</h3>
              <p className="font-montserrat text-sm text-gray-300">Delivered to your doorstep</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl text-center mb-12">Signature Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1526081347589-7fa3cb41b4b2?auto=format&fit=crop&q=80" 
                  alt="Classic Collection"
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all"></div>
              </div>
              <div className="mt-4 flex flex-col items-start">
                <h3 className="font-playfair text-2xl">Classic Collection</h3>
                <p className="font-montserrat text-gray-600 mb-4">24 pieces</p>
                <button className="border-2 border-gold text-gold px-6 py-2 hover:bg-gold hover:text-black transition-colors font-montserrat">
                  Request Price
                </button>
              </div>
            </div>
            <div className="group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&q=80" 
                  alt="Gold Collection"
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all"></div>
              </div>
              <div className="mt-4 flex flex-col items-start">
                <h3 className="font-playfair text-2xl">Gold Collection</h3>
                <p className="font-montserrat text-gray-600 mb-4">36 pieces</p>
                <button className="border-2 border-gold text-gold px-6 py-2 hover:bg-gold hover:text-black transition-colors font-montserrat">
                  Request Price
                </button>
              </div>
            </div>
            <div className="group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&q=80" 
                  alt="Luxury Collection"
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all"></div>
              </div>
              <div className="mt-4 flex flex-col items-start">
                <h3 className="font-playfair text-2xl">Luxury Collection</h3>
                <p className="font-montserrat text-gray-600 mb-4">48 pieces</p>
                <button className="border-2 border-gold text-gold px-6 py-2 hover:bg-gold hover:text-black transition-colors font-montserrat">
                  Request Price
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-playfair text-xl mb-4">Contact</h4>
              <p className="font-montserrat text-sm text-gray-300">123 Chocolate Avenue</p>
              <p className="font-montserrat text-sm text-gray-300">New York, NY 10001</p>
              <p className="font-montserrat text-sm text-gray-300">+1 (555) 123-4567</p>
            </div>
            <div>
              <h4 className="font-playfair text-xl mb-4">Hours</h4>
              <p className="font-montserrat text-sm text-gray-300">Monday - Friday: 9am - 8pm</p>
              <p className="font-montserrat text-sm text-gray-300">Saturday: 10am - 6pm</p>
              <p className="font-montserrat text-sm text-gray-300">Sunday: 11am - 5pm</p>
            </div>
            <div>
              <h4 className="font-playfair text-xl mb-4">Newsletter</h4>
              <p className="font-montserrat text-sm text-gray-300 mb-4">Subscribe for exclusive offers and updates</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white text-black px-4 py-2 w-full"
                />
                <button className="bg-gold px-6 text-black font-montserrat hover:bg-gold-dark transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="font-montserrat text-sm text-gray-300">© 2024 Maison du Chocolat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;