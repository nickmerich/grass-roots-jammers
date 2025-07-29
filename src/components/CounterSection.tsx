import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CounterSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-grass/5 via-background to-accent/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join the Founding Jammers!
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Secure your spot in an exclusive community of bluegrass enthusiasts. 
            Limited to the first 100 members only.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Spots Claimed */}
            <Card className="bg-gradient-to-br from-grass/10 to-grass/5 border-grass/30 text-center">
              <CardHeader>
                <div className="text-5xl font-bold text-grass mb-2">2</div>
                <Badge className="bg-grass/20 text-grass hover:bg-grass/30 mx-auto">
                  🏆 Spots Claimed
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-semibold text-grass">ELITE STATUS</p>
              </CardContent>
            </Card>
            
            {/* Spots Remaining */}
            <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30 text-center">
              <CardHeader>
                <div className="text-5xl font-bold text-grass-accent mb-2">98</div>
                <Badge className="bg-accent/20 text-grass-accent hover:bg-accent/30 mx-auto">
                  🎯 Spots Remaining
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-semibold text-grass-accent">HURRY UP!</p>
              </CardContent>
            </Card>
            
            {/* Percentage Filled */}
            <Card className="bg-gradient-to-br from-destructive/10 to-destructive/5 border-destructive/30 text-center">
              <CardHeader>
                <div className="text-5xl font-bold text-destructive mb-2">2%</div>
                <Badge className="bg-destructive/20 text-destructive hover:bg-destructive/30 mx-auto">
                  🔥 Filled
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-semibold text-destructive">LIMITED</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Main CTA */}
          <div className="text-center">
            <Button 
              variant="hero" 
              size="lg"
              className="min-w-[320px] mb-6"
              onClick={() => window.open('https://tally.so/r/wv8RdQ', '_blank')}
            >
              🚀 Become One of The First 100!
            </Button>
            
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-grass">2/100</span> have been claimed
            </p>
            <p className="text-sm text-destructive font-semibold mt-1">
              Don't miss your chance!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;