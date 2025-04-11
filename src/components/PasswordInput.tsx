
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Lock, Key } from "lucide-react";

interface PasswordInputProps {
  correctPassword: string;
  onSuccess: () => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ correctPassword, onSuccess }) => {
  const [password, setPassword] = useState("");
  const [isShaking, setIsShaking] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password.toLowerCase() === correctPassword.toLowerCase()) {
      toast({
        title: "🎯 Success!",
        description: "Unlocking your treasure...",
        duration: 3000,
      });
      onSuccess();
    } else {
      setIsShaking(true);
      toast({
        title: "❌ Incorrect Code",
        description: "That's not the right code. Try again!",
        variant: "destructive",
        duration: 2000,
      });
      
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="space-y-5">
        <div className="flex items-center justify-center">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Lock className="h-5 w-5 text-secondary" />
            </div>
            <Input
              type="text"
              placeholder="Enter the Final Treasure Code"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`pl-10 border-2 border-secondary/80 p-6 text-xl bg-white/80 ${
                isShaking ? "animate-shake" : ""
              }`}
              style={{ 
                animation: isShaking ? "shake 0.5s ease-in-out" : "none" 
              }}
            />
          </div>
        </div>
        
        <Button 
          type="submit" 
          className="w-full text-lg py-6 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 shadow-lg border-2 border-amber-300 shine"
        >
          <Key className="mr-2 h-5 w-5" /> Unlock Treasure
        </Button>
      </div>

      {/* Adding the animation keyframes to the document */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-10px); }
          40%, 80% { transform: translateX(10px); }
        }
        
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}} />
    </form>
  );
};

export default PasswordInput;
