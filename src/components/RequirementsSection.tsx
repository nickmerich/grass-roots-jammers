import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Fill Out Form",
    description: "Sign up with the form below and download the app using the same email."
  },
  {
    number: "02",
    title: "Download & Sign In",
    description: "Download the Grass app and sign in with your credentials."
  },
  {
    number: "03",
    title: "Join Slack Channel",
    description: "Join our private Slack channel for feedback and collaboration.",
    link: "https://grass-57l6555.slack.com/archives/C096QEB8AT1"
  },
  {
    number: "04",
    title: "Share Launch Graphic",
    description: "Share the Founding Member Graphic when we launch publicly. Nick will email your graphic the closer we get to launch."
  }
];

const RequirementsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Requirements
          </h2>
          <p className="text-xl text-muted-foreground mb-4 font-semibold">
            How It Works
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            To claim a spot, each invitee must complete these requirements. 
            Once all 100 spots are claimed, we go public with the campaign.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-card to-secondary/20 border-grass/20 hover:shadow-lg hover:shadow-grass/10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-6xl font-bold text-grass/10">
                {step.number}
              </div>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-grass rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {step.number}
                  </div>
                  <CardTitle className="text-xl text-foreground">{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {step.description}
                </p>
                {step.link && (
                  <Button 
                    variant="outline-grass" 
                    size="sm"
                    onClick={() => window.open(step.link, '_blank')}
                  >
                    Join Slack Channel
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;