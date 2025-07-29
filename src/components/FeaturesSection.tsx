import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { List, Mic, MapPin, Video, TrendingUp, Music } from "lucide-react";

const features = [{
  title: "Jam Set Generator",
  description: "Plan the perfect setlist for your next porch session or local jam.",
  icon: List
}, {
  title: "Multi-Track Recordings",
  description: "Practice Lead, Rhythm, or Solo parts — filtered just for you.",
  icon: Mic
}, {
  title: "Find Jammers Near You",
  description: "Discover active jam circles near your city or zip.",
  icon: MapPin
}, {
  title: "Upload Clips & Join Challenges",
  description: "Show your progress, lead weekly challenges, and stay inspired.",
  icon: Video
}, {
  title: "Track Your Progress",
  description: "Build skills and confidence over time with visible growth.",
  icon: TrendingUp
}, {
  title: "200+ Bluegrass Standards",
  description: "Master the songs every jammer needs to know by heart.",
  icon: Music
}];
const FeaturesSection = () => {
  return <section className="py-20 bg-gradient-to-br from-secondary/30 to-background relative overflow-hidden">
      {/* Background musical pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="musical-note animate-slide-musical top-1/4" style={{
        animationDelay: '1s'
      }}>♪</div>
        <div className="musical-note animate-slide-musical top-1/2" style={{
        animationDelay: '3s'
      }}>♫</div>
        <div className="musical-note animate-slide-musical top-3/4" style={{
        animationDelay: '5s'
      }}>♬</div>
        <div className="musical-instrument animate-float-medium top-20 right-10">🎼</div>
        <div className="musical-instrument animate-float-slow bottom-20 left-10">🎵</div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-bounce-in">Why Musicians Choose Grass</h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Everything you need to become a confident bluegrass jammer, all in one beautifully designed app.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => <Card key={index} className="bg-gradient-to-br from-card to-accent/5 border-grass/20 hover:shadow-lg hover:shadow-grass/10 transition-all duration-300 btn-musical animate-bounce-in" style={{
          animationDelay: `${index * 0.2}s`
        }}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-grass/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-grass" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default FeaturesSection;