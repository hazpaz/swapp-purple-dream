import { useState } from "react";
import { X, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SwipeCardProps {
  item: {
    id: string;
    title: string;
    age: string;
    image: string;
  };
  onSwipe: (direction: "left" | "right") => void;
}

const SwipeCard = ({ item, onSwipe }: SwipeCardProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState(0);

  const handleSwipeLeft = () => {
    onSwipe("left");
  };

  const handleSwipeRight = () => {
    onSwipe("right");
  };

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div 
        className={cn(
          "bg-card rounded-3xl overflow-hidden transition-transform",
          "shadow-[var(--shadow-card)]",
          isDragging && "cursor-grabbing"
        )}
        style={{
          transform: `translateX(${offset}px) rotate(${offset * 0.05}deg)`,
        }}
      >
        {/* Image placeholder */}
        <div className="aspect-[4/5] bg-gradient-to-br from-secondary to-muted flex items-center justify-center relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <X className="w-32 h-32 stroke-[1px] text-muted-foreground/20" />
          </div>
        </div>
        
        {/* Info section */}
        <div className="p-6 border-t border-border relative">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
              <p className="text-muted-foreground">{item.age}</p>
            </div>
            <Button size="icon" variant="ghost" className="rounded-full h-12 w-12">
              <MessageCircle className="h-6 w-6 text-primary" />
            </Button>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex justify-center gap-6 mt-8">
        <Button
          size="icon"
          variant="outline"
          className="h-16 w-16 rounded-full border-2 border-destructive hover:bg-destructive hover:text-destructive-foreground transition-all"
          onClick={handleSwipeLeft}
        >
          <X className="h-8 w-8" />
        </Button>
        
        <Button
          size="icon"
          variant="outline"
          className="h-16 w-16 rounded-full border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all"
          onClick={handleSwipeRight}
        >
          <Check className="h-8 w-8" />
        </Button>
      </div>
    </div>
  );
};

export default SwipeCard;
