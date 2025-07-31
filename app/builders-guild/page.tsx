import React from "react";
import { Wrench, HardHat } from "lucide-react"; // Using more thematic icons

export default function BuildersGuildPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-primary/20 via-white to-secondary/20 bg-[length:200%_200%] animate-gradient-pan overflow-hidden">
      <div className="text-center p-12 rounded-xl shadow-2xl bg-white/80 border border-border/30 backdrop-blur-sm animate-fade-in-up">
        
        <div className="flex justify-center items-center gap-4 mb-8">
          
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
            Builders Guild
          </h1>
        </div>
        
        <p className="text-2xl text-muted-foreground mb-4 animate-fade-in-up animation-delay-300">
          This page is currently under construction.
        </p>
        
        <div className="flex justify-center my-8 animate-fade-in-up animation-delay-500">
          <Wrench className="animate-spin-slow text-primary" size={80} />
        </div>
        
        <p className="mt-6 text-lg text-accent font-semibold animate-fade-in-up animation-delay-700 animate-glow">
          Stay tuned for something amazing! 
        </p>
      </div>
    </div>
  );
}