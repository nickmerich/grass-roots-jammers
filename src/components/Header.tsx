import { Button } from "@/components/ui/button";
const Header = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-emerald-200 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">🌱</span>
            </div>
            
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-4">
            <Button variant="outline" className="border border-emerald-300 text-emerald-700 hover:bg-emerald-50 font-medium px-6 py-2 rounded-lg transition-all" onClick={() => window.open('https://play.google.com/store/apps/details?id=com.learngrass.grass&pcampaignid=web_share', '_blank')}>
              📱 Download App
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2 rounded-lg transition-all hover:scale-105 shadow-lg" onClick={() => window.open('https://tally.so/r/wv8RdQ', '_blank')}>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;