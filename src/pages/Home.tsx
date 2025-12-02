import { useState } from "react";
import { RefreshCw, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SwipeCard from "@/components/SwipeCard";
import Layout from "@/components/Layout";
import { useNavigate } from "react-router-dom";

const sampleItems = [
  { id: "1", title: "Area Carpet", age: "8 months old", image: "", price: 45 },
  { id: "2", title: "Shoe Rack", age: "3 weeks old", image: "", price: 25 },
  { id: "3", title: "Coffee Mugs Set", age: "45 days old", image: "", price: 15 },
  { id: "4", title: "Plastic Hangers (20pcs)", age: "2 months old", image: "", price: 8 },
  { id: "5", title: "Winter Jacket", age: "1 year old", image: "", price: 35 },
  { id: "6", title: "Dumbbell Set (10kg)", age: "5 months old", image: "", price: 55 },
  { id: "7", title: "Desk Lamp", age: "6 months old", image: "", price: 20 },
  { id: "8", title: "Mini Fridge", age: "2 years old", image: "", price: 60 },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [savedItems, setSavedItems] = useState<typeof sampleItems>([]);
  const navigate = useNavigate();

  const handleSwipe = (direction: "left" | "right") => {
    if (direction === "right") {
      navigate("/item-options", { state: { item: sampleItems[currentIndex] } });
    }
    setCurrentIndex((prev) => (prev + 1) % sampleItems.length);
  };

  const handleSave = () => {
    setSavedItems([...savedItems, sampleItems[currentIndex]]);
  };

  const handleRefresh = () => {
    setCurrentIndex(0);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-card border-b border-border sticky top-0 z-10">
          <div className="max-w-md mx-auto px-6 py-4 flex items-center justify-between">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Swapp
            </h1>
            <div className="flex gap-2">
              <Button 
                size="icon" 
                variant="ghost" 
                onClick={handleRefresh}
                className="rounded-full"
              >
                <RefreshCw className="h-5 w-5" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost"
                onClick={() => navigate("/inbox")}
                className="rounded-full"
              >
                <MessageSquare className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        <div className="max-w-md mx-auto px-6 py-6">
          <Tabs defaultValue="for-you" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 h-12 bg-secondary rounded-2xl">
              <TabsTrigger 
                value="for-you"
                className="rounded-xl data-[state=active]:bg-card data-[state=active]:shadow-sm data-[state=active]:text-primary font-semibold"
              >
                For you
              </TabsTrigger>
              <TabsTrigger 
                value="saved"
                className="rounded-xl data-[state=active]:bg-card data-[state=active]:shadow-sm data-[state=active]:text-primary font-semibold"
              >
                Saved
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="for-you" className="mt-0">
              <div className="py-8">
                {sampleItems[currentIndex] && (
                  <SwipeCard 
                    item={sampleItems[currentIndex]} 
                    onSwipe={handleSwipe}
                    onSave={handleSave}
                  />
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="saved" className="mt-0">
              <div className="space-y-4">
                {savedItems.length === 0 ? (
                  <div className="text-center py-20">
                    <p className="text-muted-foreground">No saved items yet</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Swipe right to save items
                    </p>
                  </div>
                ) : (
                  savedItems.map((item) => (
                    <div 
                      key={item.id}
                      className="bg-card rounded-2xl p-4 border border-border shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <span className="text-primary font-bold">{item.price} AED</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.age}</p>
                    </div>
                  ))
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
