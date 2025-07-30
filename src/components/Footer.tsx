import { Button } from "@/components/ui/button";
import { Instagram, Linkedin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const faqs = [
  {
    question: "What is a Founding Jammer?",
    answer: "Founding Jammers are the first 100 members who help shape the future of our bluegrass community. You'll get exclusive recognition, early access to features, and a voice in our development process."
  },
  {
    question: "What do I get as a Founding Member?",
    answer: "You'll receive lifetime access to the core app, a permanent Founding Member badge, invites to launch jams, access to our private Slack channel, and early access to future features."
  },
  {
    question: "Is there a cost to join?",
    answer: "No. Founding Member access is currently free. All we ask is your feedback and participation to help us grow."
  },
  {
    question: "What happens after 100 members?",
    answer: "Once we hit 100, we'll close this tier and begin our public launch campaign. Founding Members will retain their exclusive perks forever."
  },
  {
    question: "Do I need to be a professional musician?",
    answer: "Not at all! We're built for beginners and pros alike. If you're curious about bluegrass, you're in the right place."
  },
  {
    question: "What makes Grass different from other music apps?",
    answer: "Grass focuses on the authentic bluegrass experience of learning and playing music socially at jams, while pulling the tradition into a modern app."
  },
  {
    question: "How does the app help beginners who've never played bluegrass?",
    answer: "We start where bluegrass does: simple chords, lyrics, and listening to other musicians and learning by ear. We want beginners to feel welcome and capable."
  },
  {
    question: "Can advanced players benefit from the app?",
    answer: "Absolutely. Advanced users discover rare songs, track progress, and mentor newer players. Every musician is on some point on the same journey."
  },
  {
    question: "Is the app suitable for different instruments?",
    answer: "Yes! Grass is not for any one instrument but is accessible to everyone, including singers and instrumentalists."
  },
  {
    question: "How does Grass support live jam participation?",
    answer: "You'll be prepared with chord charts, lyrics, demo videos from other musicians, and a \"Near Me\" jam finder to get to the right place."
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
            We're excited for you to be part of the Grass community.
          </p>
          <Button 
            variant="outline" 
            className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white font-semibold px-8 py-3 rounded-xl transition-all hover:scale-105 shadow-lg"
            onClick={() => window.location.href = 'mailto:join@learngrass.com'}
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
             <Instagram className="w-6 h-6" />
           </Button>
           <Button 
             variant="outline" 
             size="lg"
             className="bg-white/80 border border-emerald-200 text-emerald-700 hover:bg-emerald-100 hover:scale-110 transition-all duration-300 shadow-lg rounded-xl w-16 h-16"
             onClick={() => window.open('https://www.linkedin.com/company/107383705/admin/dashboard/', '_blank')}
           >
             <Linkedin className="w-6 h-6" />
           </Button>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-emerald-600 text-sm font-medium bg-white/60 rounded-full px-6 py-3 mx-auto max-w-fit backdrop-blur-sm shadow-md">
          © 2025 Learn Grass. Building the future of bluegrass music together.
        </div>
      </div>
    </footer>
  );
};

export default Footer;