export default function Footer() {
  return (
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
  );
}