import { ChevronLeft, User as UserIcon, Bell, Lock, LogOut, LogIn } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { icon: LogIn, label: "Sign In", action: "sign-in" },
  { icon: UserIcon, label: "Edit Profile", action: "edit-profile" },
  { icon: Bell, label: "Notifications", action: "notifications" },
  { icon: Lock, label: "Security", action: "security" },
  { icon: LogOut, label: "Log Out", action: "logout", danger: true },
];

const Profile = () => {
  const navigate = useNavigate();

  const handleMenuClick = (action: string) => {
    console.log("Action:", action);
    // Handle menu actions here
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
                <ChevronLeft className="h-6 w-6" />
              </button>
              <h1 className="text-2xl font-bold text-foreground">Profile</h1>
            </div>
          </div>
        </header>

        <div className="max-w-md mx-auto px-6 py-8">
          {/* Profile Header */}
          <div className="flex flex-col items-center mb-12">
            <Avatar className="h-32 w-32 mb-4 bg-gradient-to-br from-primary to-accent">
              <AvatarFallback className="bg-transparent text-white text-3xl font-bold">
                YN
              </AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold text-foreground">Your Name</h2>
          </div>

          {/* Menu Items */}
          <div className="space-y-2">
            {menuItems.map((item) => (
              <Button
                key={item.action}
                variant="ghost"
                className="w-full justify-start h-16 rounded-2xl hover:bg-secondary group"
                onClick={() => handleMenuClick(item.action)}
              >
                <div className={`
                  flex items-center gap-4 w-full
                  ${item.danger ? 'text-destructive' : 'text-foreground'}
                `}>
                  <div className={`
                    p-3 rounded-full transition-colors
                    ${item.danger 
                      ? 'bg-destructive/10 group-hover:bg-destructive/20' 
                      : 'bg-secondary group-hover:bg-primary/10'
                    }
                  `}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <span className="text-lg font-medium">{item.label}</span>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
