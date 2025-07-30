import { Button } from "@/components/ui/button";
import appStoreBadge from "@/assets/app-store-badge.svg";
import googlePlayBadge from "@/assets/google-play-badge.png";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { MapPin, Calendar, Clock, Music } from "lucide-react";
const HeroSection = () => {
  return <section data-section="hero" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-800 via-green-800 to-emerald-900 pt-20 sm:pt-24 lg:pt-16">
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
      
        {/* Enhanced floating musical elements - Simplified for mobile */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Reduce visual clutter on mobile - hide some elements */}
          <div className="hidden sm:block absolute top-20 left-2 sm:left-10 animate-float-slow text-4xl sm:text-6xl lg:text-8xl opacity-30 filter drop-shadow-lg">🎻</div>
          <div className="absolute top-40 right-4 sm:right-20 animate-float-medium text-2xl sm:text-5xl lg:text-7xl opacity-40 filter drop-shadow-lg">🪕</div>
          <div className="hidden sm:block absolute bottom-32 left-4 sm:left-20 animate-float-fast text-4xl sm:text-6xl lg:text-8xl opacity-30 filter drop-shadow-lg">🪕</div>
          <div className="absolute top-60 left-1/4 animate-float-slow text-2xl sm:text-4xl lg:text-6xl opacity-50 filter drop-shadow-lg">🎵</div>
          <div className="absolute bottom-20 right-1/4 animate-float-medium text-2xl sm:text-5xl lg:text-7xl opacity-40 filter drop-shadow-lg">🎶</div>
          <div className="hidden sm:block absolute top-80 right-2 sm:right-10 animate-float-fast text-3xl sm:text-4xl lg:text-6xl opacity-50 filter drop-shadow-lg">♪</div>
          <div className="hidden lg:block absolute top-1/2 left-1/2 animate-spin text-2xl sm:text-3xl lg:text-5xl opacity-20 filter drop-shadow-lg transform -translate-x-1/2 -translate-y-1/2" style={{
        animationDuration: '15s'
      }}>🎼</div>
          <div className="hidden sm:block absolute bottom-40 left-1/3 animate-bounce text-3xl sm:text-4xl lg:text-6xl opacity-30 filter drop-shadow-lg" style={{
        animationDuration: '3s'
      }}>🎼</div>
          <div className="hidden lg:block absolute top-96 right-1/3 animate-pulse text-2xl sm:text-3xl lg:text-5xl opacity-40 filter drop-shadow-lg">🎺</div>
        
        {/* Additional scattered musical symbols - Reduced for mobile */}
        <div className="hidden sm:block absolute top-24 left-1/3 text-emerald-400/50 text-xl sm:text-3xl lg:text-4xl animate-pulse delay-700">♫</div>
        <div className="hidden sm:block absolute bottom-60 right-4 sm:right-20 text-green-400/40 text-lg sm:text-2xl lg:text-3xl animate-bounce delay-1500" style={{
        animationDuration: '2.5s'
      }}>♬</div>
        <div className="hidden lg:block absolute top-48 right-1/4 text-emerald-300/60 text-2xl sm:text-4xl lg:text-5xl animate-pulse delay-300">♩</div>
        <div className="hidden lg:block absolute bottom-80 left-1/4 text-green-500/40 text-xl sm:text-3xl lg:text-4xl animate-bounce delay-2000" style={{
        animationDuration: '4s'
      }}>♭</div>
        
        {/* Expanded grass blade SVG elements - no plant emojis */}
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
        
        {/* Additional grass blade SVG patches */}
        <div className="absolute bottom-16 left-40 text-green-300/70 animate-bounce delay-1000" style={{
        animationDuration: '3s'
      }}>
          <svg width="26" height="34" viewBox="0 0 26 34" fill="currentColor">
            <path d="M13 34C13 34 9 30 9 22C9 18 11 14 13 0C15 14 17 18 17 22C17 30 13 34 13 34Z" />
          </svg>
        </div>
        <div className="absolute bottom-24 right-32 text-emerald-400/65 animate-pulse delay-2500">
          <svg width="14" height="22" viewBox="0 0 14 22" fill="currentColor">
            <path d="M7 22C7 22 4 19 4 13C4 10 6 6 7 0C8 6 10 10 10 13C10 19 7 22 7 22Z" />
          </svg>
        </div>
        <div className="absolute bottom-28 left-20 text-green-400/60 animate-bounce delay-3500" style={{
        animationDuration: '4s'
      }}>
          <svg width="20" height="28" viewBox="0 0 20 28" fill="currentColor">
            <path d="M10 28C10 28 7 25 7 18C7 15 9 11 10 0C11 11 13 15 13 18C13 25 10 28 10 28Z" />
          </svg>
        </div>
        <div className="absolute bottom-32 right-20 text-emerald-300/55 animate-pulse delay-4000">
          <svg width="18" height="26" viewBox="0 0 18 26" fill="currentColor">
            <path d="M9 26C9 26 6 23 6 17C6 14 8 10 9 0C10 10 12 14 12 17C12 23 9 26 9 26Z" />
          </svg>
        </div>
        <div className="absolute bottom-14 left-72 text-green-400/70 animate-bounce delay-1500" style={{
        animationDuration: '2.5s'
      }}>
          <svg width="24" height="32" viewBox="0 0 24 32" fill="currentColor">
            <path d="M12 32C12 32 8 28 8 20C8 16 10 12 12 0C14 12 16 16 16 20C16 28 12 32 12 32Z" />
          </svg>
        </div>
        <div className="absolute bottom-20 right-72 text-emerald-400/50 animate-pulse delay-2000">
          <svg width="16" height="24" viewBox="0 0 16 24" fill="currentColor">
            <path d="M8 24C8 24 5 21 5 15C5 12 7 8 8 0C9 8 11 12 11 15C11 21 8 24 8 24Z" />
          </svg>
        </div>
        <div className="absolute bottom-36 left-32 text-green-300/65 animate-bounce delay-3000" style={{
        animationDuration: '3.5s'
      }}>
          <svg width="22" height="30" viewBox="0 0 22 30" fill="currentColor">
            <path d="M11 30C11 30 8 27 8 20C8 17 10 13 11 0C12 13 14 17 14 20C14 27 11 30 11 30Z" />
          </svg>
        </div>
        <div className="absolute bottom-40 right-40 text-emerald-300/60 animate-pulse delay-3500">
          <svg width="20" height="28" viewBox="0 0 20 28" fill="currentColor">
            <path d="M10 28C10 28 7 25 7 18C7 15 9 11 10 0C11 11 13 15 13 18C13 25 10 28 10 28Z" />
          </svg>
        </div>
        <div className="absolute bottom-2 left-16 text-green-400/75 animate-bounce delay-500" style={{
        animationDuration: '2s'
      }}>
          <svg width="14" height="20" viewBox="0 0 14 20" fill="currentColor">
            <path d="M7 20C7 20 4 17 4 11C4 8 6 4 7 0C8 4 10 8 10 11C10 17 7 20 7 20Z" />
          </svg>
        </div>
        <div className="absolute bottom-6 right-8 text-emerald-400/80 animate-pulse delay-1000">
          <svg width="18" height="26" viewBox="0 0 18 26" fill="currentColor">
            <path d="M9 26C9 26 6 23 6 17C6 14 8 10 9 0C10 10 12 14 12 17C12 23 9 26 9 26Z" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-24 items-center min-h-screen">
          {/* Left Column - Content */}
          <div className="space-y-10 sm:space-y-12 lg:space-y-14">
            {/* Limited spots badge */}
            <div className="flex justify-center lg:justify-start">
              <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600 text-xs sm:text-sm font-bold px-4 sm:px-6 py-2 sm:py-3 border-0 shadow-lg animate-pulse">
                🔥 Limited to First 100 Members Only
              </Badge>
            </div>
            
            {/* Main headline */}
            <div className="text-center lg:text-left space-y-8 lg:space-y-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent leading-tight tracking-tight drop-shadow-lg">Become a Founding Jammer</h1>
              
              {/* Subheadline */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl bg-gradient-to-br from-white to-white/85 bg-clip-text text-transparent font-bold drop-shadow-lg">Your Go-To Bluegrass Jam Companion</p>
              
              <p className="text-sm sm:text-base lg:text-lg bg-gradient-to-br from-white/95 to-white/80 bg-clip-text text-transparent leading-relaxed max-w-2xl drop-shadow-lg">
                Grass is the #1 app for learning and playing bluegrass. Access 200+ classic songs, join local jam circles, track your progress, and connect with musicians nationwide. Whether you're just starting out or leading your own jam, Grass helps you grow your skills, your circle, and your confidence.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 justify-center lg:justify-start">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base lg:text-lg py-5 sm:py-6 px-6 sm:px-8 lg:px-10 rounded-xl shadow-xl transition-all hover:scale-105 hover:shadow-2xl" onClick={() => window.open('https://tally.so/r/wv8RdQ', '_blank')}>
                ✅ Become One of The First 100!
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white font-semibold text-sm sm:text-base lg:text-lg py-5 sm:py-6 px-6 sm:px-8 lg:px-10 rounded-xl transition-all hover:scale-105" onClick={() => window.location.href = 'mailto:nick@learngrass.com'}>
                📩 Contact Us
              </Button>
            </div>
            
            {/* App store badges */}
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 justify-center lg:justify-start pt-6">
              <div className="h-14 sm:h-16 flex items-center">
                <img 
                  src={appStoreBadge} 
                  alt="Download on the App Store" 
                  className="h-full w-auto cursor-pointer hover:scale-105 transition-transform" 
                  onClick={() => window.open('https://apps.apple.com/us/app/grass-jam-companion/id6741807679', '_blank')}
                />
              </div>
              <div className="h-14 sm:h-16 flex items-center">
                <img 
                  src={googlePlayBadge} 
                  alt="Get it on Google Play" 
                  className="h-full w-auto cursor-pointer hover:scale-105 transition-transform" 
                  onClick={() => window.open('https://play.google.com/store/apps/details?id=com.learngrass.grass&pcampaignid=web_share', '_blank')}
                />
              </div>
            </div>
          </div>

          {/* Right Column - Illustrated Card */}
          <div className="flex justify-center lg:justify-end mt-12 lg:mt-0">
            <Card className="relative bg-gradient-to-br from-white to-emerald-50 p-8 sm:p-10 rounded-3xl shadow-2xl border-0 max-w-lg w-full transform hover:scale-105 transition-all duration-300 hover:shadow-3xl">
              {/* Card Header */}
              <div className="text-center mb-8 sm:mb-10">
                <div className="inline-flex items-center gap-3 bg-emerald-100 text-emerald-800 px-5 sm:px-6 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base mb-5 sm:mb-6 cursor-pointer hover:bg-emerald-200 transition-colors" onClick={() => window.open('https://tally.so/r/wv8RdQ', '_blank')}>
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  Join Now
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-emerald-800 mb-4 leading-tight">Join a Founding Jammer Session</h3>
                <div className="flex items-center justify-center gap-3 text-emerald-600">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-semibold text-sm sm:text-base cursor-pointer hover:text-emerald-700 transition-colors" onClick={() => window.open('https://join.slack.com/share/enQtOTI3MzAyNDMyNDUwMC01MGExOGZiMjcyMjVlZGU1NzQ5ZDhlMGNlYzU1NDRmYmI2OTg2ZTNlNzIzMTZjNjNiYWRiM2NlYWUxOGQwYzQz', '_blank')}>Bluegrass Community</span>
                </div>
              </div>

              {/* Instrument Icons Grid */}
              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                <div className="bg-emerald-100 rounded-2xl p-5 sm:p-6 text-center hover:bg-emerald-200 transition-colors">
                  <div className="text-3xl sm:text-4xl mb-3">🪕</div>
                  <div className="text-sm sm:text-base font-semibold text-emerald-800">Banjo</div>
                </div>
                <div className="bg-emerald-100 rounded-2xl p-5 sm:p-6 text-center hover:bg-emerald-200 transition-colors">
                  <div className="text-3xl sm:text-4xl mb-3">🪕</div>
                  <div className="text-sm sm:text-base font-semibold text-emerald-800">Guitar</div>
                </div>
                <div className="bg-emerald-100 rounded-2xl p-5 sm:p-6 text-center hover:bg-emerald-200 transition-colors">
                  <div className="text-3xl sm:text-4xl mb-3">🎻</div>
                  <div className="text-sm sm:text-base font-semibold text-emerald-800">Fiddle</div>
                </div>
                <div className="bg-emerald-100 rounded-2xl p-5 sm:p-6 text-center hover:bg-emerald-200 transition-colors">
                  <div className="text-3xl sm:text-4xl mb-3">🎭</div>
                  <div className="text-sm sm:text-base font-semibold text-emerald-800">Mandolin</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;