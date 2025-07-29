import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { MapPin, Calendar, Clock, Music } from "lucide-react";
const HeroSection = () => {
  return <section data-section="hero" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-400 via-green-500 to-emerald-600 pt-20">
      {/* Fun doodle-style background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 via-transparent to-emerald-300/30"></div>
      
      {/* Animated swirling lines and doodles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Swirling musical lines */}
        <svg className="absolute inset-0 w-full h-full" style={{
        filter: 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.3))'
      }}>
          <path d="M 50 150 Q 200 100 350 200 Q 500 300 650 150" stroke="rgba(34, 197, 94, 0.4)" strokeWidth="3" fill="none" strokeDasharray="10,5" className="animate-pulse">
            <animate attributeName="stroke-dashoffset" values="0;-30;0" dur="6s" repeatCount="indefinite" />
          </path>
          <path d="M 100 400 Q 300 350 500 450 Q 700 550 900 400" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="2" fill="none" strokeDasharray="8,4" className="animate-pulse delay-1000">
            <animate attributeName="stroke-dashoffset" values="0;-24;0" dur="8s" repeatCount="indefinite" />
          </path>
          <path d="M 200 250 Q 400 180 600 280 Q 800 380 1000 250" stroke="rgba(5, 150, 105, 0.3)" strokeWidth="2" fill="none" strokeDasharray="6,3" className="animate-pulse delay-500">
            <animate attributeName="stroke-dashoffset" values="0;-18;0" dur="10s" repeatCount="indefinite" />
          </path>
        </svg>

        {/* Musical doodle decorations */}
        <div className="absolute top-16 left-16 text-emerald-400/60 animate-bounce delay-1000">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        </div>
        
        <div className="absolute top-32 right-20 text-emerald-300/50 animate-spin" style={{
        animationDuration: '20s'
      }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        </div>

        <div className="absolute bottom-20 left-32 text-green-400/40 animate-pulse delay-2000">
          <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7.53 12L9 10.5l1.4-1.41 2.07 2.08L17.6 6 19 7.41 12.47 14z" />
          </svg>
        </div>

        {/* Fun floating shapes */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-l from-green-300/30 to-emerald-300/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-emerald-500/20 rounded-full blur-xl animate-bounce delay-500" style={{
        animationDuration: '4s'
      }}></div>
      </div>
      
      {/* Enhanced floating musical elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-float-slow text-5xl opacity-40 filter drop-shadow-lg">🎻</div>
        <div className="absolute top-40 right-20 animate-float-medium text-4xl opacity-50 filter drop-shadow-lg">🪕</div>
        <div className="absolute bottom-32 left-20 animate-float-fast text-5xl opacity-40 filter drop-shadow-lg">🎸</div>
        <div className="absolute top-60 left-1/4 animate-float-slow text-3xl opacity-60 filter drop-shadow-lg">🎵</div>
        <div className="absolute bottom-20 right-1/4 animate-float-medium text-4xl opacity-50 filter drop-shadow-lg">🎶</div>
        <div className="absolute top-80 right-10 animate-float-fast text-3xl opacity-60 filter drop-shadow-lg">♪</div>
        <div className="absolute top-1/2 left-1/2 animate-spin text-2xl opacity-30 filter drop-shadow-lg transform -translate-x-1/2 -translate-y-1/2" style={{
        animationDuration: '15s'
      }}>🎼</div>
        <div className="absolute bottom-40 left-1/3 animate-bounce text-3xl opacity-40 filter drop-shadow-lg" style={{
        animationDuration: '3s'
      }}>🎤</div>
        <div className="absolute top-96 right-1/3 animate-pulse text-2xl opacity-50 filter drop-shadow-lg">🎺</div>
        
        {/* Additional scattered musical symbols */}
        <div className="absolute top-24 left-1/3 text-emerald-400/70 text-xl animate-pulse delay-700">♫</div>
        <div className="absolute bottom-60 right-20 text-green-400/60 text-lg animate-bounce delay-1500" style={{
        animationDuration: '2.5s'
      }}>♬</div>
        <div className="absolute top-48 right-1/4 text-emerald-300/80 text-2xl animate-pulse delay-300">♩</div>
        <div className="absolute bottom-80 left-1/4 text-green-500/60 text-xl animate-bounce delay-2000" style={{
        animationDuration: '4s'
      }}>♭</div>
        
        {/* Grass elements */}
        <div className="absolute bottom-16 left-16 animate-float-slow text-4xl opacity-60 filter drop-shadow-lg">🌱</div>
        <div className="absolute bottom-32 right-32 animate-float-medium text-3xl opacity-70 filter drop-shadow-lg">🌿</div>
        <div className="absolute bottom-20 left-1/2 animate-float-fast text-2xl opacity-50 filter drop-shadow-lg">🍃</div>
        <div className="absolute bottom-40 right-16 animate-pulse text-3xl opacity-60 filter drop-shadow-lg delay-1000">🌾</div>
        <div className="absolute bottom-12 left-1/3 animate-bounce text-2xl opacity-55 filter drop-shadow-lg delay-500" style={{
        animationDuration: '3.5s'
      }}>🌱</div>
        <div className="absolute bottom-28 right-1/3 animate-float-slow text-3xl opacity-65 filter drop-shadow-lg delay-800">🌿</div>
        
        {/* Additional grass patches */}
        <div className="absolute bottom-4 left-48 animate-pulse text-3xl opacity-50 filter drop-shadow-lg delay-600">🌱</div>
        <div className="absolute bottom-8 right-48 animate-float-medium text-2xl opacity-60 filter drop-shadow-lg delay-1200">🌿</div>
        <div className="absolute bottom-24 left-80 animate-bounce text-3xl opacity-45 filter drop-shadow-lg delay-1800" style={{
        animationDuration: '4.5s'
      }}>🌾</div>
        <div className="absolute bottom-36 right-80 animate-float-slow text-2xl opacity-55 filter drop-shadow-lg delay-2400">🍃</div>
        <div className="absolute bottom-44 left-20 animate-pulse text-4xl opacity-40 filter drop-shadow-lg delay-3600">🌱</div>
        <div className="absolute bottom-52 right-20 animate-float-fast text-3xl opacity-50 filter drop-shadow-lg delay-4200">🌿</div>
        <div className="absolute bottom-14 left-2/3 animate-bounce text-2xl opacity-45 filter drop-shadow-lg delay-4800" style={{
        animationDuration: '3s'
      }}>🌱</div>
        
        {/* Grass blade SVG elements */}
        <div className="absolute bottom-8 left-8 text-green-300/60 animate-pulse delay-2000">
          <svg width="24" height="32" viewBox="0 0 24 32" fill="currentColor">
            <path d="M12 32C12 32 8 28 8 20C8 16 10 12 12 0C14 12 16 16 16 20C16 28 12 32 12 32Z" />
          </svg>
        </div>
        <div className="absolute bottom-12 right-12 text-emerald-300/70 animate-bounce delay-1500" style={{
        animationDuration: '4s'
      }}>
          <svg width="20" height="28" viewBox="0 0 20 28" fill="currentColor">
            <path d="M10 28C10 28 7 25 7 18C7 15 9 11 10 0C11 11 13 15 13 18C13 25 10 28 10 28Z" />
          </svg>
        </div>
        <div className="absolute bottom-6 left-1/4 text-green-400/65 animate-pulse delay-3000">
          <svg width="18" height="26" viewBox="0 0 18 26" fill="currentColor">
            <path d="M9 26C9 26 6 23 6 17C6 14 8 10 9 0C10 10 12 14 12 17C12 23 9 26 9 26Z" />
          </svg>
        </div>
        
        {/* More grass blade SVG patches */}
        <div className="absolute bottom-4 right-6 text-green-300/55 animate-pulse delay-4500">
          <svg width="16" height="24" viewBox="0 0 16 24" fill="currentColor">
            <path d="M8 24C8 24 5 21 5 15C5 12 7 8 8 0C9 8 11 12 11 15C11 21 8 24 8 24Z" />
          </svg>
        </div>
        <div className="absolute bottom-10 left-60 text-emerald-400/60 animate-bounce delay-5000" style={{
        animationDuration: '3.5s'
      }}>
          <svg width="22" height="30" viewBox="0 0 22 30" fill="currentColor">
            <path d="M11 30C11 30 8 27 8 20C8 17 10 13 11 0C12 13 14 17 14 20C14 27 11 30 11 30Z" />
          </svg>
        </div>
        <div className="absolute bottom-18 right-60 text-green-300/50 animate-pulse delay-5500">
          <svg width="20" height="28" viewBox="0 0 20 28" fill="currentColor">
            <path d="M10 28C10 28 7 25 7 18C7 15 9 11 10 0C11 11 13 15 13 18C13 25 10 28 10 28Z" />
          </svg>
        </div>
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
              <h1 className="text-5xl lg:text-7xl font-black text-emerald-900 mb-4 leading-[0.9] tracking-tight">
                Become a{" "}
                <span className="block text-emerald-800 drop-shadow-lg">
                  Founding Jammer
                </span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-2xl lg:text-3xl text-emerald-800 font-bold mb-4">
                Your #1 Bluegrass Jam Companion
              </p>
              
              <p className="text-lg text-emerald-700 leading-relaxed max-w-2xl">Grass helps you master 200+ bluegrass standards, find jam sessions, and record your progress — all in one app.


            </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg py-4 px-8 rounded-xl shadow-xl transition-all hover:scale-105 hover:shadow-2xl" onClick={() => window.open('https://tally.so/r/wv8RdQ', '_blank')}>
                🚀 Become One of The First 100!
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white font-semibold text-lg py-4 px-8 rounded-xl transition-all hover:scale-105" onClick={() => window.location.href = 'mailto:nick@learngrass.com'}>
                📩 Contact Us
              </Button>
            </div>
            
            {/* App store badges */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="outline" className="h-16 px-6 bg-white/95 border border-gray-200 text-gray-800 hover:bg-gray-50 shadow-lg rounded-xl transition-all hover:scale-105" onClick={() => window.open('https://apps.apple.com/us/app/grass-jam-companion/id6741807679', '_blank')}>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">📱</div>
                  <div className="text-left">
                    <div className="text-xs text-gray-600 font-medium">Download on the</div>
                    <div className="text-sm font-bold text-gray-900">App Store</div>
                  </div>
                </div>
              </Button>
              
              <Button variant="outline" className="h-16 px-6 bg-white/95 border border-gray-200 text-gray-800 hover:bg-gray-50 shadow-lg rounded-xl transition-all hover:scale-105" onClick={() => window.open('https://play.google.com/store/apps/details?id=com.learngrass.grass&pcampaignid=web_share', '_blank')}>
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
                <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full font-bold text-sm mb-4 cursor-pointer hover:bg-emerald-200 transition-colors" onClick={() => window.open('https://tally.so/r/wv8RdQ', '_blank')}>
                  <Calendar className="w-4 h-4" />
                  Join Now
                </div>
                <h3 className="text-2xl font-black text-emerald-800 mb-2">
                  Founding Jammer Session
                </h3>
                <div className="flex items-center justify-center gap-2 text-emerald-600">
                  <MapPin className="w-4 h-4" />
                  <span className="font-semibold cursor-pointer hover:text-emerald-700 transition-colors" onClick={() => window.open('https://join.slack.com/share/enQtOTI3MzAyNDMyNDUwMC01MGExOGZiMjcyMjVlZGU1NzQ5ZDhlMGNlYzU1NDRmYmI2OTg2ZTNlNzIzMTZjNjNiYWRiM2NlYWUxOGQwYzQz', '_blank')}>Bluegrass Community</span>
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
              

              {/* Event Details */}
              <div className="mb-4">
                
              </div>
              
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;