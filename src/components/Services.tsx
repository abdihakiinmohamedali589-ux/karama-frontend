import {
  Users,
  Printer,
  Video,
  Tv,
  Smartphone,
  Palette,
  Camera,
  Mic,
  Monitor,
  Volume2
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Users,
      title: 'Event Management',
      items: [
        'Corporate event planning',
        'Conferences & seminars',
        'NGO event coordination',
        'Stage setup & lighting',
        'Full event logistics',
      ],
    },
    {
      icon: Printer,
      title: 'Printing Services',
      items: [
        'Digital & offset printing',
        'Banners, roll-ups, flags & billboards',
        'Business cards, brochures & flyers',
        'Branded materials (t-shirts, mugs, notebooks)',
        'Packaging & label printing',
      ],
    },
    {
      icon: Video,
      title: 'Multimedia Production',
      items: [
        'Photography & videography',
        'Documentary and film production',
        'TV commercials & promotional videos',
        'Motion graphics & animation',
      ],
    },
    {
      icon: Tv,
      title: 'Media Coverage & Live Streaming',
      items: [
        'High-quality live broadcasts',
        'Multi-camera coverage',
        'Social media streaming',
        'Event documentation',
      ],
    },
    {
      icon: Smartphone,
      title: 'Digital Content Creation',
      items: [
        'Social media content design',
        'Brand storytelling',
        'Graphic design',
        'Voice-over & scriptwriting',
        'Short-form content for TikTok, Facebook, YouTube, and Instagram',
      ],
    },
    {
      icon: Palette,
      title: 'Graphic Design & Branding',
      items: [
        'Logo design',
        'Visual identity systems',
        'Brand guidelines',
        'Marketing materials design',
      ],
    },
    {
      icon: Camera,
      title: 'Equipment Rental',
      items: [
        'Cameras & filming kits',
        'Sound systems & speakers',
        'Lighting equipment',
        'Projectors & LED screens',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-amber-500">Services</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive creative solutions for all your media, event, and branding needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:border-amber-500 transition-all hover:transform hover:scale-105 group"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-amber-500/10 p-3 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-bold ml-4">{service.title}</h3>
                </div>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <span className="text-amber-500 mr-3 mt-1">✓</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
