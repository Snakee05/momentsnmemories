export default function Collection() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&q=80"
            alt="Luxury Chocolate Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="font-playfair text-6xl mb-6">Our Collections</h1>
            <p className="font-montserrat text-xl">Discover our curated selection of artisanal chocolates</p>
          </div>
        </div>
      </div>

      {/* Collections Grid */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="group">
              <div className="relative h-[500px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1526081347589-7fa3cb41b4b2?auto=format&fit=crop&q=80"
                  alt="Classic Collection"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all"></div>
              </div>
              <div className="mt-6">
                <h2 className="font-playfair text-3xl mb-3">Classic Collection</h2>
                <p className="font-montserrat text-gray-600 mb-4">
                  Our signature collection featuring 24 handcrafted chocolates. A perfect balance of traditional and contemporary flavors.
                </p>
                <button className="border-2 border-gold text-gold px-6 py-2 hover:bg-gold hover:text-black transition-colors font-montserrat">
                  Request Price
                </button>
              </div>
            </div>

            <div className="group">
              <div className="relative h-[500px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&q=80"
                  alt="Gold Collection"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all"></div>
              </div>
              <div className="mt-6">
                <h2 className="font-playfair text-3xl mb-3">Gold Collection</h2>
                <p className="font-montserrat text-gray-600 mb-4">
                  36 pieces of our most luxurious chocolates, featuring rare single-origin cocoa and premium ingredients.
                </p>
                <button className="border-2 border-gold text-gold px-6 py-2 hover:bg-gold hover:text-black transition-colors font-montserrat">
                  Request Price
                </button>
              </div>
            </div>

            <div className="group">
              <div className="relative h-[500px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&q=80"
                  alt="Luxury Collection"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all"></div>
              </div>
              <div className="mt-6">
                <h2 className="font-playfair text-3xl mb-3">Luxury Collection</h2>
                <p className="font-montserrat text-gray-600 mb-4">
                  Our most exclusive offering with 48 pieces, perfect for special occasions and corporate gifting.
                </p>
                <button className="border-2 border-gold text-gold px-6 py-2 hover:bg-gold hover:text-black transition-colors font-montserrat">
                  Request Price
                </button>
              </div>
            </div>

            <div className="group">
              <div className="relative h-[500px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1549007953-2f2dc0b24019?auto=format&fit=crop&q=80"
                  alt="Seasonal Collection"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all"></div>
              </div>
              <div className="mt-6">
                <h2 className="font-playfair text-3xl mb-3">Seasonal Collection</h2>
                <p className="font-montserrat text-gray-600 mb-4">
                  Limited edition chocolates inspired by the seasons, featuring unique flavors and artistic presentations.
                </p>
                <button className="border-2 border-gold text-gold px-6 py-2 hover:bg-gold hover:text-black transition-colors font-montserrat">
                  Request Price
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}