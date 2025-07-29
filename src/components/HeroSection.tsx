import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary to-accent/10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2334d399%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Limited spots badge */}
          <Badge className="mb-6 bg-grass-accent/20 text-grass hover:bg-grass-accent/30 text-sm px-4 py-2 border border-grass/20">
            🔥 Limited to First 100 Members Only
          </Badge>
          
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Become a{" "}
            <span className="bg-gradient-to-r from-grass to-grass-light bg-clip-text text-transparent">
              Founding Jammer
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            Your #1 Bluegrass Jam Companion!
          </p>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Shape the future of bluegrass jamming. Claim your spot, unlock exclusive recognition, 
            and help grow a vibrant new community.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="lg"
              className="min-w-[280px]"
              onClick={() => window.open('https://tally.so/r/wv8RdQ', '_blank')}
            >
              🚀 Become One of The First 100!
            </Button>
            <Button variant="outline-grass" size="lg" className="min-w-[200px]">
              Contact Us
            </Button>
          </div>
          
          {/* App store badges */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="outline" 
              className="h-16 px-6 border-grass/30 hover:border-grass"
              onClick={() => window.open('https://apps.apple.com/us/app/grass-jam-companion/id6741807679', '_blank')}
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">📱</div>
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </div>
            </Button>
            
            <Button 
              variant="outline" 
              className="h-16 px-6 border-grass/30 hover:border-grass"
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.learngrass.grass&pcampaignid=web_share', '_blank')}
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">🎮</div>
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
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