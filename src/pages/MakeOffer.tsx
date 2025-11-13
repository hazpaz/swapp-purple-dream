import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const MakeOffer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state?.item;
  const { toast } = useToast();
  const [offer, setOffer] = useState("");
  const [message, setMessage] = useState("");

  if (!item) {
    navigate("/");
    return null;
  }

  const handleSubmitOffer = () => {
    if (!offer) {
      toast({
        title: "Error",
        description: "Please enter an offer amount",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Offer Submitted!",
      description: `Your offer of AED ${offer} has been sent to the seller.`,
    });

    setTimeout(() => {
      navigate("/inbox");
    }, 1500);
  };

  return (
    <Layout>
      <div className="p-6 max-w-md mx-auto">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(-1)}
          className="mb-4"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>

        <h1 className="text-3xl font-bold text-foreground mb-6">Make an Offer</h1>

        <Card className="p-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-gradient-to-br from-secondary to-muted rounded-lg" />
            <div>
              <h2 className="text-lg font-bold text-foreground">{item.title}</h2>
              <p className="text-sm text-muted-foreground">{item.age}</p>
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="offer">Your Offer Amount</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground font-semibold">
                AED
              </span>
              <Input
                id="offer"
                type="number"
                placeholder="0.00"
                value={offer}
                onChange={(e) => setOffer(e.target.value)}
                className="pl-16 text-lg h-12"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message to Seller (Optional)</Label>
            <Textarea
              id="message"
              placeholder="Add a message to your offer..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
            />
          </div>

          <Button
            size="lg"
            className="w-full h-12"
            onClick={handleSubmitOffer}
          >
            Submit Offer
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default MakeOffer;
