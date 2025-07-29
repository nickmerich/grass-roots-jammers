import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { MapPin, Calendar, Clock, Music } from "lucide-react";

const HeroSection = () => {
  return (
    <section data-section="hero" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-50 to-green-100 pt-20">
      {/* Floating Musical Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-float-slow text-4xl opacity-20">🎻</div>
        <div className="absolute top-40 right-20 animate-float-medium text-3xl opacity-20">🪕</div>
        <div className="absolute bottom-32 left-20 animate-float-fast text-4xl opacity-20">🎸</div>
        <div className="absolute top-60 left-1/4 animate-float-slow text-2xl opacity-20">🎵</div>
        <div className="absolute bottom-20 right-1/4 animate-float-medium text-3xl opacity-20">🎶</div>
        <div className="absolute top-80 right-10 animate-float-fast text-2xl opacity-20">♪</div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Limited spots badge */}
            <div className="flex justify-center lg:justify-start">
              <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600 text-sm font-bold px-6 py-3 border-0 shadow-lg animate-pulse">
                🔥 Limited to First 100 Members Only
              </Badge>
            </div>
            
            {/* Main headline */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-black text-emerald-800 mb-4 leading-[0.9] tracking-tight">
                Become a{" "}
                <span className="block text-emerald-700 drop-shadow-lg">
                  Founding Jammer
                </span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-2xl lg:text-3xl text-emerald-700 font-bold mb-4">
                Your #1 Bluegrass Jam Companion
              </p>
              
              <p className="text-lg text-emerald-600 leading-relaxed max-w-2xl">
                Shape the future of bluegrass jamming. Claim your spot, unlock exclusive recognition, 
                and help grow a vibrant new community.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg py-4 px-8 rounded-xl shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
                onClick={() => window.open('https://tally.so/r/wv8RdQ', '_blank')}
              >
                🚀 Become One of The First 100!
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white font-semibold text-lg py-4 px-8 rounded-xl transition-all hover:scale-105"
                onClick={() => window.location.href = 'mailto:nick@learngrass.com'}
              >
                📩 Contact Us
              </Button>
            </div>
            
            {/* App store badges */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="outline" 
                className="h-16 px-6 bg-white/95 border border-gray-200 text-gray-800 hover:bg-gray-50 shadow-lg rounded-xl transition-all hover:scale-105"
                onClick={() => window.open('https://apps.apple.com/us/app/grass-jam-companion/id6741807679', '_blank')}
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">📱</div>
                  <div className="text-left">
                    <div className="text-xs text-gray-600 font-medium">Download on the</div>
                    <div className="text-sm font-bold text-gray-900">App Store</div>
                  </div>
                </div>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-16 px-6 bg-white/95 border border-gray-200 text-gray-800 hover:bg-gray-50 shadow-lg rounded-xl transition-all hover:scale-105"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.learngrass.grass&pcampaignid=web_share', '_blank')}
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🎮</div>
                  <div className="text-left">
                    <div className="text-xs text-gray-600 font-medium">Get it on</div>
                    <div className="text-sm font-bold text-gray-900">Google Play</div>
                  </div>
                </div>
              </Button>
            </div>
          </div>

          {/* Right Column - Illustrated Card */}
          <div className="flex justify-center lg:justify-end">
            <Card className="relative bg-gradient-to-br from-white to-emerald-50 p-8 rounded-3xl shadow-2xl border-0 max-w-md w-full transform hover:scale-105 transition-all duration-300 hover:shadow-3xl">
              {/* Card Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full font-bold text-sm mb-4">
                  <Calendar className="w-4 h-4" />
                  Join Now
                </div>
                <h3 className="text-2xl font-black text-emerald-800 mb-2">
                  Founding Jammer Session
                </h3>
                <div className="flex items-center justify-center gap-2 text-emerald-600">
                  <MapPin className="w-4 h-4" />
                  <span className="font-semibold">Bluegrass Community</span>
                </div>
              </div>

              {/* Instrument Icons Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-emerald-100 rounded-2xl p-4 text-center hover:bg-emerald-200 transition-colors">
                  <div className="text-3xl mb-2">🪕</div>
                  <div className="text-sm font-semibold text-emerald-800">Banjo</div>
                </div>
                <div className="bg-emerald-100 rounded-2xl p-4 text-center hover:bg-emerald-200 transition-colors">
                  <div className="text-3xl mb-2">🎸</div>
                  <div className="text-sm font-semibold text-emerald-800">Guitar</div>
                </div>
                <div className="bg-emerald-100 rounded-2xl p-4 text-center hover:bg-emerald-200 transition-colors">
                  <div className="text-3xl mb-2">🎻</div>
                  <div className="text-sm font-semibold text-emerald-800">Fiddle</div>
                </div>
                <div className="bg-emerald-100 rounded-2xl p-4 text-center hover:bg-emerald-200 transition-colors">
                  <div className="text-3xl mb-2">🎭</div>
                  <div className="text-sm font-semibold text-emerald-800">Mandolin</div>
                </div>
              </div>

              {/* Music Waveform Visual */}
              <div className="bg-emerald-50 rounded-2xl p-4 mb-6">
                <div className="flex items-center justify-center gap-1 h-12">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className={`bg-emerald-500 rounded-full animate-pulse w-1 ${
                        i % 3 === 0 ? 'h-8' : i % 2 === 0 ? 'h-6' : 'h-4'
                      }`}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <div className="text-center mt-2">
                  <span className="text-xs text-emerald-600 font-medium">Live Jam Visualization</span>
                </div>
              </div>

              {/* Event Details */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-emerald-700">
                  <Clock className="w-4 h-4" />
                  <span className="font-semibold">Lifetime Access</span>
                </div>
                <div className="flex items-center gap-3 text-emerald-700">
                  <Music className="w-4 h-4" />
                  <span className="font-semibold">Exclusive Community Features</span>
                </div>
                <div className="flex items-center gap-3 text-emerald-700">
                  <Badge className="w-4 h-4 bg-transparent border-emerald-700 text-emerald-700" />
                  <span className="font-semibold">Founding Member Recognition</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;