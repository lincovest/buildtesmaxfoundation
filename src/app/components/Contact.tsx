import { Phone, Mail, MapPin, Heart, DollarSign, Smartphone } from "lucide-react";
import logo from "figma:asset/8acf55fb9120c2cce801e70c8ff1b0b90b3f212e.png";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0066CC] mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-[#FF8C00] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us in our mission to restore hope and dignity. Every contribution, big or small, makes a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
                <img 
                  src={logo} 
                  alt="Tesmax Foundation" 
                  className="w-32 h-32 mx-auto mb-6"
                />
                <h3 className="text-2xl font-bold text-[#0066CC] mb-6 text-center">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#FF8C00] p-3 rounded-full">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <a href="tel:+2203796486" className="text-gray-700 hover:text-[#FF8C00] transition-colors">
                        +220 3796486
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#0066CC] p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                      <p className="text-gray-700">Kotu Layout, KSMD</p>
                      <p className="text-gray-700">The Gambia</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#0066CC] to-[#0052A3] text-white p-8 rounded-2xl shadow-lg mb-8">
                <DollarSign className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Donation Information</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-blue-100 mb-2">Bank Name:</p>
                    <p className="font-semibold text-lg">FirstBank Gambia Limited</p>
                  </div>
                  
                  <div>
                    <p className="text-blue-100 mb-2">Account Name:</p>
                    <p className="font-semibold">The Tesmax Foundation</p>
                  </div>
                  
                  <div className="border-t border-blue-400/30 pt-4">
                    <p className="text-blue-100 mb-2">GMD Account:</p>
                    <p className="font-semibold text-lg font-mono">202301000405420</p>
                  </div>
                  
                  <div>
                    <p className="text-blue-100 mb-2">USD Account:</p>
                    <p className="font-semibold text-lg font-mono">202201000087362</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#FF8C00] to-[#e67e00] text-white p-8 rounded-2xl shadow-lg">
                <Smartphone className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Wave Money</h3>
                <p className="text-orange-100 mb-2">Send donations via Wave:</p>
                <a href="tel:+2203796486" className="font-semibold text-2xl font-mono block hover:underline">
                  +220 3796486
                </a>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-[#0066CC] mb-6">Send Us a Message</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C00]"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C00]"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C00]"
                      placeholder="+220..."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C00]"
                      placeholder="How would you like to help or get involved?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#FF8C00] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#e67e00] transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}