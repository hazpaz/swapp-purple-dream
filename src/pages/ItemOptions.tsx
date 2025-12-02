import { useNavigate, useLocation } from "react-router-dom";
import { MessageCircle, DollarSign, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";

const ItemOptions = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state?.item;

  if (!item) {
    navigate("/");
    return null;
  }

  return (
    <Layout>
      <div className="p-6 max-w-md mx-auto">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/")}
          className="mb-4"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>

        <Card className="p-6 mb-6">
          <div className="aspect-[4/5] bg-gradient-to-br from-secondary to-muted rounded-xl mb-4 overflow-hidden">
            {item.image && (
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            )}
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-1">{item.title}</h2>
          <p className="text-xl font-semibold text-primary mb-1">{item.price} AED</p>
          <p className="text-muted-foreground">{item.age}</p>
        </Card>

        <div className="space-y-4">
          <Button
            size="lg"
            className="w-full h-16 text-lg"
            onClick={() => navigate("/make-offer", { state: { item } })}
          >
            <DollarSign className="h-6 w-6 mr-2" />
            Make an Offer
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="w-full h-16 text-lg"
            onClick={() => navigate("/inbox")}
          >
            <MessageCircle className="h-6 w-6 mr-2" />
            Chat with Seller
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default ItemOptions;
