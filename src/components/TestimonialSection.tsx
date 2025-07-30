import { Card, CardContent } from "@/components/ui/card";
const TestimonialSection = () => {
  return <section className="py-20 bg-gradient-to-br from-background to-secondary/30 relative overflow-hidden">
      {/* Background musical elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="musical-instrument animate-float-slow top-20 right-20">🎤</div>
        <div className="musical-instrument animate-float-medium bottom-20 left-20">🎼</div>
        <div className="musical-note animate-slide-musical top-1/2" style={{
        animationDelay: '2s'
      }}>♪</div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-bounce-in">
            Community Voices
          </h2>
          <p className="text-xl text-muted-foreground">
            What Our Community Says
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="bg-gradient-to-br from-card to-secondary/10 border-grass/20 shadow-lg btn-musical animate-bounce-in">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-6 animate-bounce-in" style={{
              animationDelay: '0.2s'
            }}>🎵</div>
              <blockquote className="text-xl text-muted-foreground italic mb-6 leading-relaxed">“A practical and inspiring tool, great for building confidence through structured practice.”</blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-grass rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg animate-pulse-glow">
                  B
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">Cameron Olson</div>
                  <div className="text-sm text-muted-foreground">Engineer Lead @ VCL Audio // Former Berklee College of Music Professor</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-2xl font-bold text-grass">
            <span>2</span>
            <span className="text-lg text-muted-foreground font-normal">2/100</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">have been claimed</p>
          <p className="text-lg font-semibold text-destructive mt-2">
            Don't miss your chance!
          </p>
        </div>
      </div>
    </section>;
};
export default TestimonialSection;