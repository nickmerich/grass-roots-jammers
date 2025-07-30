import { Button } from "@/components/ui/button";
import appStoreBadge from "@/assets/app-store-badge.svg";
const Header = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
              <img src="/lovable-uploads/75e9d92f-f567-4158-bcb2-95cc367d5a04.png" alt="Grass" className="w-14 h-14" />
            </div>
            
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-4">
            <img 
              src={appStoreBadge} 
              alt="Download on the App Store" 
              className="h-10 w-auto cursor-pointer hover:scale-105 transition-transform" 
              style={{ maxWidth: '135px' }}
              onClick={() => window.open('https://apps.apple.com/us/app/grass-jam-companion/id6741807679', '_blank')}
            />
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2 rounded-lg transition-all hover:scale-105 shadow-lg" onClick={() => window.open('https://tally.so/r/wv8RdQ', '_blank')}>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;