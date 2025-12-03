import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";

const Cover = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 via-background to-background flex flex-col items-center justify-center px-6 max-w-[375px] mx-auto">
      <div className="flex-1 flex flex-col items-center justify-center space-y-8 pb-20">
        {/* Logo/Icon */}
        <div className="relative">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg animate-scale-in">
            <Heart className="w-12 h-12 text-primary-foreground fill-current" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center animate-fade-in">
            <div className="w-3 h-3 rounded-full bg-accent-foreground" />
          </div>
        </div>

        {/* Title */}
        <div className="text-center space-y-3 animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Swapp
          </h1>
          <p className="text-lg text-muted-foreground max-w-[280px]">
            Swipe. Shop. Swap.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-4 text-center animate-fade-in">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-sm text-foreground/80">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Discover amazing items</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-sm text-foreground/80">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Negotiate with ease</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-sm text-foreground/80">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Connect with sellers</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          size="lg"
          className="w-full max-w-[280px] h-14 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all animate-fade-in group"
          onClick={() => navigate("/home")}
        >
          Get Started
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      {/* Footer */}
      <div className="pb-8 text-center animate-fade-in">
        <p className="text-xs text-muted-foreground">
          Your marketplace, reimagined
        </p>
      </div>
    </div>
  );
};

export default Cover;
