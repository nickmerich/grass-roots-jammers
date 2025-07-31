
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CounterSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-grass/5 via-background to-accent/10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="musical-instrument animate-float-slow top-10 left-10">🪕</div>
        <div className="musical-instrument animate-float-medium top-20 right-10">🎻</div>
        <div className="musical-instrument animate-float-fast bottom-20 left-1/3">🎸</div>
        <div className="musical-instrument animate-float-slow bottom-10 right-1/4">🪗</div>
        <div className="musical-note animate-slide-musical top-1/3" style={{animationDelay: '1s'}}>♪</div>
        <div className="musical-note animate-slide-musical top-2/3" style={{animationDelay: '3s'}}>♫</div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-bounce-in">
            Join the Founding Jammers!
          </h2>
          <p className="text-lg text-grass max-w-2xl mx-auto">
            Secure your spot in an exclusive community of bluegrass enthusiasts. 
            Limited to the first 100 members only.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Spots Claimed */}
            <Card className="bg-gradient-to-br from-grass/10 to-grass/5 border-grass/30 text-center btn-musical animate-bounce-in" style={{animationDelay: '0.1s'}}>
              <CardHeader>
                <div className="text-5xl font-bold text-grass mb-2 animate-pulse-glow">6</div>
                <Badge className="bg-grass/20 text-grass hover:bg-grass/30 mx-auto">
                  🏆 Spots Claimed
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-semibold text-grass">ELITE STATUS</p>
              </CardContent>
            </Card>
            
            {/* Spots Remaining */}
            <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30 text-center btn-musical animate-bounce-in" style={{animationDelay: '0.2s'}}>
              <CardHeader>
                <div className="text-5xl font-bold text-grass mb-2 animate-pulse-glow">94</div>
                <Badge className="bg-accent/20 text-grass hover:bg-accent/30 mx-auto">
                  🎯 Spots Remaining
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-semibold text-grass">HURRY UP!</p>
              </CardContent>
            </Card>
            
            {/* Percentage Filled */}
            <Card className="bg-gradient-to-br from-destructive/10 to-destructive/5 border-destructive/30 text-center btn-musical animate-bounce-in" style={{animationDelay: '0.3s'}}>
              <CardHeader>
                <div className="text-5xl font-bold text-grass mb-2 animate-pulse-glow">6%</div>
                <Badge className="bg-destructive/20 text-grass hover:bg-destructive/30 mx-auto">
                  🔥 Filled
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-semibold text-grass">LIMITED</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Main CTA */}
          <div className="text-center">
            <Button 
              variant="hero" 
              size="lg"
              className="min-w-[320px] mb-6 btn-musical animate-pulse-glow"
              onClick={() => window.open('https://tally.so/r/wv8RdQ', '_blank')}
            >
              🚀 Become One of The First 100!
            </Button>
            
            <p className="text-sm text-grass">
              <span className="font-semibold text-grass">6/100</span> have been claimed
            </p>
            <p className="text-sm text-grass font-semibold mt-1">
              Don't miss your chance!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
