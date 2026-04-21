import { Heart } from "lucide-react";
import logo from "figma:asset/8acf55fb9120c2cce801e70c8ff1b0b90b3f212e.png";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0066CC] to-[#0052A3] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="Tesmax Foundation" className="h-16 w-16" />
                <div>
                  <h3 className="font-bold text-xl">TESMAX FOUNDATION</h3>
                  <p className="text-blue-100 text-sm">Restoring Hope & Dignity</p>
                </div>
              </div>
              <p className="text-blue-100 leading-relaxed">
                A non-profit charitable organization dedicated to ensuring no widow feels forgotten 
                and no needy person goes to bed hungry.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Our Mission</h4>
              <ul className="space-y-2 text-blue-100">
                <li>• Food Distribution Programs</li>
                <li>• Hot Meal Services</li>
                <li>• Widow Support</li>
                <li>• Community Outreach</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <div className="space-y-2 text-blue-100">
                <p>Kotu Layout, KSMD</p>
                <p>The Gambia</p>
                <p>Phone: +220 3796486</p>
                <p>Wave: +220 3796486</p>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-400/30 pt-8 text-center">
            <p className="text-blue-100 flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-[#FF8C00] fill-current" /> by Tesmax Foundation © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}