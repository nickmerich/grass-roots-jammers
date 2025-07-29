import { Button } from "@/components/ui/button";

const Footer = () => {
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
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-emerald-800 mb-4">
            Questions? Want to know more before signing up?
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