import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-emerald-200 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/73282b36-17a5-4333-8811-d0366015177c.png" 
              alt="Grass Logo"
              className="w-12 h-12 rounded-xl shadow-lg"
            />
            <span className="text-3xl font-black text-emerald-800">Grass</span>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              className="border border-emerald-300 text-emerald-700 hover:bg-emerald-50 font-medium px-6 py-2 rounded-lg transition-all"
              onClick={() => window.open('https://play.google.com/store/apps/details?id=com.learngrass.grass&pcampaignid=web_share', '_blank')}
            >
              📱 Download App
            </Button>
            <Button 
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2 rounded-lg transition-all hover:scale-105 shadow-lg"
              onClick={() => window.open('https://tally.so/r/wv8RdQ', '_blank')}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;