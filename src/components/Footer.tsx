import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-16 bg-gradient-to-br from-nature-earth to-primary border-t border-grass/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            Questions? Want to know more before signing up?
          </h3>
          <p className="text-lg text-primary-foreground/80 mb-6">
            We're here to help you make the right decision for your bluegrass journey.
          </p>
          <Button 
            variant="outline" 
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => window.location.href = 'mailto:nick@learngrass.com'}
          >
            Contact Us
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <Button 
            variant="ghost" 
            size="icon"
            className="text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => window.open('https://www.instagram.com/learngrass/', '_blank')}
          >
            📸
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            className="text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => window.open('https://www.linkedin.com/company/107383705/admin/dashboard/', '_blank')}
          >
            💼
          </Button>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-primary-foreground/60 text-sm">
          © 2024 Learn Grass. Building the future of bluegrass music together.
        </div>
      </div>
    </footer>
  );
};

export default Footer;