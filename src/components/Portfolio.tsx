import { TrendingUp, Award, Users, Target } from 'lucide-react';
import CountUpNumber from './CountUpNumber';

export default function Portfolio() {
  const stats = [
    {
      icon: Users,
      value: 100,
      suffix: '+',
      label: 'Satisfied Clients',
    },
    {
      icon: Award,
      value: 7,
      suffix: '+',
      label: 'Years of Excellence',
    },
    {
      icon: Target,
      value: 500,
      suffix: '+',
      label: 'Projects Completed',
    },
    {
      icon: TrendingUp,
      value: 12,
      label: 'Team Members',
    },
  ];

  const achievements = [
    'Growing client base across Somalia',
    'State-of-the-art upgraded equipment',
    'High customer satisfaction rates',
    'Strong market presence in Mogadisho',
    'Trusted by NGOs and corporations',
    'Regional growth and expansion',
  ];

  return (
    <section id="portfolio" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-amber-500">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Track record of excellence and growth since 2018
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-slate-900 p-8 rounded-lg border border-slate-700 text-center hover:border-amber-500 transition-colors"
              >
                <IconComponent className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-amber-500 mb-2">
                  <CountUpNumber end={stat.value} suffix={stat.suffix || ''} />
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="bg-slate-900 p-8 rounded-lg border border-slate-700">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Traction & <span className="text-amber-500">Performance</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start bg-slate-800 p-4 rounded-lg border border-slate-700"
              >
                <span className="text-amber-500 text-xl mr-3">✓</span>
                <span className="text-gray-300">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-500/10 to-blue-500/10 p-8 rounded-lg border border-amber-500/20">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Market Size & Opportunity</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Growing demand for corporate events, branding, NGO activities, and digital communication
              across Somalia presents significant opportunities for continued expansion and innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
