import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{background: 'var(--gradient-hero)'}}>
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        {/* Floating musical instruments */}
        <div className="musical-instrument animate-float-slow top-20 left-10 text-grass-light">🪕</div>
        <div className="musical-instrument animate-float-medium top-32 right-16 text-grass">🎻</div>
        <div className="musical-instrument animate-float-fast top-40 left-1/4 text-grass-accent">🎸</div>
        <div className="musical-instrument animate-float-slow top-60 right-1/3 text-grass-light">🪗</div>
        <div className="musical-instrument animate-float-medium bottom-40 left-20 text-grass">🎼</div>
        <div className="musical-instrument animate-float-fast bottom-32 right-20 text-grass-accent">🎵</div>
        
        {/* Floating musical notes */}
        <div className="musical-note animate-slide-musical top-1/4 text-grass/30" style={{animationDelay: '0s'}}>♪</div>
        <div className="musical-note animate-slide-musical top-1/3 text-grass-light/30" style={{animationDelay: '2s'}}>♫</div>
        <div className="musical-note animate-slide-musical top-1/2 text-grass-accent/30" style={{animationDelay: '4s'}}>♬</div>
        <div className="musical-note animate-slide-musical top-2/3 text-grass/30" style={{animationDelay: '6s'}}>♪</div>
        <div className="musical-note animate-slide-musical top-3/4 text-grass-light/30" style={{animationDelay: '8s'}}>♩</div>
      </div>
      
      {/* Dynamic background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2334d399%22%20fill-opacity%3D%220.08%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40 animate-pulse" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Limited spots badge */}
          <Badge className="mb-6 bg-grass-accent/20 text-grass hover:bg-grass-accent/30 text-sm px-4 py-2 border border-grass/20 animate-pulse-glow animate-bounce-in">
            🔥 Limited to First 100 Members Only
          </Badge>
          
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg animate-bounce-in">
            Become a{" "}
            <span className="bg-gradient-to-r from-grass-light to-grass-accent bg-clip-text text-transparent animate-shimmer">
              Founding Jammer
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium drop-shadow-md">
            Your #1 Bluegrass Jam Companion! 🎵
          </p>
          
          {/* Description */}
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            Shape the future of bluegrass jamming. Claim your spot, unlock exclusive recognition, 
            and help grow a vibrant new community.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="lg"
              className="min-w-[280px] btn-musical animate-pulse-glow"
              onClick={() => window.open('https://tally.so/r/wv8RdQ', '_blank')}
            >
              🚀 Become One of The First 100!
            </Button>
            <Button variant="outline-grass" size="lg" className="min-w-[200px] btn-musical bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
              Contact Us
            </Button>
          </div>
          
          {/* App store badges */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="outline" 
              className="h-16 px-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:border-white/50 btn-musical"
              onClick={() => window.open('https://apps.apple.com/us/app/grass-jam-companion/id6741807679', '_blank')}
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">📱</div>
                <div className="text-left">
                  <div className="text-xs text-white/70">Download on the</div>
                  <div className="text-sm font-semibold text-white">App Store</div>
                </div>
              </div>
            </Button>
            
            <Button 
              variant="outline" 
              className="h-16 px-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:border-white/50 btn-musical"
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.learngrass.grass&pcampaignid=web_share', '_blank')}
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">🎮</div>
                <div className="text-left">
                  <div className="text-xs text-white/70">Get it on</div>
                  <div className="text-sm font-semibold text-white">Google Play</div>
                </div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;