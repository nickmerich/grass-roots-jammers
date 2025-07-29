import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-grass to-grass-accent">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-100" />
      
      {/* Content overlay with backdrop blur */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
      
      <div className="container mx-auto px-8 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Limited spots badge */}
          <Badge className="mb-8 bg-white/95 text-grass-accent hover:bg-white text-sm font-semibold px-6 py-3 border-0 shadow-lg backdrop-blur-sm">
            🔥 Limited to First 100 Members Only
          </Badge>
          
          {/* Main headline */}
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tight">
            Become a{" "}
            <span className="block text-white/95 drop-shadow-2xl">
              Founding Jammer
            </span>
          </h1>
          
          {/* Subheadline */}
          <div className="bg-white/95 rounded-2xl p-6 mb-8 shadow-xl backdrop-blur-sm max-w-2xl mx-auto">
            <p className="text-2xl md:text-3xl text-grass-accent font-bold mb-2">
              Your #1 Bluegrass Jam Companion
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Shape the future of bluegrass jamming. Claim your spot, unlock exclusive recognition, 
              and help grow a vibrant new community.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg"
              className="min-w-[320px] bg-white text-grass-accent hover:bg-gray-50 font-bold text-lg py-4 px-8 rounded-xl shadow-xl transition-all hover:scale-105"
              onClick={() => window.open('https://tally.so/r/wv8RdQ', '_blank')}
            >
              🚀 Become One of The First 100!
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="min-w-[200px] bg-transparent border-2 border-white text-white hover:bg-white hover:text-grass-accent font-semibold text-lg py-4 px-8 rounded-xl transition-all hover:scale-105"
            >
              Contact Us
            </Button>
          </div>
          
          {/* App store badges */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="outline" 
              className="h-20 px-8 bg-white/95 border-0 text-gray-800 hover:bg-white shadow-lg backdrop-blur-sm rounded-xl transition-all hover:scale-105"
              onClick={() => window.open('https://apps.apple.com/us/app/grass-jam-companion/id6741807679', '_blank')}
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl">📱</div>
                <div className="text-left">
                  <div className="text-sm text-gray-600 font-medium">Download on the</div>
                  <div className="text-lg font-bold text-gray-900">App Store</div>
                </div>
              </div>
            </Button>
            
            <Button 
              variant="outline" 
              className="h-20 px-8 bg-white/95 border-0 text-gray-800 hover:bg-white shadow-lg backdrop-blur-sm rounded-xl transition-all hover:scale-105"
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.learngrass.grass&pcampaignid=web_share', '_blank')}
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl">🎮</div>
                <div className="text-left">
                  <div className="text-sm text-gray-600 font-medium">Get it on</div>
                  <div className="text-lg font-bold text-gray-900">Google Play</div>
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