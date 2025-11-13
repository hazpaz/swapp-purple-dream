import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Layout from "@/components/Layout";

const Chat = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const conversation = location.state?.conversation || { name: "Chat", avatar: "?" };
  
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! Is this still available?", sender: "them", time: "10:30 AM" },
    { id: 2, text: "Yes, it is! Would you like to make an offer?", sender: "me", time: "10:32 AM" },
    { id: 3, text: "Great! I'm interested.", sender: "them", time: "10:33 AM" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        text: newMessage,
        sender: "me",
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      }]);
      setNewMessage("");
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background flex flex-col">
        {/* Header */}
        <header className="bg-card border-b border-border sticky top-0 z-10">
          <div className="max-w-[375px] mx-auto px-6 py-4">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigate("/inbox")}
                className="p-2 hover:bg-secondary rounded-full transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <Avatar className="h-10 w-10 bg-gradient-to-br from-primary to-accent">
                <AvatarFallback className="bg-transparent text-white font-semibold text-sm">
                  {conversation.avatar}
                </AvatarFallback>
              </Avatar>
              <h1 className="text-xl font-bold text-foreground">{conversation.name}</h1>
            </div>
          </div>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto max-w-[375px] mx-auto w-full px-6 py-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                  message.sender === "me"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className={`text-xs mt-1 ${
                  message.sender === "me" ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}>
                  {message.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="bg-card border-t border-border sticky bottom-0">
          <div className="max-w-[375px] mx-auto px-6 py-4">
            <div className="flex items-center gap-2">
              <Input
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 rounded-full border-border bg-secondary/50"
              />
              <Button
                size="icon"
                onClick={handleSend}
                className="rounded-full h-10 w-10 bg-primary hover:bg-primary/90"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Chat;
