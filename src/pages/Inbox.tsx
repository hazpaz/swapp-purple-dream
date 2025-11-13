import { useState } from "react";
import { Search, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Layout from "@/components/Layout";
import { useNavigate } from "react-router-dom";

const conversations = [
  { id: "1", name: "Seller 1", message: "View chat.", avatar: "S1" },
  { id: "2", name: "John's Store", message: "Is this still available?", avatar: "JS" },
  { id: "3", name: "Sarah M.", message: "Great item! When can we meet?", avatar: "SM" },
  { id: "4", name: "Mike's Collection", message: "Thanks for the quick response", avatar: "MC" },
  { id: "5", name: "Tech Trader", message: "Can you do $50?", avatar: "TT" },
];

const Inbox = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredConversations = conversations.filter((conv) =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-card border-b border-border sticky top-0 z-10">
          <div className="max-w-md mx-auto px-6 py-4">
            <div className="flex items-center gap-4 mb-4">
              <button 
                onClick={() => navigate("/")}
                className="p-2 hover:bg-secondary rounded-full transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <h1 className="text-2xl font-bold text-foreground">Inbox</h1>
            </div>
            
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 rounded-2xl border-border bg-secondary/50"
              />
            </div>
          </div>
        </header>

        {/* Conversations list */}
        <div className="max-w-md mx-auto">
          <div className="divide-y divide-border">
            {filteredConversations.map((conversation) => (
              <div
                key={conversation.id}
                onClick={() => navigate("/chat", { state: { conversation } })}
                className="px-6 py-4 hover:bg-secondary/50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <Avatar className="h-14 w-14 bg-gradient-to-br from-primary to-accent">
                    <AvatarFallback className="bg-transparent text-white font-semibold">
                      {conversation.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground">{conversation.name}</h3>
                    <p className="text-sm text-muted-foreground truncate">
                      {conversation.message}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Inbox;
