import { Card, CardContent } from "@/components/ui/card";

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Community Voices
          </h2>
          <p className="text-xl text-muted-foreground">
            What Our Community Says
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="bg-gradient-to-br from-card to-secondary/10 border-grass/20 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-6">🎵</div>
              <blockquote className="text-xl text-muted-foreground italic mb-6 leading-relaxed">
                "I think the app is really good and it's been fun to utilize it and share with other folks."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-grass rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                  B
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">Brandon R.</div>
                  <div className="text-sm text-muted-foreground">Longtime Jammer</div>
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
    </section>
  );
};

export default TestimonialSection;