
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import PasswordInput from './PasswordInput';
import ConfettiEffect from './ConfettiEffect';
import { Trophy, Gift, PartyPopper, Heart, Lock } from "lucide-react";

// The password to unlock the treasure
const TREASURE_CODE = "hunt2024";

const TreasureHuntFinale: React.FC = () => {
  const [unlocked, setUnlocked] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  
  useEffect(() => {
    if (unlocked) {
      setShowConfetti(true);
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 6000);
      
      return () => clearTimeout(timer);
    }
  }, [unlocked]);
  
  const handleSuccess = () => {
    setUnlocked(true);
  };
  
  return (
    <div className="min-h-screen w-full treasure-bg flex items-center justify-center p-4">
      <ConfettiEffect active={showConfetti} />
      
      <Card className={`treasure-card w-full max-w-md mx-auto overflow-hidden ${unlocked ? 'scale-in' : ''}`}>
        <CardHeader className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white">
          <CardTitle className="text-center text-3xl md:text-4xl treasure-font">
            {unlocked ? (
              <span className="flex items-center justify-center">
                <Trophy className="h-8 w-8 mr-2 text-yellow-200" />
                Final Treasure
                <Trophy className="h-8 w-8 ml-2 text-yellow-200" />
              </span>
            ) : (
              <span className="flex items-center justify-center">
                Final Challenge
              </span>
            )}
          </CardTitle>
          <CardDescription className="text-white/90 text-center text-lg">
            {unlocked 
              ? "You've completed the hunt!" 
              : "Enter the Final Code to Unlock the Prize!"}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="p-6">
          {unlocked ? (
            <div className="space-y-6 text-center fade-in">
              <div className="text-4xl md:text-5xl font-bold text-center mb-4 treasure-font text-yellow-600 bounce-in">
                <PartyPopper className="h-12 w-12 mx-auto mb-2 text-secondary floating" />
                <span>Congratulations!</span>
              </div>
              
              <p className="text-2xl md:text-3xl font-medium text-gray-800">
                You won the Treasure Hunt!
              </p>
              
              <div className="p-4 bg-amber-50 rounded-xl border-2 border-amber-200 shadow-inner">
                <div className="flex items-center mb-2">
                  <Gift className="h-6 w-6 mr-2 text-secondary" />
                  <h3 className="text-xl font-semibold text-gray-800">Prize Pool:</h3>
                </div>
                <p className="text-3xl font-bold text-amber-600">₹5000</p>
              </div>
              
              <div className="pt-4">
                <p className="text-gray-700 text-lg">
                  Thank you for participating and giving your best!
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-amber-300 shadow-md">
                  <Lock className="h-8 w-8 text-amber-700" />
                </div>
                <p className="text-gray-600">
                  You've reached the final step! Enter the code you discovered during the treasure hunt.
                </p>
              </div>
              <PasswordInput correctPassword={TREASURE_CODE} onSuccess={handleSuccess} />
            </div>
          )}
        </CardContent>
        
        <CardFooter className="bg-gray-50 border-t border-gray-100 p-4 text-center text-sm text-gray-500">
          <div className="w-full flex items-center justify-center">
            <Heart className="h-4 w-4 mr-1 text-red-400" />
            <span>Created with love for all treasure hunters</span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TreasureHuntFinale;
