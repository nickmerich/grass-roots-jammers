import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Jam Set Generator",
    description: "Effortlessly plan the perfect set for your next picking session."
  },
  {
    title: "Various Recordings",
    description: "Lead, Rhythm, Mine, All on a different filter for the user."
  },
  {
    title: "Clip Sharing & Challenges",
    description: "Show off your skills, lead community challenges, connect with other jammers."
  },
  {
    title: "Find Jammers",
    description: "Find Jammers near you"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Platform Features
          </h2>
          <p className="text-xl text-muted-foreground mb-4 font-semibold">
            What Makes Grass Different?
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the tools and features that make Grass the ultimate platform for 
            bluegrass musicians to connect, create, and grow together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-card to-accent/5 border-grass/20 hover:shadow-lg hover:shadow-grass/10 transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;