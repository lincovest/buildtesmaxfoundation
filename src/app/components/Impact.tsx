import img1 from "figma:asset/d07ce0001a82bc077873f2068fc48494972cc8e1.png";
import img2 from "figma:asset/5edc4d0a5a1c45f5e8fdac067744e37cefadfcf3.png";
import img3 from "figma:asset/a5846b4bdcc5875febc2282dd2aa464dfd1f3de0.png";
import img4 from "figma:asset/82f20b2841bf800a6bb3888fb7c32f0f64d420de.png";

export function Impact() {
  const images = [
    {
      url: img1,
      alt: "Food distribution to widows and families in need",
    },
    {
      url: img2,
      alt: "Tesmax Foundation team supporting families",
    },
    {
      url: img3,
      alt: "Widow receiving support from Tesmax Foundation",
    },
    {
      url: img4,
      alt: "Community outreach and food distribution",
    },
    {
      url: "https://images.unsplash.com/photo-1611101661374-7f55433f6616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHYW1iaWFuJTIwd2lkb3clMjBlbGRlcmx5JTIwd29tYW58ZW58MXx8fHwxNzc0MDM0NzAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Elderly widow receiving support",
    },
    {
      url: "https://images.unsplash.com/photo-1710093072215-65070f9cf93e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGlzdHJpYnV0aW9uJTIwY2hhcml0eSUyMEFmcmljYXxlbnwxfHx8fDE3NzQwMzQ3MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Food distribution in the community",
    },
    {
      url: "https://images.unsplash.com/photo-1772562165643-dcd8ba0f88f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwY29tbXVuaXR5JTIwbWVhbCUyMGZlZWRpbmd8ZW58MXx8fHwxNzc0MDM0NzAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Community meal service",
    },
    {
      url: "https://images.unsplash.com/photo-1649349025977-4b6a0f0b8699?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwYmFncyUyMGZvb2QlMjBhaWR8ZW58MXx8fHwxNzc0MDM0NzAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Rice and food supplies ready for distribution",
    },
    {
      url: "https://images.unsplash.com/photo-1761168026167-2309a979e1c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwZWxkZXJseSUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc0MDM0NzAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Elderly community member",
    },
    {
      url: "https://images.unsplash.com/photo-1694286068274-1058e6b04dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwY2hpbGRyZW4lMjBjb21tdW5pdHklMjBoZWxwfGVufDF8fHx8MTc3NDAzNDcwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Children in the community",
    },
    {
      url: "https://images.unsplash.com/photo-1758599668547-2b1192c10abb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwdm9sdW50ZWVyJTIwaGVscGluZyUyMHBlb3BsZXxlbnwxfHx8fDE3NzQwMzQ3MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Volunteers helping in the community",
    },
    {
      url: "https://images.unsplash.com/photo-1632984781174-4082b5102cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwZmFtaWx5JTIwcG92ZXJ0eXxlbnwxfHx8fDE3NzQwMzQ3MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Families receiving support",
    },
  ];

  return (
    <section id="impact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0066CC] mb-4">
              Our Impact
            </h2>
            <div className="w-24 h-1 bg-[#FF8C00] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Witness the difference we're making in the lives of widows, orphans, and vulnerable families across the Gambia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-lg group aspect-square"
              >
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 text-sm">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-br from-[#0066CC] to-[#0052A3] text-white p-12 rounded-2xl text-center">
            <h3 className="text-3xl font-bold mb-4">Every Contribution Makes a Difference</h3>
            <p className="text-xl text-blue-100 mb-6">
              Your support helps us provide food, dignity, and hope to those who need it most
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <div className="bg-white/10 px-6 py-3 rounded-full backdrop-blur">
                ❤️ 1 bag of rice = 1 family fed for a week
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-full backdrop-blur">
                🍲 1 meal = Hope and dignity restored
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-full backdrop-blur">
                🤝 Together we can end hunger
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}