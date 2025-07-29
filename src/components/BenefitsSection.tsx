import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
  {
    icon: "⚡",
    title: "Early Access",
    description: "Be the first to try new features, jam tools, and collaborative spaces."
  },
  {
    icon: "👑",
    title: "Built By Jammers, For Jammers",
    description: "Display a special \"Founding Jammer\" icon in your profile—for life."
  },
  {
    icon: "🎯",
    title: "Community Impact",
    description: "Directly influence product roadmap, event schedules, and future releases."
  },
  {
    icon: "🎉",
    title: "Exclusive Events",
    description: "Get priority invites to launch jams and exclusive online sessions."
  },
  {
    icon: "🤝",
    title: "Invite Your Crew",
    description: "Get personalized invite codes to bring your favorite picking buddies along."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            🔥 Founding Jammer Benefits
          </h2>
          <p className="text-xl text-muted-foreground mb-4 font-semibold">
            Why Join as a Founding Jammer?
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            🚀 Get exclusive access, recognition, and the power to shape Grass future while building 
            lifelong connections from beginners to leaders in the bluegrass community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-card to-secondary/20 border-grass/20 hover:shadow-lg hover:shadow-grass/10 transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <CardTitle className="text-xl text-foreground">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;