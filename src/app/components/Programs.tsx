import { Package, Utensils, HandHeart, Users } from "lucide-react";

export function Programs() {
  const programs = [
    {
      icon: Package,
      title: "Food Distribution",
      description: "We distribute essential food items including bags of rice, sugar, onions, and potatoes to households that would otherwise have nothing to eat.",
      color: "bg-[#FF8C00]",
    },
    {
      icon: Utensils,
      title: "Hot Meal Service",
      description: "We serve nutritious cooked lunches to the less privileged, offering not just a meal, but a moment of warmth and human connection.",
      color: "bg-[#76B82A]",
    },
    {
      icon: Users,
      title: "Widow Support",
      description: "Special programs dedicated to supporting widows struggling to provide for their children, ensuring they have access to food and essential resources.",
      color: "bg-[#0066CC]",
    },
    {
      icon: HandHeart,
      title: "Community Outreach",
      description: "Regular outreach programs connecting with the most vulnerable in our communities, ensuring no one is forgotten or left behind.",
      color: "bg-[#008B8B]",
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0066CC] mb-4">
              Our Programs
            </h2>
            <div className="w-24 h-1 bg-[#FF8C00] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Making a difference through comprehensive support programs for the most vulnerable
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className={`${program.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{program.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
