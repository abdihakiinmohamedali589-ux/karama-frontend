import { Camera, Tv, Printer, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 md:pt-24 relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>

      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center w-full">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-3 sm:mb-4 leading-tight">
            <span className="text-amber-500 block sm:inline">KARAAMA</span>
            <br className="hidden sm:block" />
            <span className="text-white block sm:inline">PRODUCTION</span>
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-gray-400 mb-4 sm:mb-6 px-2">
            <span className="text-sm sm:text-base md:text-lg">Creative</span>
            <span className="text-amber-500 hidden sm:inline">•</span>
            <span className="text-sm sm:text-base md:text-lg">Modern</span>
            <span className="text-amber-500 hidden sm:inline">•</span>
            <span className="text-sm sm:text-base md:text-lg">Media Excellence</span>
          </div>
        </div>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed">
          Bringing stories to life through innovative media production, professional event management,
          and creative solutions since 2018
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 px-2 sm:px-4">
          <div className="flex flex-col items-center p-4 sm:p-5 md:p-6 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-slate-700 hover:border-amber-500 transition-colors">
            <Camera className="w-8 h-8 sm:w-10 sm:h-10 text-amber-500 mb-2 sm:mb-3" />
            <span className="text-xs sm:text-sm text-gray-300 text-center">Multimedia</span>
          </div>
          <div className="flex flex-col items-center p-4 sm:p-5 md:p-6 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-slate-700 hover:border-amber-500 transition-colors">
            <Users className="w-8 h-8 sm:w-10 sm:h-10 text-amber-500 mb-2 sm:mb-3" />
            <span className="text-xs sm:text-sm text-gray-300 text-center">Events</span>
          </div>
          <div className="flex flex-col items-center p-4 sm:p-5 md:p-6 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-slate-700 hover:border-amber-500 transition-colors">
            <Printer className="w-8 h-8 sm:w-10 sm:h-10 text-amber-500 mb-2 sm:mb-3" />
            <span className="text-xs sm:text-sm text-gray-300 text-center">Printing</span>
          </div>
          <div className="flex flex-col items-center p-4 sm:p-5 md:p-6 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-slate-700 hover:border-amber-500 transition-colors">
            <Tv className="w-8 h-8 sm:w-10 sm:h-10 text-amber-500 mb-2 sm:mb-3" />
            <span className="text-xs sm:text-sm text-gray-300 text-center">Live Streaming</span>
          </div>
        </div>

        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all transform hover:scale-105 active:scale-95 w-full sm:w-auto min-w-[200px]"
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
}
