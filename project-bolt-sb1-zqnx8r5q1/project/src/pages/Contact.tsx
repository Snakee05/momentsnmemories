import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1481391319761-aad548574b37?auto=format&fit=crop&q=80"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="font-playfair text-6xl mb-6">Contact Us</h1>
            <p className="font-montserrat text-xl">We'd love to hear from you</p>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="font-playfair text-4xl mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <h3 className="font-playfair text-xl mb-2">Visit Us</h3>
                    <p className="font-montserrat text-gray-600">123 Chocolate Avenue</p>
                    <p className="font-montserrat text-gray-600">New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <h3 className="font-playfair text-xl mb-2">Call Us</h3>
                    <p className="font-montserrat text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <h3 className="font-playfair text-xl mb-2">Email Us</h3>
                    <p className="font-montserrat text-gray-600">info@momentsandmemories.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-playfair text-2xl mb-4">Opening Hours</h3>
                <div className="space-y-2 font-montserrat text-gray-600">
                  <p>Monday - Friday: 9am - 8pm</p>
                  <p>Saturday: 10am - 6pm</p>
                  <p>Sunday: 11am - 5pm</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="font-playfair text-3xl mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-montserrat text-sm text-gray-600 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-montserrat text-sm text-gray-600 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block font-montserrat text-sm text-gray-600 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-montserrat text-sm text-gray-600 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold text-black font-montserrat py-3 rounded-lg hover:bg-gold-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}