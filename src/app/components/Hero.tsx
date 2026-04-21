import { Heart } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-[#0066CC] to-[#0052A3] text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Restoring Hope & Dignity
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            No widow feels forgotten. No needy person goes to bed hungry.
          </p>
          <p className="text-lg mb-10 max-w-3xl mx-auto leading-relaxed">
            Since our inception, The Tesmax Foundation has been dedicated to serving the most vulnerable 
            members of our society in the Gambia. We provide essential food items, nutritious meals, 
            and most importantly—hope and human connection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="bg-[#FF8C00] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e67e00] transition-colors flex items-center justify-center gap-2"
            >
              <Heart className="w-5 h-5" />
              Support Our Cause
            </button>
            <button 
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-white text-[#0066CC] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#76B82A] rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#FF8C00] rounded-full opacity-20 blur-xl"></div>
    </section>
  );
}
