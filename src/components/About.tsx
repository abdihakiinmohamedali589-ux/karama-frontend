import { Target, Eye, Building, Users, MapPin, Phone, Mail } from 'lucide-react';
import CountUpNumber from './CountUpNumber';

export default function About() {
  const keyFactors = [
    'Quality Above All',
    'People-Centered Approach',
    'Innovation & Creativity',
    'Consistency & Reliability',
    'Collaboration & Teamwork',
  ];

  const visionPoints = [
    'Innovative Media Solutions',
    'Customer-Driven Excellence',
    'Operational Efficiency',
    'Regional Growth and Expansion',
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-amber-500">KARAAMA</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-slate-900 p-8 rounded-lg border border-slate-700">
            <Building className="w-12 h-12 text-amber-500 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Company Overview</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Karaama Production is a creative production and event solutions company based in Mogadisho, Somalia.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Since <CountUpNumber end={2018} />, we have dedicated ourselves to helping individuals, organizations, and brands
              communicate their stories with clarity, beauty, and impact.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We bring together a talented team, modern technology, and a passion for creativity to deliver
              media production, printing services, and event management that clients can trust.
            </p>

            <div className="mt-8 space-y-3 text-gray-300">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-amber-500 mr-3" />
                <span>Mogadisho, Somalia</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-amber-500 mr-3" />
                <span>061 883 1035</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-amber-500 mr-3" />
                <span>karaama.production1@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-amber-500 mr-3" />
                <span>
                  <CountUpNumber end={12} /> Employees
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-900 p-8 rounded-lg border border-slate-700">
              <Eye className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Vision</h3>
              <ul className="space-y-3">
                {visionPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-amber-500 mr-3 mt-1">▸</span>
                    <span className="text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-900 p-8 rounded-lg border border-slate-700">
              <Target className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To deliver creative, reliable, and high-impact media, printing, and event management services.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 p-8 rounded-lg border border-slate-700">
          <h3 className="text-2xl font-bold mb-6 text-center">Key Factors</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {keyFactors.map((factor, index) => (
              <div
                key={index}
                className="bg-slate-800 p-4 rounded-lg text-center border border-slate-700 hover:border-amber-500 transition-colors"
              >
                <span className="text-amber-500 font-bold text-2xl block mb-2">{index + 1}</span>
                <span className="text-gray-300 text-sm">{factor}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
