import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const faqs = [
  {
    question: "What is a Founding Jammer?",
    answer: "Founding Jammers are the first 100 members who help shape the future of our bluegrass community. You'll get exclusive recognition, early access to features, and a voice in our development process."
  },
  {
    question: "What do I get as a Founding Member?",
    answer: "Lifetime access to premium features, exclusive founding member badge, priority support, early access to new features, and the ability to influence our roadmap."
  },
  {
    question: "Is there a cost to join?",
    answer: "No! Becoming a Founding Jammer is completely free. We just ask that you be an active participant in our community and provide feedback."
  },
  {
    question: "What happens after 100 members?",
    answer: "Once we reach 100 founding members, we'll launch publicly with paid tiers. Founding members keep their benefits for life at no cost."
  },
  {
    question: "Do I need to know how to play bluegrass?",
    answer: "Not at all! Our app is designed for all skill levels, from complete beginners to experienced players. We'll help you learn and grow."
  }
];

const Footer = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <footer className="relative py-16 bg-gradient-to-br from-emerald-50 to-green-100 border-t border-emerald-200 overflow-hidden">
      {/* Floating Musical Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 animate-float-slow text-2xl opacity-20">🎻</div>
        <div className="absolute top-20 right-20 animate-float-medium text-2xl opacity-20">🪕</div>
        <div className="absolute bottom-16 left-20 animate-float-fast text-2xl opacity-20">🎸</div>
        <div className="absolute top-32 right-1/4 animate-float-slow text-xl opacity-20">🎵</div>
        <div className="absolute bottom-8 right-10 animate-float-medium text-xl opacity-20">♪</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* FAQ Section */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-emerald-800 mb-8 text-center">
            Frequently Asked Questions
          </h3>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index}
                className="bg-white/80 border border-emerald-200 hover:bg-white/90 transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader 
                  className="cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <CardTitle className="text-lg text-emerald-800 flex justify-between items-center">
                    {faq.question}
                    <span className="text-emerald-600 text-xl">
                      {openFaq === index ? '−' : '+'}
                    </span>
                  </CardTitle>
                </CardHeader>
                {openFaq === index && (
                  <CardContent className="pt-0">
                    <p className="text-emerald-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-emerald-800 mb-4">
            Still have questions?
          </h3>
          <p className="text-lg text-emerald-700 mb-6 max-w-2xl mx-auto">
            We're here to help you make the right decision for your bluegrass journey.
          </p>
          <Button 
            variant="outline" 
            className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white font-semibold px-8 py-3 rounded-xl transition-all hover:scale-105 shadow-lg"
            onClick={() => window.location.href = 'mailto:nick@learngrass.com'}
          >
            📩 Contact Us
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white/80 border border-emerald-200 text-emerald-700 hover:bg-emerald-100 hover:scale-110 transition-all duration-300 shadow-lg rounded-xl w-16 h-16"
            onClick={() => window.open('https://www.instagram.com/learngrass/', '_blank')}
          >
            <span className="text-2xl">📸</span>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white/80 border border-emerald-200 text-emerald-700 hover:bg-emerald-100 hover:scale-110 transition-all duration-300 shadow-lg rounded-xl w-16 h-16"
            onClick={() => window.open('https://www.linkedin.com/company/107383705/admin/dashboard/', '_blank')}
          >
            <span className="text-2xl">💼</span>
          </Button>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-emerald-600 text-sm font-medium bg-white/60 rounded-full px-6 py-3 mx-auto max-w-fit backdrop-blur-sm shadow-md">
          © 2024 Learn Grass. Building the future of bluegrass music together.
        </div>
      </div>
    </footer>
  );
};

export default Footer;