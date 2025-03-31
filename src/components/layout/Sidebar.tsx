
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { 
  Home, 
  BookOpen, 
  Flame, 
  GraduationCap, 
  PenTool, 
  Calendar, 
  Settings, 
  LogOut,
  Brain,
  Route
} from "lucide-react";
import { useAuth } from "@/context/auth";

export function Sidebar({ className }: { className?: string }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const navItems = [
    {
      icon: Home,
      label: "Dashboard",
      path: "/",
    },
    {
      icon: GraduationCap,
      label: "Qualifications",
      path: "/qualifications",
    },
    {
      icon: Route,
      label: "Learning Path",
      path: "/learning-path",
    },
    {
      icon: BookOpen,
      label: "Courses",
      path: "/courses",
    },
    {
      icon: Flame,
      label: "Flashcards",
      path: "/flashcards",
    },
    {
      icon: PenTool,
      label: "Assessment",
      path: "/assessment",
    },
    {
      icon: Calendar,
      label: "Study Planner",
      path: "/study-planner",
    },
    {
      icon: Brain,
      label: "AI Dashboard",
      path: "/agent-dashboard",
    },
    {
      icon: Settings,
      label: "Settings",
      path: "/settings",
    },
  ];

  return (
    <div className={cn("pb-12 min-h-screen", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-xl font-semibold tracking-tight">
            Study Bee
          </h2>
          <div className="space-y-1">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant={isActive(item.path) ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  isActive(item.path) && "bg-primary text-primary-foreground"
                )}
                onClick={() => handleNavigate(item.path)}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="px-4 absolute bottom-4 w-full">
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={() => signOut()}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </Button>
      </div>
    </div>
  );
}
