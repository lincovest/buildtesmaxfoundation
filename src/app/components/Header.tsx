import { Phone } from "lucide-react";
import logo from "figma:asset/8acf55fb9120c2cce801e70c8ff1b0b90b3f212e.png";

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Tesmax Foundation Logo" className="h-16 w-16 object-contain" />
            <div>
              <h1 className="text-xl font-bold text-[#0066CC]">TESMAX FOUNDATION</h1>
              <p className="text-sm text-gray-600">Restoring Hope & Dignity</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-[#FF8C00] transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-[#FF8C00] transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("programs")} className="text-gray-700 hover:text-[#FF8C00] transition-colors">
              Programs
            </button>
            <button onClick={() => scrollToSection("impact")} className="text-gray-700 hover:text-[#FF8C00] transition-colors">
              Impact
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-[#FF8C00] transition-colors">
              Contact
            </button>
          </nav>

          <a
            href="tel:+2203796486"
            className="flex items-center gap-2 bg-[#FF8C00] text-white px-6 py-3 rounded-full hover:bg-[#e67e00] transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>+220 3796486</span>
          </a>
        </div>
      </div>
    </header>
  );
}
