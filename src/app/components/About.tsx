import { Heart, Users, Utensils } from "lucide-react";

export function About() {
  const stats = [
    { icon: Heart, value: "1000+", label: "Families Helped" },
    { icon: Users, value: "500+", label: "Widows Supported" },
    { icon: Utensils, value: "5000+", label: "Meals Served" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0066CC] mb-4">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-[#FF8C00] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple yet profound mission: to ensure that no widow feels forgotten and no needy person goes to bed hungry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-[#0066CC] mb-4">Who We Are</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Tesmax Foundation is a non-profit charitable organization dedicated to restoring hope 
                and dignity to the most vulnerable members of our society in the Gambia. Since our inception, 
                we have been driven by compassion and the belief that every person deserves basic dignity.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Every day, we witness the harsh realities of poverty in our communities. We see widows 
                struggling to provide a single meal for their children, and we see the elderly and less 
                privileged foraging for scraps. In response to this urgent need, Tesmax Foundation has taken action.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0066CC] mb-4">What We Do</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We currently run comprehensive outreach programs that involve the distribution of essential 
                food items—including bags of rice, sugar, onions, and potatoes—to households that would 
                otherwise have nothing to eat.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Furthermore, we serve nutritious cooked lunches to the less privileged, offering not just 
                a meal, but a moment of warmth and human connection. Our work is about more than food—it's 
                about restoring dignity and hope to those who need it most.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-[#0066CC] to-[#0052A3] text-white p-8 rounded-2xl text-center shadow-lg"
                >
                  <Icon className="w-12 h-12 mx-auto mb-4" />
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
