import { useState } from "react";
import { ArrowLeft, Upload, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Add = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    age: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Item posted successfully!");
    navigate("/");
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-card border-b border-border sticky top-0 z-10">
          <div className="max-w-md mx-auto px-6 py-4">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigate("/")}
                className="p-2 hover:bg-secondary rounded-full transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <h1 className="text-2xl font-bold text-foreground">Add Item</h1>
            </div>
          </div>
        </header>

        <div className="max-w-md mx-auto px-6 py-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Image Upload */}
            <div>
              <Label htmlFor="image" className="text-base font-semibold mb-3 block">
                Photos
              </Label>
              <div className="aspect-square rounded-3xl border-2 border-dashed border-border bg-secondary/30 flex flex-col items-center justify-center cursor-pointer hover:bg-secondary/50 transition-colors">
                <ImageIcon className="h-16 w-16 text-muted-foreground mb-3" />
                <p className="text-muted-foreground font-medium">Upload Photos</p>
                <p className="text-sm text-muted-foreground mt-1">Tap to add images</p>
              </div>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title" className="text-base font-semibold">
                Item Name
              </Label>
              <Input
                id="title"
                placeholder="e.g., Vintage Camera"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="h-12 rounded-2xl"
                required
              />
            </div>

            {/* Age */}
            <div className="space-y-2">
              <Label htmlFor="age" className="text-base font-semibold">
                Age/Condition
              </Label>
              <Input
                id="age"
                placeholder="e.g., 2 years old"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                className="h-12 rounded-2xl"
                required
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description" className="text-base font-semibold">
                Description
              </Label>
              <Textarea
                id="description"
                placeholder="Tell us about your item..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="min-h-32 rounded-2xl resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              className="w-full h-14 text-lg font-semibold rounded-2xl bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
            >
              Post Item
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Add;
