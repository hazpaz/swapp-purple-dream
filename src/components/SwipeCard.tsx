import { useState, useRef } from "react";
import { X, Check, MessageCircle, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SwipeCardProps {
  item: {
    id: string;
    title: string;
    age: string;
    image: string;
    price: number;
  };
  onSwipe: (direction: "left" | "right") => void;
  onSave: () => void;
}

const SwipeCard = ({ item, onSwipe, onSave }: SwipeCardProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState(0);
  const [startX, setStartX] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleSwipeLeft = () => {
    setOffset(-400);
    setTimeout(() => {
      onSwipe("left");
      setOffset(0);
    }, 300);
  };

  const handleSwipeRight = () => {
    setOffset(400);
    setTimeout(() => {
      onSwipe("right");
      setOffset(0);
    }, 300);
  };

  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const diff = clientX - startX;
    setOffset(diff);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    
    if (Math.abs(offset) > 100) {
      if (offset > 0) {
        handleSwipeRight();
      } else {
        handleSwipeLeft();
      }
    } else {
      setOffset(0);
    }
  };

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div 
        ref={cardRef}
        className={cn(
          "bg-card rounded-3xl overflow-hidden cursor-grab select-none",
          "shadow-[var(--shadow-card)]",
          isDragging ? "cursor-grabbing transition-none" : "transition-all duration-300"
        )}
        style={{
          transform: `translateX(${offset}px) rotate(${offset * 0.05}deg)`,
        }}
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onMouseMove={(e) => handleDragMove(e.clientX)}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
        onTouchEnd={handleDragEnd}
      >
        {/* Item image */}
        <div className="aspect-[4/5] bg-gradient-to-br from-secondary to-muted flex items-center justify-center relative overflow-hidden">
          {item.image ? (
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <X className="w-32 h-32 stroke-[1px] text-muted-foreground/20" />
            </div>
          )}
        </div>
        
        {/* Info section */}
        <div className="p-6 border-t border-border relative">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
              <p className="text-lg font-semibold text-primary">{item.price} AED</p>
              <p className="text-muted-foreground text-sm">{item.age}</p>
            </div>
            <Button 
              size="icon" 
              variant="ghost" 
              className="rounded-full h-12 w-12"
              onClick={(e) => {
                e.stopPropagation();
                onSave();
              }}
            >
              <Bookmark className="h-6 w-6 text-primary" />
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
