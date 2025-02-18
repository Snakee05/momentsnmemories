export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80"
            alt="Chocolate Making Process"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="font-playfair text-6xl mb-6">Our Story</h1>
            <p className="font-montserrat text-xl">Crafting moments of pure indulgence since 1987</p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="font-playfair text-4xl mb-6">Our Heritage</h2>
              <p className="font-montserrat text-gray-600 mb-4">
                Founded in 1987, Moments&Memories has been crafting exceptional chocolate experiences for over three decades. Our journey began in a small Parisian-inspired workshop, where our founder's passion for artisanal chocolate-making took root.
              </p>
              <p className="font-montserrat text-gray-600">
                Today, we continue to honor traditional chocolate-making techniques while embracing innovation, creating unique flavors that tell stories and create lasting memories.
              </p>
            </div>
            <div className="relative h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&q=80"
                alt="Heritage"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 md:order-1 relative h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?auto=format&fit=crop&q=80"
                alt="Craftsmanship"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-playfair text-4xl mb-6">Our Craftsmanship</h2>
              <p className="font-montserrat text-gray-600 mb-4">
                Every piece of chocolate we create is a testament to our dedication to excellence. Our master chocolatiers combine years of expertise with the finest ingredients sourced from around the world.
              </p>
              <p className="font-montserrat text-gray-600">
                We believe in small-batch production, ensuring each creation receives the attention it deserves. From bean selection to the final garnish, every step is executed with precision and care.
              </p>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-playfair text-4xl mb-6">Our Promise</h2>
            <p className="font-montserrat text-gray-600 mb-8">
              We are committed to creating not just chocolates, but moments of joy and connection. Each box we craft carries with it our dedication to quality, creativity, and the art of chocolate-making.
            </p>
            <button className="bg-gold px-8 py-3 text-black font-montserrat hover:bg-gold-dark transition-colors">
              Explore Our Collections
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}